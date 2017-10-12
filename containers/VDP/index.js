import VDP from '~/VDP'
import vdpdata from './vdpdata'

export default (props) =>
  <VDP 
  {...vdpdata} 
  {...props} 
  name={`${props.vdp.build.make} ${props.vdp.build.model}`} 
  brief={`Stock # ${props.vdp.stock_no}, ${props.vdp.build.engine}, ${props.vdp.build.transmission}, ${props.vdp.miles} mi., ${parseInt(props.vdp.build.city_miles)}/${parseInt(props.vdp.build.highway_miles)} MPG*`}
  price={props.vdp.price}
  />
