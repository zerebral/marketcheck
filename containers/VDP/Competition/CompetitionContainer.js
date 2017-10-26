import React, { Component } from 'react';
import CompetitionDesktop from '~/VDP/Desktop/Contents/Competition/Competition';
import CompetitionMobile from '~/VDP/Mobile/Contents/Competition/Competition';
import fetch from 'isomorphic-fetch';
import Aux from 'react-aux';
import styled from 'styled-components'
import { mediaMin } from '%/styles/mixins'
import Loading from 'react-loading-animation'
import { currency, number } from '%/format'

const Desktop = styled(CompetitionDesktop)`
  display: none;
  ${mediaMin.laptop`
    display: block;
  `}
`

const Mobile = styled(CompetitionMobile)`
  display: block;
  ${mediaMin.laptop`
    display: none;
  `}
`

class CompetitionContainer extends Component {
  constructor() {
    super();

    //this.similarFetch = this.similarFetch.bind(this);
    this.competitionFetch = this.competitionFetch.bind(this);

    this.state = {
      competition: [],
    }
  }

  // similarFetch(url) {
  //   fetch(url)
  //     .then(response => {
  //       if (response.status !== 200) {
  //         console.log('Problem ' + response.status)
  //       }
  //       return response.json();
  //     }).then(data => {
  //       //If we get data for listings proceed
  //       if (data.listings) {
  //         console.log(data.listings)
  //         //Array for massaged data for simpler consumption on table component
  //         let competitionData = [];
  //         //Variable to calculate average miles and prices later
  //         let averagePrice = 0;
  //         let averageMiles = 0;
  //         const cars = data.listings.filter((car) => {
  //           return (car.price && car.miles)
  //         })
  //           .map((car) => {
  //             averagePrice += car.price;
  //             averageMiles += car.miles;
  //             competitionData.push({
  //               heading: `${car.build.year} ${car.build.make} ${car.build.model}`,
  //               price: currency(car.price),
  //               miles: number(car.miles)
  //             })
  //           })
  //           //Calculate average miles and price
  //           averagePrice = averagePrice / cars.length;
  //           averageMiles = averageMiles / cars.length;
  //           this.setState({ 
  //             similarCompetition: competitionData ,
  //             milesAverage: averageMiles.toFixed(0),
  //             priceAverage: averagePrice.toFixed(0)
  //           });
  //         }
  //       }).catch(error => {
  //         console.log('error message: ' + error.message)
  //       })
  // }

  competitionFetch(url) {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json();
      }).then( competition => {
        console.log(competition)
        this.setState({ competition })
      })
  }

  
  componentDidMount() {
    this.competitionFetch(`http://${process.env.API_HOST}/v1/competition?vin=1FA6P8CF2H5279752&api_key=${process.env.API_VAR}`)
  }

  render() {
    if (this.state.competition.length < 1) {
      return <h2>No Similar Cars Found</h2>//<Loading />
    }
    return (
      <Aux>
        <Desktop {...this.state} {...this.props} />
        <Mobile {...this.state} {...this.props} />
      </Aux>
    )
  }
}

export default CompetitionContainer;