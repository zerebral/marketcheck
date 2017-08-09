import { FlexRow } from '~/layout'
import SingleFeature from './SingleFeature'

import styled from 'styled-components'

import Free from './free.svg'
import Flexible from './flexible.svg'
import Volume from './volume.svg'

const Icons = styled(FlexRow)`
  text-align: center;
  justify-content: space-around;
`

export default () =>
  <Icons>
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
