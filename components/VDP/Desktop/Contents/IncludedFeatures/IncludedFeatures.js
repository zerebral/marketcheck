import Section from '~/VDP/Section'
import Feature from './Feature.js'
import { FlexRow } from '~/layout'

import {
  Air,
  Bluetooth,
  Brake,
  Cam,
  Geo,
  Keyless,
  Wheels
} from './Icons'

export default ({ features, scatterSimilar}) =>
  <Section title='Included Features' summary={`${scatterSimilar.length} Similarly Equiped Carts Curently Available`}>
    <FlexRow noMargin justify='space-around'>
      {features && features.slice(0, 5).map((feature) => {
        return <Feature /* icon={} */ name={feature} />
      })}
      {/* <Feature icon={Bluetooth} name='Bluetooth' />
      <Feature icon={Cam} name='Rear Cam' />
      <Feature icon={Wheels} name='Alloy wheels' />
      <Feature icon={Geo} name='Navigation' />
      <Feature icon={Air} name='Air Conditioner' />
      <Feature icon={Brake} name='Brake Assistance' />
      <Feature icon={Keyless} name='Keyless Start' /> */}
    </FlexRow>
  </Section>
