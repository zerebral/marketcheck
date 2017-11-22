import React, { Component } from 'react'
import Form from '~/Home/Hero/Form/index'
import fetch from 'isomorphic-fetch'

class HomeFormContainer extends Component {
  constructor () {
    super()

    this.fetchingData = this.fetchingData.bind(this)
    this.fetchModels = this.fetchModels.bind(this)
    this.fetchMakes = this.fetchMakes.bind(this)
    this.carTypeSelect = this.carTypeSelect.bind(this)
    this.makeSelect = this.makeSelect.bind(this)
    this.modelSelect = this.modelSelect.bind(this)
    this.findLatLng = this.findLatLng.bind(this)
    // this.handleSelect = this.handleSelect.bind(this);
    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      models: {},
      makes: {},
      carType: '',
      selectedMake: null,
      selectedModel: null,
      loadingModels: false,
      loadingMakers: false,
      latitude: '',
      longitude: ''
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

  fetchModels (make) {
    this.setState({ loadingModels: true })
    this.fetchingData(`https://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&facets=model|0|60&make=${make}&rows=00&nodedup=true`)
      .then(models => {
        if (models.facets.model) {
          this.setState({ models: models.facets.model })
          this.setState({ loadingModels: false })
        }
      })
  }

  fetchMakes() {
    this.setState({ loadingMakers: true });
    this.fetchingData(`https://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&facets=make|0|60&rows=0&nodedup=true`)
      .then(makes => {
        if (makes.facets.make) {
          this.setState({ makes: makes.facets.make })
          this.setState({ loadingMakers: false });
        }
      })
  }

  carTypeSelect(value) {
    this.setState({ carType : value})
  }

  makeSelect(value) {
    this.setState({ selectedMake: value})
    this.fetchModels(value);
  }

  modelSelect(value) {
    this.setState({ selectedModel: value})
  }

  findLatLng (lat, lng, address) {
    this.setState({
      latitude: lat,
      longitude: lng,
      address: address
    })
  }

  submitSearchSession (e, state) {
    e.preventDefault()

    localStorage.removeItem("searchSession")
    sessionStorage.removeItem("searchSession")
    sessionStorage.setItem("searchSession", JSON.stringify(this.state))
    window.location.href = "/srp";
  }

  componentDidMount () {
    this.fetchMakes()
  }

  render () {
    return (
      <Form {...this.state}
        carTypeSelect={this.carTypeSelect}
        makeSelect={this.makeSelect}
        modelSelect={this.modelSelect}
        findLatLng={this.findLatLng}
        onSubmit={this.submitSearchSession.bind(this)}
      />
    )
  }
}

export default HomeFormContainer
