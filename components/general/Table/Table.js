import {
  Table,
  TRow,
  THeader,
  TCol,
  Text,
  Title
} from './Components'

export default (props) =>
  <Table data={props.data}>
    <THeader>
      <TCol>
        <Title>{props.headings[0]}</Title>
      </TCol>
      <TCol>
        <Title>{props.headings[1]}</Title>
      </TCol>
      <TCol>
        <Title>{props.headings[2]}</Title>
      </TCol>
      <TCol>
        <Title>{props.headings[3]}</Title>
      </TCol>
    </THeader>

    {props.data && 

    props.data.map((row, key) => {
     return (
      <TRow key={key}>
        {Object.keys(row).map((keyName, keyIndex) => {
         return (
          <TCol key={row[keyName]}>
            <Text>{row[keyName]}</Text>
          </TCol>)
        })}
      </TRow>)
    })} 
  </Table>
