import React, { Component } from 'react'
import Form from '~/Home/Hero/Form/index'
import fetch from 'isomorphic-fetch'


class HomeFormContainer extends Component {
  constructor() {
    super();

    this.fetchingData = this.fetchingData.bind(this);
    this.fetchModels = this.fetchModels.bind(this);

    this.state = {
      models: {},
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
    this.fetchingData(`http://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&facets=model&make=${make}&rows=0`)
      .then( models => {
        if(models.facets.model) {
          this.setState({ models: models.facets.model })
        }       
      })
  }

  componentDidMount() {
    this.fetchModels('ford');
  }

  render() {
    return (
        <Form {...this.state}/>
    );
  }
}

export default HomeFormContainer;