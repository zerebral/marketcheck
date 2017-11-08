import fetch from 'isomorphic-fetch'

const apiURL = `https://${process.env.API_HOST}/v1/depreciation?api_key=${process.env.API_VAR}`

class FetchingData {
    constructor() {
        this.apiURL = apiURL
    }

    encodeDataURL (data) {
        return Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&')
    }

    fetching (params) {
        console.log(this.encodeDataURL(params))
        var url = this.apiURL + "&" + this.encodeDataURL(params) + "&nodedup=true"

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