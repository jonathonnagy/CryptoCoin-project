
import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useCounter as useGlobalCounter } from '../providers/counter'


const Profile = () => {
	const { counter, increment, decrement } = useCounter('Profile')
	const { value, increment:goUp, decrement:goDown } = useGlobalCounter()


	

  return (
	<>
	<div>Profile</div>

	<button onClick={decrement}>-</button>
	<button onClick={increment}>+</button>
	<p>Local value: {counter} </p>

	<button onClick={goDown}>-</button>
	<button onClick={goUp}>+</button>
	<p>Gloval value: {value}</p>
</>
  )
}

export default Profile