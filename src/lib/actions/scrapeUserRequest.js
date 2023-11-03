import * as cheerio from 'cheerio';
import axios from "axios";
import {useState} from "react";


export async function scrapeUserRequest(url) {
	let data;
	try {
		const response = await axios(url);
		// console.log(response.data)
		const $ = cheerio.load(response.data);
		data = ($('.tw-items-start > span.tw-items-center'));
		return data.text().trim();
	} catch (error) {
		throw new Error(`Error Here: ${error.message}`)
	}
}