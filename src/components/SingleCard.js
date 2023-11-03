import React from 'react'

function SingleCard(card) {
	console.log(card.props.split('\n'))
	return (
		<div dangerouslySetInnerHTML={{
			__html: card.props.split('\n').filter((str) => str !== ' ')
				.map((el) => el,
				),
		}}>


		</div>

	)
}

export default SingleCard
