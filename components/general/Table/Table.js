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
        <Title>Similar Car Models</Title>
      </TCol>
      <TCol>
        <Title>Price</Title>
      </TCol>
      <TCol>
        <Title>Mileage</Title>
      </TCol>
      {/* <TCol>
        <Title>Avg. Market Value</Title>
      </TCol> */}
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
