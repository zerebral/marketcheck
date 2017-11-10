import React from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import { rem } from 'polished'
import Loading from 'react-simple-loading';

import FancySelect from './FancySelect'
import GoogleAutoComplete from './FancySearch'
//import GoogleAutoComplete from '@/Home/form/fancySearch/input/GoogleAutoComplete'
import Submit from './Submit'

const Form = styled.form`
  position: relative;
  background: ${colors.white};
  border-radius: ${rem(4)};
  margin-bottom: ${rem(30)};
  display: flex;
  /*overflow: hidden;*/
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  ${mediaMax.tablet`
    max-width: 100%;
  `}
`

export default ({ getState, onSubmit, models, makes, carTypeSelect, makeSelect, modelSelect, loadingModels, handleChange, handleSelect, address, findLatLng}) =>
  <Form onSubmit={onSubmit}>
    <FancySelect blue onChange={carTypeSelect} showForMobile={true}>
      <option value="used" selected>Used</option>
      <option value="new">New</option>
      <option value="newer">Newer</option>
      <option value="newest">Newest</option>
    </FancySelect>
    <GoogleAutoComplete findLatLng={findLatLng}/>
    <FancySelect onChange={makeSelect} showForMobile={false}>
      <option>All Makes</option>
      {makes.length > 1 && makes.map((make, key) => <option key={key} value={make.item}>{make.item}</option>)}
    </FancySelect>
 
    <FancySelect onChange={modelSelect} showForMobile={false}>
      {!loadingModels && <option selected="selected">All Models</option>}
      {loadingModels && <option>Loading Models</option>}
      {models.length > 1 &&  models.map( (model, key) => <option key={key}>{model.item}</option> )}
    </FancySelect>
    <Submit onClick={onSubmit} />
  </Form>
