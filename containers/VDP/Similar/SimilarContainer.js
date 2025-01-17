import React, { Component } from 'react'
import SimilarDesktop from '~/VDP/Desktop/Contents/Similar/Similar'
import SimilarMobile from '~/VDP/Mobile/Contents/Similar/Similar'
import fetch from 'isomorphic-fetch'
import Aux from 'react-aux'
import styled from 'styled-components'
import { mediaMin } from '%/styles/mixins'
import Loading from 'react-loading-animation'

const Desktop = styled(SimilarDesktop)`
  display: none;
  ${mediaMin.laptop`
    display: block;
  `}
`

const Mobile = styled(SimilarMobile)`
  display: block;
  ${mediaMin.laptop`
    display: none;
  `}
`

class SimilarContainer extends Component {
  constructor () {
    super()

    this.similarFetch = this.similarFetch.bind(this)
    this.dealerReviews = this.dealerReviews.bind(this)
    this.fetchingData = this.fetchingData.bind(this)

    this.state = {
      cars: [],
      numFound: '',
      similarCarsDealerReviews: [],
      similarCarsDealerRatings: []
    }
  }

  // Method to shorten all fetches a bit
  fetchingData (url) {
    return fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json()
      })
  }

  similarFetch (url) {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json()
      }).then(data => {
        // If we get data for listings proceed
        if (data.listings) {
          this.setState({
            cars: data.listings,
            numFound: data.num_found
          })
          // Get Dealer id for each car
          data.listings.map((car) => {
            this.dealerReviews(car.dealer.id)
          })
        }
      }).catch(error => {
        console.log('error message: ' + error.message)
      })
  }

  dealerReviews (id) {
    this.fetchingData(`https://${process.env.API_HOST}/v1/dealer/${id}/reviews?api_key=${process.env.API_VAR}`)
      .then(carsDealerReviews => {
        this.setState({ similarCarsDealerReviews: [...this.state.similarCarsDealerReviews, carsDealerReviews] })
      })

    this.fetchingData(`https://${process.env.API_HOST}/v1/dealer/${id}/ratings?api_key=${process.env.API_VAR}`)
        .then(carsDealerRatings => {
          this.setState({similarCarsDealerRatings: [...this.state.similarCarsDealerRatings, carsDealerRatings]})
        })
  }

  componentDidMount () {
    this.similarFetch(`https://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}&vins=${this.props.vin}&latitude=34.05&longitude=-118.24&radius=100&car_type=used&start=0&rows=3`)
  }

  render () {
    if (this.state.cars.length < 1 || this.state.similarCarsDealerReviews < 1) {
      return <Loading />
    }
    return (
      <Aux>
        <Desktop {...this.state} {...this.props} />
        <Mobile {...this.state} {...this.props} />
      </Aux>
    )
  }
}

export default SimilarContainer
