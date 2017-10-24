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
    }
  }

  componentDidMount() {
    this.findIdByVIN(this.state.vin);
    this.fetchScatterData(this.state.vin);
    this.environmentalFriendliness(this.state.vin);
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
          scatterYourCar: [{ x: data.miles, y: data.price}]
        });
      }).catch(error => {
        console.log('error message: ' + error.message)
      })
  }

  fetchingData(url) {
    return fetch(url) 
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json();
      })
  }

  trendsFetch(url) {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json();
      }).then(data => {
        if (data.trends) {
          
          //Convert number strings to actual numbers in Obj
          for (var i = 0; i < data.trends.length; i++) {
            var obj = data.trends[i];
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])) {
                obj[prop] = parseInt(+obj[prop]);
              }
            }
          }

          //Create new object value to hold month and year
          data.trends.forEach(item => {
            item['name'] = item['month'] + "/" + item['year'];
          });

          //Calculate averages
          let overTimeMiles = 0;
          let averageOverTimeMiles = 0;
          const trendsResponse = data.trends;
          data.trends.map((car) => {
            overTimeMiles += car.miles;
            averageOverTimeMiles = overTimeMiles / trendsResponse.length;
          });
          this.setState({ trends: data.trends.reverse()});
        }

      }).catch(error => {
        console.log('error message: ' + error.message)
      })
  }
  

  render () {
    if (!this.state.vdp.build) {
      return <Loading style={{marginTop: '35vh'}}/>
    }
    return <VDP {...this.state} {...this.state.vdp}/>
  }
}

export default FontsHOC(Vdp)
