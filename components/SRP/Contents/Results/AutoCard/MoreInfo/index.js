import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'
import PhotoIcon from './photos.svg'
import VideosIcon from './video.svg'
import View360Icon from './view360.svg'

const Container = styled.div`
  padding: 1em;
`

const LeftFlexCol = styled(FlexCol)`
  max-width: 30%;
`

const DetFlexCol = styled(FlexCol)`
  flex-basis: auto;
  margin: 0 1em;
`

const DetFlexRow = styled(FlexRow)`
  padding: 1em 0;
`

const OtherName = styled.p`
  color: ${colors.black};
  font-size: 1.1em;
  margin-bottom: 0.5em;
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

  svg {
    height: 20px;
    margin-bottom: 0.5em;
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
`

const Label = styled.span`
  color: ${colors.lightergray};
  font-size: 0.8em;
  font-weight: 300;
  margin-right: 0.5em;
`

const Value = styled.span`
  color: ${colors.black};
  font-size: 0.8em;
  font-weight: 300;
`

export default ({data}) =>
  <Container>
    <FlexRow>
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
    </FlexRow>
  </Container>
