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
    //this.historyFetch = this.historyFetch.bind(this);

    this.state = {
      //initial VIN state
      vin: '1FA6P8CF2H5279752',
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
    }
  }

  componentDidMount() {
    this.findIdByVIN(this.state.vin);
    this.summaryReport(this.state.vin);
    this.fetchScatterData(this.state.vin);
    this.environmentalFriendliness(this.state.vin);
    this.safetyRatings(this.state.vin);
  }

  findIdByVIN(vin) {
    this.fetchingData(`http://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&vin=${vin}`)
    .then( data => {
      if (data.listings) {
        const carID = data.listings[0].id;
        //We use the card ID to fetch car listing/VDP
        this.listingFetch(`http://${process.env.API_HOST}/v1/listing/${carID}?api_key=${process.env.API_VAR}`);
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


  render () {
    if (!this.state.vdp.build) {
      return <Loading style={{marginTop: '35vh'}}/>
    }
    return <VDP {...this.state} {...this.state.vdp}/>
  }
}

export default FontsHOC(Vdp)
