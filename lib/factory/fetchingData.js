import fetch from 'isomorphic-fetch'
import urlEncodeParams from '%/factory/urlEncodeParams'

const apiURL = `https://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}`

class FetchingData {
  constructor () {
    this.apiURL = apiURL
    this.urlEncodedJSON = ''
  }

  async fetching (params) {

    var url = this.apiURL + '&' + urlEncodeParams(params)
    let response = await fetch(url)

    return await response
  }
}

export default FetchingData
