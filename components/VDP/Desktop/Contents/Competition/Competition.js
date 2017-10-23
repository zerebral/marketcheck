import Section from '~/VDP/Section'
import { Table } from '~/general'

export default (props) =>
  <Section title='The Competition' summary='Similar cars currently for sale' className={props.className} {...props}>
    {props.similarCompetition && <Table data={props.similarCompetition} />}
  </Section>
