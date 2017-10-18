import React from 'react'
import VDP from '@/VDP'
import FontsHOC from '@/HOC/Fonts'
import fetch from 'isomorphic-fetch';


class Vdp extends React.Component {

  constructor() {
    super();

    this.listingFetch = this.listingFetch.bind(this);
    this.trendsFetch = this.trendsFetch.bind(this);

    this.state = {
      vdp: {},
      trends: [],
    }
  }

  componentDidMount() {
    this.listingFetch(`http://${process.env.API_HOST}/v1/listing/ab2281d2-05fc-4d61-aa32-3fab037501c3?api_key=${process.env.API_VAR}`);
    this.trendsFetch(`http://${process.env.API_HOST}/v1/trends?api_key=${process.env.API_VAR}&vin=1FMCU9GXXEUA10071&car_type=used`)
  }

  listingFetch(url) {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json();
      }).then(data => {
        this.setState({ vdp: data });
      }).catch(error => {
        console.log('error message: ' + error.message)
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
          this.setState({ trends: data.trends });
        }
        //this.setState({ trends: data });
      }).catch(error => {
        console.log('error message: ' + error.message)
      })
  }

  render () {
    if (!this.state.vdp.build || this.state.trends.length < 1) {
      return <div>Loading</div>
    }
    return <VDP {...this.state.vdp} {...this.state}/>
  }
}

export default FontsHOC(Vdp)
