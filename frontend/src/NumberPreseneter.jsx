import React from 'react'
import { useCounter } from './CounterProvider'


const NumberPreseneter = () => {
	const {value} = useCounter()

  return (
	<>
		<p>Value from parameter: {value}</p>
	</>
  )
}

export default NumberPreseneter