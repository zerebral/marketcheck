import SRP from '~/SRP'
import srpData from './srpdata'

class SrpContainer extends React.Component {

  constructor (props) {
    super(props)



    this.sessionSearch = {}

    this.state = srpData
  }

  componentDidMount () {
    this.sessionSearch = JSON.parse(sessionStorage.getItem("searchSession"))

    this.state.location.address = this.sessionSearch.address
    this.state.location.latitude = this.sessionSearch.latitude
    this.state.location.longitude = this.sessionSearch.longitude
    this.state.filters.type = this.sessionSearch.carType
    this.state.filters.maker = this.sessionSearch.selectedMake
    this.state.filters.model = this.sessionSearch.selectedModel

    //console.log(this.state)
  }

  setSearchSession (searchSession) {
    this.setState({
      searchSession: searchSession
    })

    console.log(this.state)
  }

  render () {
    return  <SRP {...this.state} searchSession={this.sessionSearch} setSearchSession={this.setSearchSession} />
  }

}

export default SrpContainer