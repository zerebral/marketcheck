import React from 'react'
import VDP from '@/VDP'
import FontsHOC from '@/HOC/Fonts'
import fetch from 'isomorphic-fetch'
import Loading from 'react-loading-animation'
import autobind from 'class-autobind'

class Vdp extends React.Component {

  static async getInitialProps({query}) {

    return {vin: query.vin}
  }

  constructor (props) {
    super(props)

    console.log(props)

    this.myInit = { 
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }

    this.listingFetch = this.listingFetch.bind(this)
    this.fetchingData = this.fetchingData.bind(this)
    this.fetchScatterData = this.fetchScatterData.bind(this)
    this.findIdByVIN = this.findIdByVIN.bind(this)
    this.environmentalFriendliness = this.environmentalFriendliness.bind(this)
    this.summaryReport = this.summaryReport.bind(this)
    this.safetyRatings = this.safetyRatings.bind(this)
    this.dealerReviews = this.dealerReviews.bind(this)
    this.resaleValueFetch = this.resaleValueFetch.bind(this)
    this.fuelEfficiencyFetch = this.fuelEfficiencyFetch.bind(this)
    this.getDOMAverage = this.getDOMAverage.bind(this)
    this.historyFetch = this.historyFetch.bind(this)
    this.modelPopularityFetch = this.modelPopularityFetch.bind(this)
    this.averagesFetch = this.averagesFetch.bind(this)

    this.state = {
      // initial VIN state
      vin: this.props.vin ? this.props.vin : 'KMHDH4AE1EU134863',
      latitude: 32.75,
      longitude: -116.35,
      vdp: {},
      scatterSimilar: [],
      scatterNational: [],
      scatterYourCar: [],
      averageMarketMiles: '',
      environmentalScores: {},
      summaryReport: [],
      safetyRatings: {},
      dealerReviews: {},
      dealerRatings: {},
      resaleValue: [],
      fuelEfficiency: {},
      localAverage: null,
      nationalAverage: null,
      vinHistory: [],
      modelPopularity: [],
      averages: {},
      similarModelsGraph: [],
      fetchReady: false
    }
    autobind(this)
  }

  componentDidMount () {
    this.findIdByVIN(this.state.vin)
    this.summaryReport(this.state.vin)
    this.fetchScatterData(this.state.vin)
    this.environmentalFriendliness(this.state.vin)
    this.safetyRatings(this.state.vin)
    this.resaleValueFetch(this.state.vin)
    this.fuelEfficiencyFetch(this.state.vin)
    this.historyFetch(this.state.vin)
    this.averagesFetch(this.state.vin)
  }

