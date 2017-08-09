import { Row } from '~/layout'

import Column from './Column'
import Links from './Links'
import Social from './Social'

import topData from './topData'

export default () =>
  <Row>
    {topData.map((d, i) =>
      <Column key={i + d.name}>
        <Links
          section={d.name}
          links={d.links}
        />
      </Column>
    )}
    <Column>
      <Social />
    </Column>
  </Row>
