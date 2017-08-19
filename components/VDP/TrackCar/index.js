import Wrapper from './Wrapper'
import { Container } from '~/layout'
import Heading from './Heading'
import Form from './Form'
import Email from './Email'
import Submit from './Submit'
import Check from './Check'

export default () =>
  <Wrapper>
    <Container>
      <Heading>Track This Car</Heading>
      <Form>
        <Email placeholder='Enter your email address' />
        <Check name='Option 1' id='AABBCC' />
        <Submit>Set Alerts</Submit>
      </Form>
    </Container>
  </Wrapper>
