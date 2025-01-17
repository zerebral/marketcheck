import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import scriptLoader from 'react-async-script-loader'

class AutoComplete extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      address: '',
      loading: false
      // latitude: null,
      // longitude: null,
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSelect (address) {
    this.setState({
      address,
      loading: true
    })

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        this.props.findLatLng({lat, lng, address})
        this.props.hideLocation()

        this.setState({
          loading: false
          // latitude: lat,
          // longitude: lng
        })
      })
      .catch((error) => {
        console.log('Oh no!', error)
        this.setState({
          loading: false
        })
      })
  }

  handleChange (address) {
    this.setState({
      address
      // latitude: '',
      // longitude: ''
     // geocodeResults: null
    })
  }

  render () {
    const customStyles = {
      autocompleteContainer: {
        backgroundColor: '#e0e9f1',
        boxShadow: '0px 0px 5px rgba(0,0,0,0.5)',
        border: 'none',
        left: '-47px',
        top: '125%',
        minWidth: '256px',
        textAlign: 'left',
        lineHeight: '1.5'
      },
      autocompleteItemActive: { backgroundColor: '#efefef' },
      autocompleteItem: {color: '#666'},
      input: {padding: '0'}
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
      name: 'autocomplete-input'
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
)(AutoComplete)
