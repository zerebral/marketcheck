import styled from 'styled-components'
import { rem, em } from 'polished'

const SingleFeature = styled.div`
  position: relative;
  & > svg {
    width: ${rem(100)};
    margin-bottom: ${rem(30)};
  }
`

const FeatureTitle = styled.h6`
  font-size: ${rem(16)};
  font-weight: 500;
  line-height: ${19 / 16};
  margin-bottom: ${em(15, 16)};
`

const FeatureText = styled.p`
  font-size: ${rem(14)};
  line-height: ${22 / 14};
`

export default ({
  title,
  text,
  children
}) =>
  <SingleFeature>
    { children }
    <FeatureTitle>{title}</FeatureTitle>
    <FeatureText>{text}</FeatureText>
  </SingleFeature>
