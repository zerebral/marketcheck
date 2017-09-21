import Section from '~/VDP/Section'
import styled from 'styled-components'
import { rgba } from 'polished'

const Wrapper = styled.div`
  position: relative;
  color: ${rgba('#000', 0.56)};

  strong {
    color: #000;
  }
`

const Intro = styled.h6`
  font-size: 14px;
  line-height: 2;
  margin-bottom: 25px;
  font-weight: 400;
`

const Contents = styled.div`
  columns: 2;

  p {
    margin-bottom: 20px;
  }
`

export default () =>
  <Section title='Vehicle Information'>
    <Wrapper>
      <Intro>Raw performance, agility, unparalleled ride and handling. These are attributes that people have come to expect from Lotus and the Exige Sport 350 is no exception. Now also available as a roadster - the lightest possible incarnation of the current generation Exige.</Intro>

      <Contents>
        <p>Type <strong>New</strong></p>
        <p>Model <strong>Tiguan</strong></p>
        <p>Trim <strong>Wolfsburg</strong></p>
        <p>Body <strong>4D Sport Utility</strong></p>
        <p>Exterior <strong>Pacific Blue Metallic</strong></p>
        <p>Interior <strong>Charcoal Black</strong></p>
        <p>Doors <strong>4</strong></p>
        <p>Stock# <strong>18156</strong></p>
        <p>Model # <strong>5N2WV1</strong></p>
        <p>VIN # <strong>WVGRV7AX9HW500689</strong></p>
        <p>Mileage <strong>6487</strong></p>
        <p>Engine <strong>2.0L TSI DOHC</strong></p>
        <p>Transmission <strong>6-Speed Automatic</strong></p>
        <p>Fuel <strong>Gasoline</strong></p>
        <p>Drive <strong>FWD</strong></p>
        <p>MPG <strong>20 City / 24 Hwy</strong></p>
      </Contents>

    </Wrapper>
  </Section>
