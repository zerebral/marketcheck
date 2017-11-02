import React, { Component } from 'react'
import Form from '~/Home/Hero/Form/index'
import fetch from 'isomorphic-fetch'


class HomeFormContainer extends Component {
  constructor() {
    super();

    this.fetchingData = this.fetchingData.bind(this);
    this.fetchModels = this.fetchModels.bind(this);
    this.fetchMakes = this.fetchMakes.bind(this);
    this.carTypeSelect = this.carTypeSelect.bind(this);
    this.makeSelect = this.makeSelect.bind(this);
    this.modelSelect = this.modelSelect.bind(this);
    this.findLatLng = this.findLatLng.bind(this);
    //this.handleSelect = this.handleSelect.bind(this);
    //this.handleChange = this.handleChange.bind(this);

    this.state = {
      models: {},
      makes: {},
      carType: '',
      selectedMake: null,
      selectedModel: null,
      loadingModels: false,
      latitude: '',
      longitude: '',
    }
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

  fetchModels(make) {
    this.setState({ loadingModels: true });
    this.fetchingData(`https://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&facets=model&make=${make}&rows=0`)
      .then( models => {
        if(models.facets.model) {
          this.setState({ models: models.facets.model });
          this.setState({ loadingModels: false });
        }       
      })
  }

  fetchMakes() {
    this.fetchingData(`https://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&facets=make&rows=0&nodedup=true`)
      .then(makes => {
        if (makes.facets.make) {
          this.setState({ makes: makes.facets.make })
        }
      })
  }

  carTypeSelect(e) {
    this.setState({ carType : e.target.value})
  }

  makeSelect(e) {
    this.setState({ selectedMake: e.target.value})
    this.fetchModels(e.target.value);
  }

  modelSelect(e) {
    this.setState({ selectedModel: e.target.value})
  }

  findLatLng(lat, lng) {
    this.setState({
      latitude: lat,
      longitude: lng
    });
  }

  

  componentDidMount() {
    this.fetchMakes();
  }

  render() {
    return (
      <Form {...this.state} 
      carTypeSelect={this.carTypeSelect} 
      makeSelect={this.makeSelect} 
      modelSelect={this.modelSelect} 
      findLatLng={this.findLatLng}
      />
    );
  }
}

export default HomeFormContainer;