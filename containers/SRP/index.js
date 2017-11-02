import SRP from '~/SRP'
import srpData from './srpdata'

class SrpContainer extends React.Component {

  constructor() {
    super()

    this.state = srpData
  }

  render () {
  	return  <SRP {...this.state} />
  }

}

export default SrpContainer