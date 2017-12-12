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
  findLatLng
}) =>
  <Form onSubmit={onSubmit}>
    <FancySelect blue handleSelect={carTypeSelect} showForMobile={true} defaultLabel='Used' defaultValue='used' loading={false} list={[{item: 'used'}, {item: 'new'}, {item: 'newer'}, {item: 'newest'}]} />
    <GoogleAutoComplete findLatLng={findLatLng}/>
    <FancySelect handleSelect={makeSelect} showForMobile={false} defaultLabel='All Makes' defaultValue='' loading={loadingMakers} list={makes} />
    <FancySelect handleSelect={modelSelect} showForMobile={false} defaultLabel='All Models' defaultValue='' loading={loadingModels} list={models} />
    <Submit onClick={onSubmit} />
  </Form>
