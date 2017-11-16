import { LayoutSecondary } from '~/layout'
import TrackCar from './TrackCar'
import Desktop from './Desktop'
import Mobile from './Mobile'
import FontsHOC from '@/HOC/Fonts'

const VDP = (props) => {
	return (
		  <LayoutSecondary>
		    <Mobile {...props} />
		    <Desktop {...props} />
		    <TrackCar {...props} />
		  </LayoutSecondary>)
}

export default FontsHOC(VDP)
