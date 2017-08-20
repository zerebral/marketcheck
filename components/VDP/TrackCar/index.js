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
        <Check text='Get similar listing alerts' />
        <Check text='Notify me when price drops for this car' />
        <Email placeholder='Enter your email address' />
        <Submit>Set Alerts</Submit>
      </Form>
    </Container>
  </Wrapper>
