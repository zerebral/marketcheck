import Logo from './logo.svg'
import A from '../A'

const LogoA = A.extend`
  margin-right: auto;
  max-width: 145px;
`

export default () => (
  <LogoA>
    <Logo />
  </LogoA>
)
