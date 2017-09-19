import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'
import PhotoIcon from './photos.svg'
import VideosIcon from './video.svg'
import View360Icon from './view360.svg'

const Container = styled.div`
  padding: 1em;
  ${mediaMax.phone`
    padding: 1em 1.5em;
  `}
`

const StyledFlexRow = styled(FlexRow)`
  ${mediaMax.largeTablet`
    display: block;
  `}
`

const LeftFlexCol = styled(FlexCol)`
  max-width: 30%;
  ${mediaMax.largeTablet`
    max-width: 100%;
  `}
`

const DetFlexCol = styled(FlexCol)`
  flex-basis: auto;
  margin: 0 1em;
`

const DetFlexRow = styled(FlexRow)`
  padding: 1em 0;
  ${mediaMax.largeTablet`
    display: block;
  `}
`

const OtherName = styled.p`
  color: ${colors.black};
  font-size: 1.1em;
  margin-bottom: 0.5em;
  ${mediaMax.srpDesktop`
    font-size: 0.9em;
  `}
  ${mediaMax.largeTablet`
    font-size: 1.2em;
  `}
`

const Type = styled.p`
  color: ${colors.lightergray};
  font-size: 0.8em;
  font-weight: 300;
`

const Multimedia = styled.div`
  padding: 1em 0;
  text-align: center;
`

const MultiInfo = styled.div`
  display: inline-block;
  margin: 0 1.5em;
  ${mediaMax.srpDesktop`
    font-size: 0.8em;
    margin: 0 0.8em;
  `}
  ${mediaMax.largeTablet`
    font-size: 1em;
    margin: 0 1.5em;

    &:first-child {
      display: none;
    }
  `}

  svg {
    height: 20px;
    margin-bottom: 0.5em;
    ${mediaMax.srpDesktop`
      height: 15px;
    `}
    ${mediaMax.largeTablet`
      height: 20px;
    `}
  }

  span {
    color: ${colors.softblue};
    display: block;
    font-size: 0.9em;
  }
`

const DetailItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 1em;
  }

  ${mediaMax.largeTablet`
    &:last-child {
      margin-bottom: 1em;
    }
  `}
`

const Label = styled.span`
  color: ${colors.lightergray};
  font-size: 0.8em;
  font-weight: 300;
  margin-right: 0.5em;
  ${mediaMax.srpDesktop`
    font-size: 0.7em;
  `}
  ${mediaMax.largeTablet`
    font-size: 0.8em;
  `}
`

const Value = styled.span`
  color: ${colors.black};
  font-size: 0.8em;
  font-weight: 300;
  ${mediaMax.srpDesktop`
    font-size: 0.7em;
  `}
  ${mediaMax.largeTablet`
    font-size: 0.8em;
  `}
`

export default ({data}) =>
  <Container>
    <StyledFlexRow>
      <LeftFlexCol>
        <OtherName>{data.otherName}</OtherName>
        <Type>{data.type}</Type>
        <Multimedia>
          <MultiInfo>
            <PhotoIcon />
            <span>16 photos</span>
          </MultiInfo>
          <MultiInfo>
            <VideosIcon />
            <span>2 videos</span>
          </MultiInfo>
          <MultiInfo>
            <View360Icon />
            <span>360º view</span>
          </MultiInfo>
        </Multimedia>
      </LeftFlexCol>
      <FlexCol>
        <DetFlexRow>
          <DetFlexCol>
            <DetailItem>
              <Label>Model:</Label>
              <Value>{data.model}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Year:</Label>
              <Value>{data.year}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Door:</Label>
              <Value>{data.doors}</Value>
            </DetailItem>
          </DetFlexCol>
          <DetFlexCol>
            <DetailItem>
              <Label>MPG:</Label>
              <Value>{data.mpg}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Transmission:</Label>
              <Value>{data.transmission}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Drivetrain:</Label>
              <Value>{data.drivetrain}</Value>
            </DetailItem>
          </DetFlexCol>
          <DetFlexCol>
            <DetailItem>
              <Label>Cylinders:</Label>
              <Value>{data.cylinders}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Body:</Label>
              <Value>{data.body}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Trim:</Label>
              <Value>{data.trim}</Value>
            </DetailItem>
          </DetFlexCol>
          <DetFlexCol>
            <DetailItem>
              <Label>VIN:</Label>
              <Value>{data.vin}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Engine:</Label>
              <Value>{data.engine}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Fuel:</Label>
              <Value>{data.fuel}</Value>
            </DetailItem>
          </DetFlexCol>
        </DetFlexRow>
      </FlexCol>
    </StyledFlexRow>
  </Container>
