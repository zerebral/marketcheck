import Logo from './Logo'
import { rem } from 'polished'
import fonts from '%/styles/fonts'

const links = [
  { name: 'Home', route: '#' },
  { name: 'Research', route: '#' },
  { name: 'About', route: '#' },
  { name: 'FAQ', route: '#' },
  { name: 'For Dealers', route: '#' }
]

export default () => (
  <ul>
    <li className='logo-li'>
      <a><Logo /></a>
    </li>

    {links.map((link, index) => (
      <li key={link.name + index}><a href={link.route}>{link.name}</a></li>
    ))}

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

      a:hover,
      a:active {
        text-decoration: underline;
        font-weight: 700;
      }
      `}
    </style>
  </ul>
)
