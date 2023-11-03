import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/components/navbar";

const inter = Inter({subsets: ['latin']})

export const metadata = {
	title: 'Simple Web Scrapper',
	description: 'Scrape what ever you need...',
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
		<body className={inter.className}>

		<main>
			<Navbar/>
			{children}
		</main>
		</body>
		</html>
	)
}
