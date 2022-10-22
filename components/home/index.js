import Link from 'next/link';
import Image from 'next/image';
import {
	HomeWrapper,
	HomeContent,
	HomeP,
	LinkButton,
	LinkWrapper,
} from './HomeStyles';
import { H1 } from '../Typography';
import Features from '../features/Features';
import FooterComponent from '../footer';
import Logo from '../Logo';

const Home = () => {
	return (
		<>
			<Logo />
			<HomeWrapper>
				<HomeContent>
					<H1>WELCOME TO NOTY</H1>
					<HomeP>
						Hello to all of You. Noty is a Simple Web Application for creating,
						deleting and updating notes and todos. you can create your account
						by clicking on Sign up button or if you have one click on login
						button
					</HomeP>
					<LinkWrapper>
						<Link href="/signup" passHref>
							<LinkButton bgcolor="var(--secondary-color)">Sign up</LinkButton>
						</Link>
						<Link href="/login" passHref>
							<LinkButton bgcolor="var(--primary-color)">Login</LinkButton>
						</Link>
					</LinkWrapper>
				</HomeContent>
				<Image height={700} width={700} src="/Write.svg" alt="hero image" />
			</HomeWrapper>
			<Features />
			<FooterComponent />
		</>
	);
};

export default Home;
