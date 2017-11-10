import React from 'react'
import SRP from '~/SRP'
import Spinner from 'react-loading-animation'
import Factory from '%/factory/fetchingData'
import srpData from './srpdata'
import defaultSearch from './defaultsearch'

const searchFactory = new Factory()

class SrpContainer extends React.Component {
  constructor (props) {
    super(props)

    this.sessionSearch = {}
    this.savedSearch = {}

    this.state = {
      sessionSearch: srpData(),
      responseFactory: {},
      readyFirstFetch: false,
      readyRefreshFetch: false,
      readyState: false
    }
  }

  saveSearch () {
    window.localStorage.setItem('searchSession', JSON.stringify(this.state))
  }

  updateCarType (value) {
    this.sessionSearch.carType = value

    this.refreshState()
  }

  updateDistance (value) {
    this.sessionSearch.distance = value[0]

    this.refreshState()
  }

  updatePrice (value) {
    this.sessionSearch.price = {
      min: value[0],
      max: value[1]
    }

    this.refreshState()
  }

  updateMilesRange (value) {
    this.sessionSearch.milesRange = {
      min: value[0],
      max: value[1]
    }

    this.refreshState()
  }

  updateDealsRating (value) {
    this.sessionSearch.dealRating = value

    this.refreshState()
  }

  updateModelList (value) {
    this.sessionSearch.modelList = value

    this.refreshState()
  }

  updateYear (value) {
    this.sessionSearch.year = value

    this.refreshState()
  }

  updateSellerType (value) {
    this.sessionSearch.sellerType = value

    this.refreshState()
  }

  updateColor (value) {
    this.sessionSearch.color = value

    this.refreshState()
  }

  updateTransmission (value) {
    this.sessionSearch.transmission = value

    this.refreshState()
  }

  updateBodyType (value) {
    this.sessionSearch.bodyType = value

    this.refreshState()
  }

  updatePagination (value) {
    this.setState({
      readyRefreshFetch: false
    })

    this.sessionSearch.start = value.start
    this.sessionSearch.rows = value.rows

    this.refreshState()
  }

  getAPIData () {
    let fetchResult = searchFactory.fetching(this.state.sessionSearch.filters)

    fetchResult = fetchResult.then(response =>
      response.json().then(data =>
        ({
          data: data,
          status: response.status
        })
      )
    )
    .then(res => {
      if (res.status === 200 && res.data !== undefined) {
        // console.log(res.status, res.data)
        this.setState({
          responseFactory: res.data,
          readyFirstFetch: true,
          readyRefreshFetch: true
        },
        () => {
          // console.log(this.state)
        })
      }
    })

    return fetchResult
  }

  refreshState () {
    this.setState({
      sessionSearch: srpData(this.sessionSearch)
    }, () => {
       // console.log("Refresh State: ", this.state)
    })

    this.getAPIData()
  }

  componentDidMount () {
    const searchParams = window.sessionStorage.getItem('searchSession')

    this.sessionSearch = JSON.parse(searchParams) ? JSON.parse(searchParams) : defaultSearch

    this.savedSearch = JSON.parse(window.localStorage.getItem('searchSession'))

    this.setState(
      this.savedSearch
      ? this.savedSearch
      : {
        sessionSearch: srpData(this.sessionSearch),
        saveSearch: this.saveSearch.bind(this),
        updateCarType: this.updateCarType.bind(this),
        updateDistance: this.updateDistance.bind(this),
        updatePrice: this.updatePrice.bind(this),
        updateMilesRange: this.updateMilesRange.bind(this),
        updateDealsRating: this.updateDealsRating.bind(this),
        updateModelList: this.updateModelList.bind(this),
        updateYear: this.updateYear.bind(this),
        updateSellerType: this.updateSellerType.bind(this),
        updateTransmission: this.updateTransmission.bind(this),
        updateBodyType: this.updateBodyType.bind(this),
        updatePagination: this.updatePagination.bind(this),
        readyRefreshFetch: this.state.readyRefreshFetch,
        readyState: true
      },
      () => {
        // console.log(this.state)
      }
    )

    this.getAPIData()
  }

  render () {
    const {readyState, readyFirstFetch} = this.state
    return readyState && readyFirstFetch
    ? (<SRP {...this.state} />)
    : (<Spinner style={{marginTop: '35vh'}} />)
  }
}

export default SrpContainer
