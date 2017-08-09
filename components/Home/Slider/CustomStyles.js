import { injectGlobal } from 'styled-components'
import { colors } from '%/styles'

const CustomSlickStyles = () =>
  injectGlobal`
    .slick-dots {
      text-align: center;
      font-size: 0;
      line-height: 0;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -30px;
    }

    .slick-dots li {
      display: inline-block;
      margin: 0 4px;
      position: relative;
      line-height: 0;
      font-size: 0;
    }

    .slick-dots li button {
      background: none;
      padding: 5px;
      line-height: 0;
      font-size: 0;
      width: 10px;
      height: 10px;
    }

    .slick-dots li button::before {
      width: 10px;
      height: 10px;
      content: '';
      background: ${colors.white};
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      border: none;
    }

    .slick-dots.slick-active {
      button::before {
        background: ${colors.white};
      }
    }
  `
export default CustomSlickStyles
