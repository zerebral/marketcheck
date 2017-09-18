import { LayoutSecondary } from '~/layout'
import TrackCar from './TrackCar'
import Mobile from './Mobile'

const VDP = props =>
  <LayoutSecondary>
    <Mobile {...props} />
    <TrackCar {...props} />
  </LayoutSecondary>

export default VDP
