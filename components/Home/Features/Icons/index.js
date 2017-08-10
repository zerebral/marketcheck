import { FlexRow, FlexCol } from '~/layout'
import SingleFeature from './SingleFeature'

import Free from './free.svg'
import Flexible from './flexible.svg'
import Volume from './volume.svg'

const colsettings = {
  laptop: {
    cols: 4
  },
  phablet: {
    cols: 6
  }
}

export default () =>
  <FlexRow justify='center' wrap>
    <FlexCol {...colsettings}>
      <SingleFeature
        title='Free'
        text='Make your car shopping experience as enjoyable as possible'
      >
        <Free />
      </SingleFeature>
    </FlexCol>

    <FlexCol {...colsettings}>
      <SingleFeature
        title='Flexible'
        text='We analyses millions of Used and New car inventories'
      >
        <Flexible />
      </SingleFeature>
    </FlexCol>

    <FlexCol {...colsettings}>
      <SingleFeature
        title='Volume'
        text='Listing over 8,500,000 used and new cars fron all across US'
      >
        <Volume />
      </SingleFeature>
    </FlexCol>
  </FlexRow>
