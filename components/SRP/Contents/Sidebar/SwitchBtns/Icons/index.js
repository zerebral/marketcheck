import styled from 'styled-components'

import AirConditionerIcon from './air-conditioner.svg'
import BluetoothIcon from './bluetooth.svg'
import NavigationIcon from './navigation.svg'
import RearCamIcon from './rear-cam.svg'
import WheelsIcon from './wheels.svg'

const Bluetooth = styled(BluetoothIcon)`
  display: inline-block;
  height: 20px;
  margin-right: 0.5em;
  width: 20px;
  vertical-align: middle;
`

const AirConditioner = styled(AirConditionerIcon)`
  display: inline-block;
  height: 20px;
  margin-right: 0.5em;
  width: 20px;
  vertical-align: middle;
`

const Navigation = styled(NavigationIcon)`
  display: inline-block;
  height: 20px;
  margin-right: 0.5em;
  width: 20px;
  vertical-align: middle;
`

const RearCam = styled(RearCamIcon)`
  display: inline-block;
  height: 20px;
  margin-right: 0.5em;
  width: 20px;
  vertical-align: middle;
`

const Wheels = styled(WheelsIcon)`
  display: inline-block;
  height: 20px;
  margin-right: 0.5em;
  width: 20px;
  vertical-align: middle;
`

export {
  AirConditioner,
  Bluetooth,
  Navigation,
  RearCam,
  Wheels
}
