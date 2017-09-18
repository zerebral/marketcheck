import { LayoutSecondary } from '~/layout'
import TrackCar from './TrackCar'
import Desktop from './Desktop'
import Mobile from './Mobile'

const VDP = props =>
  <LayoutSecondary>
    <Mobile {...props} />
    <Desktop {...props} />
    <TrackCar {...props} />
  </LayoutSecondary>

export default VDP
