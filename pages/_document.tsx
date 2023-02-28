import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="uk">
			<Head>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
				<link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#00aba9" />
				<meta property="og:title" content="Просто Паста - натуральні смаколики з арахісу" />
				<meta property="og:url" content="https://prosto-pasta-nextjs.vercel.app" />
				<meta property="og:image" content="./og-preview.jpg" />
				<meta
					property="og:description"
					content="Арахісова солодка, солона, з фініками, з молоком, шоколадна. Великий та малий розмір. У нас знайдеться будь-яка арахісова паста. Натуральна арахісова паста з українською душею."
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
