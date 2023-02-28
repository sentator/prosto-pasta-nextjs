import React from "react";
import Head from "next/head";

import { getProducts, getRunningQueriesThunk } from "../services/mockApi";
import { wrapper } from "@/redux/store";
import { viewportWidthContext } from "@/context";
import FirstScreen from "@/components/firstScreen/FirstScreen";
import SectionProducts from "@/components/sectionProducts/SectionProducts";
import SectionAdvantages from "@/components/sectionAdvantages/SectionAdvantages";
import SectionAdvantagesMobile from "@/components/sectionAdvantagesMobile/SectionAdvantagesMobile";
import SectionBenefits from "@/components/sectionBenefits/SectionBenefits";
import SectionPhotos from "@/components/sectionPhotos/SectionPhotos";

export default function HomePage() {
	const { isMobile } = React.useContext(viewportWidthContext);
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
			{isMobile ? <SectionAdvantagesMobile /> : <SectionAdvantages />}
			<SectionBenefits />
			<SectionPhotos />
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
