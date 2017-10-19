import React from 'react'
import VDP from '@/VDP'
import FontsHOC from '@/HOC/Fonts'
import fetch from 'isomorphic-fetch';


class Vdp extends React.Component {

  constructor() {
    super();

    this.listingFetch = this.listingFetch.bind(this);
    this.trendsFetch = this.trendsFetch.bind(this);
    this.fetchingData = this.fetchingData.bind(this);
    this.fetchScatterData = this.fetchScatterData.bind(this);

    this.state = {
      vdp: {},
      trends: [],
      scatterSimilar: [],
      scatterNational: [],
      scatterYourCar: [],
      averageMarketMiles: ''
    }
  }

  componentDidMount() {
    this.listingFetch(`http://${process.env.API_HOST}/v1/listing/fa46aad0-6f22-4965-a34d-4cee955aa4e5?api_key=${process.env.API_VAR}`);
    this.trendsFetch(`http://${process.env.API_HOST}/v1/trends?api_key=${process.env.API_VAR}&vin=1FA6P8CF2H5279752&car_type=used`);
    this.fetchScatterData();
  }

  fetchScatterData() {
    this.fetchingData(`http://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&vins=1FA6P8CF2H5279752&latitude=34.05&longitude=-118.24&radius=100&car_type=used&start=0&rows=10`)
    .then( response => {
      //debugger;
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
        // scatterYourCar: [{ x: 15, y: 5 }]
      })
      //debugger
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
      });
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

          data.trends.forEach(item => {
            item['name'] = item['month'] + "/" + item['year'];
          });

          let overTimemiles = 0;
          let averageOverTimeMiles = 0;
          const trendsResponse = data.trends;
          data.trends.map((car) => {
             overTimemiles += car.miles;
             averageOverTimeMiles = overTimemiles / trendsResponse.length;
          });
          //console.log(JSON.stringify(data.trends, null, 2));
          this.setState({ trends: data.trends.reverse()});
        }

      }).catch(error => {
        console.log('error message: ' + error.message)
      })
  }
  

  render () {
    // if (!this.state.vdp.build) {
    //   return <div>Loading</div>
    // }
    if (!this.state.vdp.build || this.state.trends.length < 1) {
      return <div>Loading</div>
    }
    return <VDP {...this.state} {...this.state.vdp}/>
  }
}

export default FontsHOC(Vdp)
