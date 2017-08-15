import { LayoutSecondary } from '~/layout'
import Overview from './Overview'
import Contents from './Contents'

const VDP = props =>
  <LayoutSecondary>
    <Overview {...props} />
    <Contents {...props} />
  </LayoutSecondary>

export default VDP
