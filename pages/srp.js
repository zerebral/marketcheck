import React from 'react'
import SRP from '@/SRP'
import FontsHOC from '@/HOC/Fonts'

const Srp = ({...props}) => <SRP {...props} />

export default FontsHOC(Srp)
