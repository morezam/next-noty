import Head from 'next/head';
import HomeComponent from '@components/home';
const Home = () => {
	return (
		<>
			<Head>
				<title>Noty</title>
				<meta
					name="description"
					content="Noty is a simple app that is going to help yoy take notes and organize your to-dos "
				/>

				<link rel="icon" type="image/svg+xml" href="/logo.svg" />
			</Head>
			<HomeComponent />
		</>
	);
};

export default Home;
