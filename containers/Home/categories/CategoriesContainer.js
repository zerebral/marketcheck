import React, { Component } from 'react'
import urlEncodeParams from '%/factory/urlEncodeParams'
import CarLinks from '~/Home/Hero/CarLinks/index'
import fetch from 'isomorphic-fetch'
import { getNavigatorCoords, degreeToCardinal } from 'geo-loc-utils'

class CategoriesContainer extends Component {
  constructor () {
    super()
    this.fetchingData = this.fetchingData.bind(this)
    this.fetchingLatLong = this.fetchingLatLong.bind(this)
    this.getAddress = this.getAddress.bind(this)

    this.urlParams = {
      car_type: '',
      latitude: '',
      longitude: '',
      address: '',
      make: '',
      model: '',
      body_type: ''
    }

    this.state = {
      refreshURL: '',
      body_type: [],
      latitude: '',
      longitude: '',
      address: ''
    }
  }

  fetchingData (url) {
    return fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json()
      })
  }
    fetchingLatLong () {
        //LOGIC to GET USER LOCATION
        getNavigatorCoords()
            .then(position => {
                let lat = position.latitude
                let lng = position.longitude
                this.urlParams.latitude = lat,
                    this.urlParams.longitude = lng
                this.setState({
                    latitude: lat,
                    longitude: lng,
                }, () => {
                    this.getAddress()
                })
            })
    }

    getAddress(){
        this.fetchingData(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&result_type=locality&sensor=true&key=AIzaSyCIQkp6IJO170R9QTJESoNk8h0cR__qIdM`)
            .then(results => {
                if (results["results"][0]) {
                    this.setState({
                        address: results["results"][0].formatted_address
                    })
                } else {
                    alert("No results found");
                }
            })
    }


  componentDidMount () {
    // this.fetchMakes()
    this.fetchingLatLong()
    // this.getAddress()
  }

  render () {
    return (
        <CarLinks bodytypes={this.props.links} props={this.props} />
    )
  }
}

export default CategoriesContainer
