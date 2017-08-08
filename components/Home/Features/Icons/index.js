import { FlexRow } from '~/layout'
import SingleFeature from './SingleFeature'

import Free from './free.svg'
import Flexible from './flexible.svg'
import Volume from './volume.svg'

const Icons = FlexRow.extend`
  text-align: center;
  justify-content: center;
`

export default () =>
  <Icons justify='space-around'>
    <SingleFeature
      title='Free'
      text='Make your car shopping experience as enjoyable as possible'
    >
      <Free />
    </SingleFeature>

    <SingleFeature
      title='Flexible'
      text='We analyses millions of Used and New car inventories'
    >
      <Flexible />
    </SingleFeature>
    <SingleFeature
      title='Volume'
      text='Listing over 8,500,000 used and new cars fron all across US'
    >
      <Volume />
    </SingleFeature>
  </Icons>
