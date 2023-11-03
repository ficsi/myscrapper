import React from 'react'

function SingleCard(card) {
	console.log(card.props.split(' '))
	return (
		card.props.split(' ').map((el, index)=> <p key={el + '-' + index}>{el}</p>)
	)
}

export default SingleCard
