import React from 'react'
import VDP from '@/VDP'
import FontsHOC from '@/HOC/Fonts'
import fetch from 'isomorphic-fetch'
import Loading from 'react-loading-animation'


class Vdp extends React.Component {

  constructor() {
    super();

    this.listingFetch = this.listingFetch.bind(this);
    this.fetchingData = this.fetchingData.bind(this);
    this.fetchScatterData = this.fetchScatterData.bind(this);
    this.findIdByVIN = this.findIdByVIN.bind(this);
    this.environmentalFriendliness = this.environmentalFriendliness.bind(this);
    this.summaryReport = this.summaryReport.bind(this);
    this.safetyRatings = this.safetyRatings.bind(this);
    this.dealerReviews = this.dealerReviews.bind(this);
    this.resaleValueFetch = this.resaleValueFetch.bind(this);
    this.fuelEfficiencyFetch = this.fuelEfficiencyFetch.bind(this);
    this.getDOMAverage = this.getDOMAverage.bind(this);
    this.historyFetch = this.historyFetch.bind(this);
    this.modelPopularityFetch = this.modelPopularityFetch.bind(this);

    this.state = {
      //initial VIN state
      vin: '1FA6P8CF2H5279752',
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
    }
  }

  componentDidMount() {
    this.findIdByVIN(this.state.vin);
    this.summaryReport(this.state.vin);
    this.fetchScatterData(this.state.vin);
    this.environmentalFriendliness(this.state.vin);
    this.safetyRatings(this.state.vin);
    this.resaleValueFetch(this.state.vin);
    this.fuelEfficiencyFetch(this.state.vin);
    this.historyFetch(this.state.vin);
  }

  findIdByVIN(vin) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&vin=${vin}`)
    .then( data => {
      if (data.listings) {
        //Get car id so we can use it for the Listing Fetch
        const carID = data.listings[0].id;
        //Get Year, Make, Model, Trim and Body Type so we can use it for the Model Popularity fetch
        const year = data.listings[0].build.year;
        const make = data.listings[0].build.make;
        const model = data.listings[0].build.model;
        const trim = data.listings[0].build.trim;
        const bodyType = data.listings[0].build.body_type;
        //We use the card ID to fetch car listing/VDP
        this.listingFetch(`http://${process.env.API_HOST}/v1/listing/${carID}?api_key=${process.env.API_VAR}`);
        this.modelPopularityFetch(year, make, model, trim, bodyType);
      }
    })
  }

  summaryReport(vin) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/vin_report_summary?vin=${vin}&api_key=${process.env.API_VAR}`)
      .then(summaryReport => {
        this.setState({ summaryReport })
      })
  }

  safetyRatings(vin) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/safety?vin=${vin}&api_key=${process.env.API_VAR}`)
      .then(safetyRatings => {
        this.setState({ safetyRatings })
      })
  }

  //Need to get back to this one
  historyFetch(vin) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/history/${vin}?api_key=${process.env.API_VAR}`)
      .then(vinHistory => {
        this.setState({ vinHistory })
      })
  }

  environmentalFriendliness(vin) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/economy?vin=${vin}&api_key=${process.env.API_VAR}`)
      .then(environmentalScores => {
        this.setState({ environmentalScores })
    })
  }

  fetchScatterData(vin) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&vins=${vin}&car_type=used&start=0&rows=10`)
    .then( response => {
      let averagePrice = 0;
      let averageMiles = 0;
      const cars = response.listings.filter((car) => {
        return (car.price && car.miles)
      })
      .map((car) => {
        averagePrice +=  car.price;
        averageMiles +=  car.miles;
        return { x: car.miles , y: car.price }
      })
      averagePrice = averagePrice / cars.length ;
      averageMiles = Math.round(averageMiles / cars.length) ;
      //averageMiles = averageMiles.toFixed(0);
      this.setState({ 
        scatterSimilar: cars,
        scatterNational: [{ x: averageMiles, y: averagePrice}],
        averageMarketMiles: averageMiles
      })
    })
  }

  listingFetch(url) {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json();
      }).then(data => {
        this.setState({ 
          vdp: data,
          scatterYourCar: [{ x: data.miles, y: data.price}],
        });
        //Using VDP response we can extract Dealer ID to fetch it's review
        this.dealerReviews(data.dealer.id);
        this.getDOMAverage(data.build.year, data.make, data.model);
      }).catch(error => {
        console.log('error message: ' + error.message)
      })
  }

  //Method to shorten all fetches a bit
  fetchingData(url) {
    return fetch(url) 
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json();
      })
  }

  resaleValueFetch(vin) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/depreciation?vin=${vin}&api_key=${process.env.API_VAR}`)
    .then( resaleValue => {
      //console.log(resaleValue);
      this.setState({ resaleValue: resaleValue.similar_models });
    })
  }

  fuelEfficiencyFetch(vin) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/fuel_efficiency?vin=${vin}&api_key=${process.env.API_VAR}`)
      .then(fuelEfficiency => {
        //console.log(resaleValue);
        this.setState({ fuelEfficiency});
      })
  }

  getDOMAverage(year, make, model) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&year=2017&make=ford&model=mustang&car_type=used&radius=100&stats=dom&latitude=32.75&longitude=-116.35`)
      .then(localAverage => {
        if(localAverage.stats.dom.mean) {
          this.setState({ localAverage: localAverage.stats.dom.mean });
        }
        
      });
    this.fetchingData(`http://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&year=2017&make=ford&model=mustang&car_type=used&radius=100&stats=dom`)
      .then(nationalAverage => {
        if(nationalAverage.stats.dom.mean) {
          this.setState({ nationalAverage: nationalAverage.stats.dom.mean });
        }     
      });
  }

  dealerReviews(id) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/dealer/${id}/reviews?api_key=${process.env.API_VAR}`)
      .then(dealerReviews => {
        this.setState({ dealerReviews })
      });

      this.fetchingData(` http://${process.env.API_HOST}/v1/dealer/${id}/ratings?api_key=${process.env.API_VAR}`)
      .then( dealerRatings => {
        this.setState({ dealerRatings})
      });
  }

  modelPopularityFetch(year, make, model, trim, bodyType) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/popularity?year=${year}&make=${make}&model=${model}&trim=${trim}&nodedup=true&body_type=${bodyType}&api_key=${process.env.API_VAR}`)
      .then( modelPopularity => {
        this.setState({ modelPopularity })
      })
  }


  render () {
    if (!this.state.vdp.build || this.state.localAverage === null || this.state.nationalAverage === null) {
      return <Loading style={{marginTop: '35vh'}}/>
    }
    return <VDP {...this.state} {...this.state.vdp}/>
  }
}

export default FontsHOC(Vdp)
