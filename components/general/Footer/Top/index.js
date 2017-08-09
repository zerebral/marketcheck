import { Row } from '~/layout'

import Column from './Column'
import Social from './Social'

import topData from './topData'

export default () =>
  <Row>
    {topData.map((d, i) =>
      <Column
        key={i + d.name}
        section={d.name}
        links={d.links}
      />
    )}
    <Social />
  </Row>
