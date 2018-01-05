import React from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import { rem } from 'polished'

import FancySelect from './FancySelect'
import GoogleAutoComplete from './FancySearch'
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

export default ({
  getState,
  onSubmit,
  models,
  makes,
  carTypeSelect,
  makeSelect,
  modelSelect,
  loadingModels,
  loadingMakers,
  handleChange,
  handleSelect,
  address,
  findLatLng,
    latitude, longitude
}) =>
  <Form onSubmit={onSubmit}>
      {console.log(address)}
    <FancySelect blue handleSelect={carTypeSelect} showForMobile={true} defaultLabel='Used' defaultValue='used' loading={false} list={[{item: 'new'}, {item: 'used'}, {item: 'certified'}]} />
    <GoogleAutoComplete findLatLng={findLatLng} address={address}/>
    <FancySelect handleSelect={makeSelect} showForMobile={false} defaultLabel='All Makes' defaultValue='' loading={loadingMakers} list={makes} />
    <FancySelect handleSelect={modelSelect} showForMobile={false} defaultLabel='All Models' defaultValue='' loading={loadingModels} list={models} />
    <Submit onClick={onSubmit} />
  </Form>
