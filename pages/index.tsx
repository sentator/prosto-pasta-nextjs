import Head from "next/head";

import { getProducts, getRunningQueriesThunk } from "../services/mockApi";
import { wrapper } from "@/redux/store";
import FirstScreen from "@/components/firstScreen/FirstScreen";
import SectionProducts from "@/components/sectionProducts/SectionProducts";

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
			<SectionProducts sectionTitle="Наші хіти" buttonTitle="Повний каталог" />
		</main>
	);
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
	store.dispatch(getProducts.initiate({ page: 1, limit: 10 }));
	await Promise.all(store.dispatch(getRunningQueriesThunk()));

	return {
		props: {},
	};
});
