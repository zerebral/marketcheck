import React from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import { rem } from 'polished'
import Loading from 'react-simple-loading';

import FancySelect from './FancySelect'
import FancySearch from './FancySearch'
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
export default ({onSubmit, models}) =>
  <Form onSubmit={onSubmit}>
    <FancySelect blue>
      <option>Used</option>
      <option>New</option>
      <option>Newer</option>
      <option>Newest</option>
    </FancySelect>
    <FancySearch />
    <FancySelect>
      <option>All Makes</option>
      <option>Ford</option>
      <option>Jeep</option>
    </FancySelect>
 
    <FancySelect>
      {console.log(models)}
      <option>All Models</option>
      {models.length > 1 &&  models.map( (model, key) =>  <option key={key}>{model.item}</option> )}
    </FancySelect>
    <Submit />
  </Form>
