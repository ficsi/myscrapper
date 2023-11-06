import * as cheerio from 'cheerio';
import axios from "axios";
import {useState} from "react";


export async function scrapeUserRequest(url) {
	let data;
	try {
		const response = await axios(url);
		// console.log(response.data)
		const $ = cheerio.load(response.data);

		data = ($('[data-controller="coin-row-ads"]')).html();
		if(data === null){
			data = ($('.container main').html())
		}
		console.log(data)
		return data;
	} catch (error) {
		throw new Error(`Error Here: ${error.message}`)
	}
}


