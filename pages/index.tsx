import Head from "next/head";
import Image from "next/image";

import FirstScreen from "@/components/firstScreen/FirstScreen";

export default function HomePage() {
	return (
		<main>
			<Head>
				<title>Головна - Просто паста</title>
				<meta
					name="description"
					content="На сторінці можна дізнатися багато цікавинок про нашу пасту на будь який Ваш смак. Арахісова солодка, солона, з фініками, з молоком, шоколадна. Великий та малий розмір. У нас знайдеться будь-яка арахісова паста. Натуральна арахісова паста з українською душею."
				/>
			</Head>
			<FirstScreen />
		</main>
	);
}
