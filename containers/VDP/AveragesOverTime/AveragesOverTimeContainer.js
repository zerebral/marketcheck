import React, { Component } from 'react';
import AveragesOverTimeDesktop from '~/VDP/Desktop/Contents/AveragesOverTime/AveragesOverTime';
//import AveragesOverTimeMobile from '~/Mobile/Contents/AveragesOverTime/AveragesOverTime';
import fetch from 'isomorphic-fetch';

class AveragesOverTimeContainer extends Component {
  constructor(props) {
    super(props);

    this.trendsFetch = this.trendsFetch.bind(this);

    this.state = {
      trends: [],
      testing: 'testing from container'
    }
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
          //console.log(JSON.stringify(data.trends, null, 2));
          this.setState({ trends: data.trends.reverse() });
        }

      }).catch(error => {
        console.log('error message: ' + error.message)
      })
  }

  componentDidMount() {
    console.log('container');
    //this.trendsFetch(`http://${process.env.API_HOST}/v1/trends?api_key=${process.env.API_VAR}&vin=1FMCU9GXXEUA10071&car_type=used`)
  }

  render() {
    return   <AveragesOverTimeDesktop {...this.state} testing="from container"/>
  }
}

export default AveragesOverTimeContainer;