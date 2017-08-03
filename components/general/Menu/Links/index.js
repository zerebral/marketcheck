import Logo from './Logo'
import { rem } from 'polished'
import fonts from '%/styles/fonts'

export default () => (
  <ul>
    <li className='logo-li'>
      <a><Logo /></a>
    </li>

    <li><a>Home</a></li>
    <li><a>Research</a></li>
    <li><a>About</a></li>
    <li><a>FAQ</a></li>
    <li><a>For Dealers</a></li>

    <style jsx>{`
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        margin-right: auto;
      }

      li {
        margin-right: 40px;
      }

      .logo-li {
        margin-right: 65px;
      }

      a {
        display: block;
        color: #ffffff;
        font-size: ${rem(14)};
        font-family: ${fonts.fontFamily};
        font-weight: 400;
      }
      `}
    </style>
  </ul>
)
