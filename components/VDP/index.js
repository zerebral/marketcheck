import { LayoutSecondary } from '~/layout'
import Overview from './Overview'
import Contents from './Contents'
import TrackCar from './TrackCar'

const VDP = props =>
  <LayoutSecondary>
    <Overview {...props} />
    <Contents {...props} />
    <TrackCar {...props} />
  </LayoutSecondary>

export default VDP
