import React from 'react'
import urlEncodeParams from '%/factory/urlEncodeParams'

class CarLinkAnchor extends React.Component {
    constructor (props) {
        super(props)
        this.urlParams = {
            car_type: '',
            latitude: '',
            longitude: '',
            address: '',
            make: '',
            model: '',
            body_type: ''
        }

        this.state = {
            refreshURL: '',
            body_type: [],
            latitude: '',
            longitude: '',
            address: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        // this.urlParams.latitude = lat,
        // this.urlParams.longitude = lng
        // this.setState({
        //     address
        //     // latitude: '',
        //     // longitude: ''
        //     // geocodeResults: null
        // })
    }

    refreshURL () {
        let newURL = this.state.refreshURL

        this.setState({
            refreshURL: urlEncodeParams(this.urlParams)
        }, () => {
            window.history.pushState(this.state, 'Marketcheck', '/?' + this.state.refreshURL)
        })
    }


    render () {
        return (
            <div>
                {console.log()}
                <a href="javascript:;" onClick={this.handleClick(this.props.link.name)}>{this.props.link.name}</a>
            </div>
        )
    }
}

export default CarLinkAnchor
