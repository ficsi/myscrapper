'use client';

import React, {useState} from 'react'
import {scrapeAndStore} from "@/lib/actions";
import SingleCard from "@/components/SingleCard";

const homepageStyles = {
	container:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems:'center',
		marginTop: '100px'
	},
	search: {
		border: '2px solid #4BCC01',
		borderRadius: '8px',
		width: '100%',
		maxWidth: '300px',
		height: '50px',
		padding: '0 0 0 8px',
	},
	button:{
		marginTop: '20px',
		borderRadius: '18px',
		background: '#239200',
		boxShadow:'0 4px 0 0 #35af00',
		color: '#fff',
		padding: '8px 25px',
		cursor: 'pointer'
	},
	hr: {
		height: '1px',
		background: 'gray',
		marginTop: '20px'
	}
}

const Home = () => {

	const [searchedValue, setSearchedValued] = useState('');
	const [load, setLoad] = useState(false);
	const [data, setData] = useState();
	const handleSubmit = async (event) => {
		event.preventDefault();

		console.log('user click submit!');
		console.log(searchedValue)

		setData(await scrapeAndStore(searchedValue));
		setLoad(await scrapeAndStore(searchedValue))
	}

	return (
		<>
			<form onSubmit={handleSubmit} style={homepageStyles.container}>
				<input style={homepageStyles.search} type="text" onChange={(e) => {
					setSearchedValued(e.target.value)
				}}/>
				<button type={"submit"} style={homepageStyles.button}>scrape</button>
			</form>
			<hr style={homepageStyles.hr}/>
			{ data ? <SingleCard props={data}/> : <span style={homepageStyles.container}>please provide valid url to search in ...</span>}
		</>

	)
}
export default Home
