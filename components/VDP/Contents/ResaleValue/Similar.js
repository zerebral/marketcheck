import {
  H6,
  SimilarWrapper,
  Flex,
  Column
} from './SimilarComponents.js'

import SimilarLabel from './SimilarLabel.js'

export default ({
  leftText,
  rightText,
  dotColor,
  modelName,
  value,
  data
}) =>
  <SimilarWrapper>
    <Flex>
      {leftText &&
      <Column>
        <H6>{leftText}</H6>
      </Column>
      }
      <Column right >
        <H6>{rightText}</H6>
      </Column>
    </Flex>
    {data.map((value, i) =>
      <SimilarLabel
        key={i}
        dotColor={dotColor}
        modelName={modelName}
        value={value}
      />
    )}
  </SimilarWrapper>
