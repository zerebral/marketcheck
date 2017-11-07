import SRP from '~/SRP'
import Spinner from 'react-loading-animation'
import srpData from './srpdata'
import defaultSearch from './defaultsearch'

class SrpContainer extends React.Component {

  constructor (props) {
    super(props)

    this.sessionSearch = {} 
    this.savedSearch = {}

    this.state = {
      sessionSearch: srpData(),
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
          ready: true
        }
    )

  }

  render () {
    const {ready} = this.state
    return  ready ?
    (<SRP {...this.state} />) : 
    (<Spinner style={{marginTop: '35vh'}} />)
  }

}

export default SrpContainer