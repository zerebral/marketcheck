import Section from '~/VDP/Section'
import Rating from './Rating'
import Seller from './Seller'
import { FlexRow, FlexCol } from '~/layout'

export default () =>
  <Section title='Safety Ratings' summary='Define Where Data is Coming From'>

    <FlexRow justify='center'>
      <FlexCol cols={8}>
        <FlexRow justify='center' noMargin >
          <Rating stars={4} name='Overall' />
        </FlexRow>
        <FlexRow justify='center' noMargin >
          <Rating stars={2} name='Roll Over' />
          <Rating stars={3.2} name='Driver Side' />
          <Rating stars={4.3} name='Driver Front' />
          <Rating stars={5} name='Passenger Front' />
        </FlexRow>
      </FlexCol>
    </FlexRow>

    <Seller
      name='Drew International Sales'
      location='Atlanta, GA'
      distance={24}
      rating={4.2}
      reviews={24}
      website='#'
    />
  </Section>
