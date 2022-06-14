import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useCounter as useGlobalCounter } from '../providers/counter'

const Home = () => {
	const { counter, increment, decrement } = useCounter('Home')
	const { value, increment:goUp, decrement:goDown } = useGlobalCounter()
	
  return (
	<>
		<div>Home</div>

		<button onClick={decrement}>-</button>
		<button onClick={increment}>+</button>
		<p>Local value: {counter} </p>

		<button onClick={goDown}>-</button>
		<button onClick={goUp}>+</button>
		<p>Global value: {value}</p>
	</>
  )
}

export default Home