import React from 'react'
import SRP from '@/SRP'
import FontsHOC from '@/HOC/Fonts'

const Srp = (props) => { return (<SRP {...props} />) }

export default FontsHOC(Srp)
