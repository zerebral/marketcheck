import fetch from 'isomorphic-fetch'

const apiURL = `https://${process.env.API_HOST}/v1/search?api_key=${process.env.API_VAR}`

class FetchingData {
    constructor() {
        this.apiURL = apiURL
        this.urlEncodedJSON = ''
    }

    encodeDataURL (data) {
        return Object.keys(data).map(function(k) {
            let values = ''

            if (typeof data[k] === 'object'){
               values = Object.keys(data[k]).map(function(key) {
                    return data[k][key]
                }).join(',')
            } else {
                values = encodeURIComponent(data[k])
            }

             return encodeURIComponent(k) + '=' + values
        }).join('&')
    }

    async fetching (params) {
        var url = this.apiURL + "&" + this.encodeDataURL(params) + "&nodedup=true"
        let response = await fetch(url)

        return await response
    }
}

export default FetchingData