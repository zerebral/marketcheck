import Links from './Links'
import Icons from './Icons'
import Container from '~/general/Container'
import colors from '%/styles/colors'
import PropTypes from 'prop-types'

const Menu = ({active, custoRef}) => (
  <nav ref={custoRef} className={active ? 'menu active' : 'menu'}>
    <Container>
      <div className='innerMenu'>
        <Links />
        <Icons />
      </div>
    </Container>

    <style jsx>{`
      .menu {
        background-color: transparent;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        transition: 0.2s;
      }

      .active {
        background-color: ${colors.blue};
      }

      .innerMenu {
        display: flex;
        padding: 20px 30px;
      }
      `}
    </style>
  </nav>
)

Menu.propTypes = {
  active: PropTypes.bool,
  custoRef: PropTypes.func
}

export default Menu
