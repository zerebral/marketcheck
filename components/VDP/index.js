import Head from 'next/head'
import { LayoutSecondary } from '~/layout'
import TrackCar from './TrackCar'
import Desktop from './Desktop'
import Mobile from './Mobile'
import FontsHOC from '@/HOC/Fonts'

const VDP = (props) => {
	const pageTitle = () => {
		let title = ''

		if (props.heading) {
			title = props.heading
		} else {
			title = title + (props.year ? props.year + ' ' : '')
			title = title + (props.year ? props.make + ' ' : '')
			title = title + (props.year ? props.model + ' ' : '')
			title = title + (props.year ? props.exterior_color + ' ' : '')
		}

		return title
	}

	return (
		  <LayoutSecondary>
			<Head>
				<title>{pageTitle()}</title>
		    </Head>
		    <Mobile {...props} />
		    <Desktop {...props} />
		    <TrackCar {...props} />
		  </LayoutSecondary>)
}

export default FontsHOC(VDP)
