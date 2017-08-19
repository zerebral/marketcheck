import CheckWrapper from './CheckWrapper'
import Input from './Input'
import Label from './Label'
import Text from './Text'
import Checked from './checked.svg'
import Unchecked from './unchecked.svg'

import { randomNumber } from '%/format'

const hash = randomNumber()
const Check = ({text}) =>
  <CheckWrapper>
    <Input hash={hash} />
    <Label hash={hash}>
      <Checked />
      <Unchecked />
      <Text>{text}</Text>
    </Label>
  </CheckWrapper>

export default Check
