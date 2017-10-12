import React from 'react'
import VDP from '@/VDP'
import FontsHOC from '@/HOC/Fonts'


class Vdp extends React.Component {

  constructor() {
    super();
    this.state = {
      vdp: {},
    }
  }

  componentDidMount() {

    fetch(`http://marketcheck-prod.apigee.net/v1/listing/ab2281d2-05fc-4d61-aa32-3fab037501c3?api_key=${process.env.API_VAR}`)
    .then(response => {
      if ( response.status !== 200) {
        console.log('Problem ' + response.status)
      }
      return response.json();
    }).then(data => {
      this.setState({ vdp: data});
    }).catch( error => {
      console.log('error message: ' + error.message)
    })

  }

  render () {
    if (!this.state.vdp.build) {
      return <div>Loading</div>
    }
    return <VDP {...this.state}/>
  }
}

export default FontsHOC(Vdp)
