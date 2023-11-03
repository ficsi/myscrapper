import {scrapeUserRequest} from "@/lib/actions/scrapeUserRequest";

export async function scrapeAndStore(url = '') {
	if (url.length === 0) {
		return
	}
	try {
		const scrapedInfo = await scrapeUserRequest(url);
		return scrapedInfo;
	} catch (err) {
		throw new Error(`Error occurred: ${err.message}`);
	}
}