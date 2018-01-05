import styled from 'styled-components'
import { rem } from 'polished'
import { mediaMax } from '%/styles/mixins'
import React from 'react'
import { colors } from '%/styles'
import CarLinkAnchor from '@/Home/categories/CarLinkAnchor'
//
const CarLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  list-style: none;
  ${mediaMax.laptop`
    flex-wrap: wrap;
  `}
`

const CarLink = styled.li`
  font-size: ${rem(14)};

  & + & {
    margin-left: ${rem(20)};
    ${mediaMax.tablet`
      margin-left: 0;
    `}
  }

  ${mediaMax.tablet`
    margin-bottom: ${rem(10)};
    padding: 0 ${rem(5)};
  `}
`


export default ({   props,
                    bodytypes
                }) =>
    <CarLinks>
        {console.log(props)}
            {bodytypes.map((link, index) => (
              <CarLink key={link + index}>
                <CarLinkAnchor props={props} link={link}/>
              </CarLink>
            ))}
  </CarLinks>

