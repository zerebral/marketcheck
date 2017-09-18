import styled from 'styled-components'
import { colors } from '%/styles'

export const Wrapper = styled.div`
  position: relative;
`

export const TopRow = styled.div`
  padding: 30px 0;
`

export const CarName = styled.h1`
  font-size: 24px;
  line-height: 2;
  color: #2f3947;
`
export const Brief = styled.p`
  font-size: 14px;
  line-height: 28px;
  color: #515760;
`

export const Icon = styled.a`
  display: block;
  width: 20px;
  height: 20px;
  margin-left: 20px;
  position: relative;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const Price = styled.h1`
  font-size: 36px;
  line-height: 43.2px;
  color: ${colors.mobileBlack};
  margin-right: auto;
`

export const Text = styled.p`
  font-size: 14px;
  line-height: ${16.8 / 14};
  color: ${colors.green};
  margin-bottom: 8px;
`

export const Like = () =>
  <svg xmlns='http://www.w3.org/2000/svg' width='19.15' height='17.13' viewBox='0 0 19.15 17.13'>
    <path d='M13.92.5a4.82,4.82,0,0,1,3.41,1.26,4.53,4.53,0,0,1,1.32,3.36,4.87,4.87,0,0,1-.41,2A5.29,5.29,0,0,1,17.1,8.76L9.57,16.42,2.05,8.76A5.18,5.18,0,0,1,.92,7.13a5.12,5.12,0,0,1-.42-2A4.39,4.39,0,0,1,2,1.76,5.36,5.36,0,0,1,5.54.5a4,4,0,0,1,2.29.83A7.91,7.91,0,0,1,9.57,3.09a7.43,7.43,0,0,1,1.9-1.76A4.68,4.68,0,0,1,13.92.5Z' fill='none' stroke='#8b9ca5' strokeMiterlimit='10' />
  </svg>

export const Share = () =>
  <svg xmlns='http://www.w3.org/2000/svg' width='17.08' height='18.32' viewBox='0 0 17.08 18.32'>
    <path d='M5.45,3A2.47,2.47,0,1,1,3,.5,2.47,2.47,0,0,1,5.45,3Zm8.66,3.71a2.47,2.47,0,1,0,2.47,2.47A2.47,2.47,0,0,0,14.11,6.69ZM3,12.87a2.47,2.47,0,1,0,2.47,2.47A2.47,2.47,0,0,0,3,12.87Zm2.47,1.24,6.47-3.53m-.28-2.65L5.45,4.21' fill='none' stroke='#8b9ca5' strokeMiterlimit='10' />
  </svg>