  findIdByVIN (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&vin=${vin}&nodedup=true`)
    .then(data => {
      if (data.listings) {
        // Get car id so we can use it for the Listing Fetch
        const carID = data.listings[0].id
        // Get Year, Make, Model, Trim and Body Type so we can use it for the Model Popularity fetch
        const year = data.listings[0].build.year
        const make = data.listings[0].build.make
        const model = data.listings[0].build.model
        const trim = data.listings[0].build.trim
        const bodyType = data.listings[0].build.body_type
        // We use the card ID to fetch car listing/VDP
        this.listingFetch(`https://${process.env.API_HOST}/v1/listing/${carID}?api_key=${process.env.API_VAR}&nodedup=true`)
        this.modelPopularityFetch(year, make, model, trim, bodyType)
      }
    })
  }

  summaryReport (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/vin_report_summary?api_key=${process.env.API_VAR}&vin=${vin}&nodedup=true`)
      .then(summaryReport => {
        this.setState({ summaryReport })
      })
  }

  averagesFetch (vin) {
    this.fetchingData(`https://${process.env.API_HOST}//v1/averages?api_key=${process.env.API_VAR}&vin=${vin}&nodedup=true`)
      .then(averages => {
        this.setState({ averages })
      })
  }

  safetyRatings (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/safety?api_key=${process.env.API_VAR}&vin=${vin}&nodedup=true`)
      .then(safetyRatings => {
        this.setState({ safetyRatings })
      })
  }

  // Need to get back to this one
  historyFetch (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/history/${vin}?api_key=${process.env.API_VAR}&nodedup=true`)
      .then(vinHistory => {
        this.setState({ vinHistory })
      })
  }

  environmentalFriendliness (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/economy?api_key=${process.env.API_VAR}&vin=${vin}&nodedup=true`)
      .then(environmentalScores => {
        this.setState({ environmentalScores })
      })
  }

  fetchScatterData (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&vins=${vin}&car_type=used&start=0&rows=10&nodedup=true`)
    .then(response => {
      let averagePrice = 0
      let averageMiles = 0
      const cars = response.listings.filter((car) => {
        return (car.price && car.miles)
      })
      .map((car) => {
        averagePrice += car.price
        averageMiles += car.miles
        return { x: car.miles, y: car.price }
      })
      averagePrice = averagePrice / cars.length
      averageMiles = Math.round(averageMiles / cars.length)
      // averageMiles = averageMiles.toFixed(0);
      this.setState({
        scatterSimilar: cars,
        scatterNational: [{x: averageMiles, y: averagePrice}],
        averageMarketMiles: averageMiles
      })
    })
  }

  listingFetch (url) {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json()
      }).then(data => {
        this.setState({
          vdp: data,
          scatterYourCar: [{x: data.miles, y: data.price}],
          fetchReady: true
        })
        // Using VDP response we can extract Dealer ID to fetch it's review
        this.dealerReviews(data.dealer.id)
        this.getDOMAverage(data.build.year, data.make, data.model)
      }).catch(error => {
        console.log('error message: ' + error.message)
      })
  }

  // Method to shorten all fetches a bit
  fetchingData (url) {
    return fetch(url, this.myInit)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json()
      })
  }

  resaleValueFetch (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/depreciation?api_key=${process.env.API_VAR}&vin=${vin}&nodedup=true`)
    .then(resaleValue => {
      // console.log(resaleValue);
      this.setState({ resaleValue: resaleValue.similar_models })
      const similarModels = resaleValue.similar_models
      let currentYear = new Date().getFullYear()
      let dataArray = [
        { name: currentYear, key: 'current_value' },
        { name: currentYear + 1, key: 'one_year_from_now' },
        { name: currentYear + 2, key: 'two_year_from_now' },
        { name: currentYear + 5, key: 'five_year_from_now' }
      ]

      dataArray.forEach(function (dataElement) {
        similarModels.forEach(function (similarModel, index) {
          dataElement['car' + (index + 1)] = similarModel[dataElement.key]
        })
      })
      this.setState({similarModelsGraph: dataArray})
     // console.log(dataArray);
    })
  }

  fuelEfficiencyFetch (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/fuel_efficiency?api_key=${process.env.API_VAR}&vin=${vin}&nodedup=true`)
      .then(fuelEfficiency => {
        // console.log(resaleValue);
        this.setState({fuelEfficiency})
      })
  }

  getDOMAverage (year, make, model) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&year=2017&make=ford&model=mustang&car_type=used&radius=100&stats=dom&latitude=32.75&longitude=-116.35&nodedup=true`)
      .then(localAverage => {
        if (localAverage.stats.dom.mean) {
          this.setState({ localAverage: localAverage.stats.dom.mean })
        }
      })
    this.fetchingData(`https://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&year=2017&make=ford&model=mustang&car_type=used&radius=100&stats=dom&nodedup=true`)
      .then(nationalAverage => {
        if (nationalAverage.stats.dom.mean) {
          this.setState({ nationalAverage: nationalAverage.stats.dom.mean })
        }
      })
  }

  dealerReviews (id) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/dealer/${id}/reviews?api_key=${process.env.API_VAR}&nodedup=true`)
      .then(dealerReviews => {
        this.setState({ dealerReviews })
      })

    this.fetchingData(` https://${process.env.API_HOST}/v1/dealer/${id}/ratings?api_key=${process.env.API_VAR}&nodedup=true`)
      .then(dealerRatings => {
        this.setState({dealerRatings})
      })
  }

  modelPopularityFetch (year, make, model, trim, bodyType) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/popularity?api_key=${process.env.API_VAR}&year=${year}&make=${make}&model=${model}&trim=${trim}&body_type=${bodyType}&nodedup=true`)
      .then(modelPopularity => {
        this.setState({ modelPopularity })
      })
  }

  render () {
    if (!this.state.vdp.build || this.state.localAverage === null || this.state.nationalAverage === null) {
      return <Loading style={{marginTop: '35vh'}} />
    }
    return <VDP {...this.state} {...this.state.vdp} />
  }
}

export default Vdp
