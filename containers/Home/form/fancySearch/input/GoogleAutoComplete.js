import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import scriptLoader from 'react-async-script-loader'
import styled from 'styled-components'


class GoogleAutoComplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      //geocodeResults: null,
      loading: false,
      latitude: null,
      longitude: null,
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    //this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this)
    //this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this)
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true
    })

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Success Yay', { lat, lng })
        this.setState({
          //geocodeResults: this.renderGeocodeSuccess(lat, lng),
          loading: false,
          latitude: lat,
          longitude: lng
        })
      })
      .catch((error) => {
        console.log('Oh no!', error)
        this.setState({
          //geocodeResults: this.renderGeocodeFailure(error),
          loading: false
        })
      })
  }

  handleChange(address) {
    this.setState({
      address,
      latitude: '',
      longitude: ''
     //geocodeResults: null
    })
  }

  render() {
    const customStyles = {
      autocompleteContainer: { 
        backgroundColor: '#e0e9f1' ,
        border: 'none',
        left: '-47px',
        top: '122%',
        minWidth: '256px',
        textAlign: 'left',
        lineHeight: '1.5',
      },
      autocompleteItemActive: { backgroundColor: '#efefef' },
      autocompleteItem: {color: '#666'},
      input: { padding: '0'},
    }

    const options = {
      componentRestrictions: {country: 'us'}
    }

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div>
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small>{formattedSuggestion.secondaryText}</small>
      </div>)

    const inputProps = {
      type: 'search',
      value: this.state.address,
      onChange: this.handleChange,
      placeholder: 'Enter Location',
      name: 'autocomplete-input',
    }
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    return (    
      <div>
        {isScriptLoaded && isScriptLoadSucceed && 
          <PlacesAutocomplete
            onSelect={this.handleSelect}
            autocompleteItem={AutocompleteItem}
            onEnterKeyDown={this.handleSelect}
            styles={customStyles}
            inputProps={inputProps}
            googleLogo={false}
            options={options}
          />
        }
      </div>
    )
  }
}

export default scriptLoader(
  [
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyCE-lumNdh7pMmlmz-wQlyyGMlzeWg2b-Y&libraries=places'
  ]
)(GoogleAutoComplete)