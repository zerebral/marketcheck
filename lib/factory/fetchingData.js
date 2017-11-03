import fetch from 'isomorphic-fetch'

const apiURL = `https://${process.env.API_HOST}/v1/depreciation?api_key=${process.env.API_VAR}`

class FetchingData {
    constructor() {
        this.apiURL = apiURL
    }

    encodeDataURL (data) {
        return Object
              .keys(data)
              .map(value => `${value}=${this.encodeURIComponent(data[value])}`)
              .join('&')
    }

    fetching (params) {
        var url = this.apiURL + "&" + this.encodeURIComponent(params) + "&nodedup=true"

        return fetch(url)
            .then( response => {
                if (response.status !== 200) {
                    console.log("Error when fetching API: " + response.status)
                }

                return response.json()
            })
    }
}

export default FetchingData