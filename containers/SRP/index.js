import SRP from '~/SRP'
import Spinner from 'react-loading-animation'
import Factory from '%/factory/fetchingData'
import srpData from './srpdata'
import defaultSearch from './defaultsearch'

const searchFactory = new Factory()

class SrpContainer extends React.Component {

  constructor (props) {
    super(props)

    this.sessionSearch = {} 
    this.savedSearch = {}

    this.state = {
      sessionSearch: srpData(),
      responseFactory: {},
      ready: false
    }
  }

  saveSearch () {
    localStorage.setItem("searchSession", JSON.stringify(this.state))
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

  refreshState() {
    this.setState({
      sessionSearch: srpData(this.sessionSearch)
    }, () => {
       console.log("Refresh State: ", this.state)
    })
  }

  componentDidMount () {
    const searchParams = sessionStorage.getItem("searchSession")

    this.sessionSearch = JSON.parse(searchParams) ? JSON.parse(searchParams) : defaultSearch

    this.savedSearch = JSON.parse(localStorage.getItem("searchSession"))

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
        updateSellerType: this.updateSellerType.bind(this),
        ready: true
      },
      () => {
        this.getAPIData()
      }
    )
  }

  getAPIData () {
    this.setState({
      responseFactory: searchFactory.fetching(this.state.sessionSearch.filters)
    })

    //console.log(this.responseFactory)
  }

  render () {
    const {ready} = this.state
    return  ready ?
    (<SRP {...this.state} />) : 
    (<Spinner style={{marginTop: '35vh'}} />)
  }

}

export default SrpContainer