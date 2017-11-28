import React from 'react'
import SRP from '~/SRP'
import Spinner from 'react-loading-animation'
import urlEncodeParams from '%/factory/urlEncodeParams'
import Factory from '%/factory/fetchingData'
import srpData from './srpdata'
import defaultSearch from './defaultsearch'

const searchFactory = new Factory()

class SrpContainer extends React.Component {
  constructor (props) {
    super(props)

    this.sessionSearch = {}
    this.savedSearch = {}
    this.window = {}

    this.state = {
      refreshURL: '',
      sessionSearch: srpData(),
      responseFactory: {},
      resetPagination: false,
      readyFirstFetch: false,
      readyRefreshFetch: false,
      readyState: false
    }
  }

  saveSearch () {
    localStorage.setItem("searchSession", JSON.stringify(this.state))
  }

  resetButton () {
    this.sessionSearch = JSON.parse(this.firstSession) ? JSON.parse(this.firstSession) : defaultSearch

    this.setState({
      sessionSearch: srpData(this.sessionSearch),
      resetState: true
    }, () => {
    })

    this.refreshState()
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
    this.sessionSearch.start = value.start
    this.sessionSearch.rows = value.rows

    this.refreshState(true)
  }

  updateTrim (value) {
    this.sessionSearch.trim = value

    this.refreshState()
  }

  updateDrivetrain (value) {
    this.sessionSearch.drivetrain = value

    this.refreshState()
  }

  updateCylinders (value) {
    this.sessionSearch.cylinders = value

    this.refreshState()
  }

  updateFuelType (value) {
    this.sessionSearch.fuelType = value

    this.refreshState()
  }

  updateDayListed (value) {
    let date = new Date()

    this.sessionSearch.dayListed = date.setDate(date.getDate() - value)

    this.refreshState()
  }

  updateSortOrder (value) {
    let order = value.split('|')
    this.sessionSearch.sort_by = order[0]
    this.sessionSearch.sort_order = order[1]

    this.refreshState(false)
  }

  removeMake () {
    this.sessionSearch.selectedMake = []

    this.refreshState()

    window.location.href = '/'
  }

  removeType () {
    this.sessionSearch.carType = 'used'

    this.refreshState()
  }

  removeModel () {
    this.sessionSearch.modelList = []

    this.refreshState()
  }

  removeTransmission () {
    this.sessionSearch.transmission = []

    this.refreshState()
  }

  removeDeal () {
    this.sessionSearch.dealRating = []

    this.refreshState()
  }

  removeSellerType () {
    this.sessionSearch.sellerType = ''

    this.refreshState()
  }

  removeExteriorColor () {
    this.sessionSearch.color = ''

    this.refreshState()
  }

  removeBody () {
    this.sessionSearch.bodyType = ''

    this.refreshState()
  }

  removeTrim () {
    this.sessionSearch.trim = ''

    this.refreshState()
  }

  removeDriveTrain () {
    this.sessionSearch.drivetrain = ''

    this.refreshState()
  }

  removeCylinders () {
    this.sessionSearch.cylinders = ''

    this.refreshState()
  }

  removeFuel () {
    this.sessionSearch.fuelType = ''

    this.refreshState()
  }

  getCarsData () {
    let that = this

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
        this.setState({
          responseFactory: res.data,
          readyFirstFetch: true,
          readyRefreshFetch: true
        },
        () => {
        })
      } else {
        this.setState({
          responseFactory: {},
          readyFirstFetch: true,
          readyRefreshFetch: true,
          resetState: false
        },
        () => {
        })
      }
    })

    return fetchResult
  }

  resetSidebarControl (sidebarControl) {
    sidebarControl()
  }

  refreshState (pagination) {
    this.setState({
      readyRefreshFetch: false,
      resetPagination: false
    })

    this.setState({
      sessionSearch: srpData(this.sessionSearch)
    }, () => {
      this.getCarsData()
      this.refreshURL()
    })

    if (!pagination && pagination !== undefined) {
      this.resetPagination()
    }
  }

  resetPagination () {
    this.setState({
      resetPagination: true
    })

    this.sessionSearch.start = 0
    this.sessionSearch.rows = 11
  }

  refreshURL () {
    let newURL = this.state.refreshURL

    this.setState({
      refreshURL: urlEncodeParams(this.state.sessionSearch.filters)
    }, () => {
      window.history.pushState(this.state.sessionSearch.filters, 'Marketcheck SRP', '/srp?' + this.state.refreshURL)
    })
  }

  componentDidMount () {

    const searchParams = window.sessionStorage.getItem('searchSession')

    this.sessionSearch = JSON.parse(searchParams) ? JSON.parse(searchParams) : defaultSearch

    this.savedSearch = JSON.parse(window.localStorage.getItem('searchSession'))

    this.setState(
      this.savedSearch ?
      this.savedSearch :
      {
        sessionSearch: srpData(this.sessionSearch),
        saveSearch: this.saveSearch.bind(this),
        updateCarType: this.updateCarType.bind(this),
        updateDistance: this.updateDistance.bind(this),
        updatePrice: this.updatePrice.bind(this),
        updateMilesRange: this.updateMilesRange.bind(this),
        updateDealsRating: this.updateDealsRating.bind(this),
        updateModelList: this.updateModelList.bind(this),
        updateYear: this.updateYear.bind(this),
        updateColor: this.updateColor.bind(this),
        updateSellerType: this.updateSellerType.bind(this),
        updateTransmission: this.updateTransmission.bind(this),
        updateBodyType: this.updateBodyType.bind(this),
        updateTrim: this.updateTrim.bind(this),
        updateDrivetrain: this.updateDrivetrain.bind(this),
        updateCylinders: this.updateCylinders.bind(this),
        updateFuelType: this.updateFuelType.bind(this),
        updateDayListed: this.updateDayListed.bind(this),
        updateSortOrder: this.updateSortOrder.bind(this),
        updatePagination: this.updatePagination.bind(this),
        removeMake: this.removeMake.bind(this),
        removeModel: this.removeModel.bind(this),
        removeType: this.removeType.bind(this),
        removeTransmission: this.removeTransmission.bind(this),
        removeDeal: this.removeDeal.bind(this),
        removeSellerType: this.removeSellerType.bind(this),
        removeExteriorColor: this.removeExteriorColor.bind(this),
        removeBody: this.removeBody.bind(this),
        removeTrim: this.removeTrim.bind(this),
        removeDriveTrain: this.removeDriveTrain.bind(this),
        removeCylinders: this.removeCylinders.bind(this),
        removeFuel: this.removeFuel.bind(this),
        resetSidebarControl: this.resetSidebarControl.bind(),
        readyRefreshFetch: this.state.readyRefreshFetch,
        readyState: true,
      },
      () => {
        this.getCarsData()
        this.refreshURL()
      }
    )
  }

  render () {
    const {readyState, readyFirstFetch} = this.state
    return readyState && readyFirstFetch
    ? (<SRP {...this.state} />)
    : (<Spinner style={{marginTop: '35vh'}} />)
  }
}

export default SrpContainer
