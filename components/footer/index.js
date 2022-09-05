import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
	Footer,
	FooterContent,
	FooterLinks,
	FooterLink,
	FooterSocials,
	FooterCopy,
} from './FooterStyles';

const index = () => {
	return (
		<Footer>
			<FooterContent>
				<FooterLinks>
					<Link passHref href="/">
						<FooterLink>Home</FooterLink>
					</Link>
					<Link passHref href="/signup">
						<FooterLink>Signup</FooterLink>
					</Link>
					<Link passHref href="/login">
						<FooterLink>login</FooterLink>
					</Link>
				</FooterLinks>
				<FooterSocials>
					<FaInstagram />
					<FaYoutube />
					<FaTwitter />
				</FooterSocials>
			</FooterContent>
			<FooterCopy>
				&copy; {new Date().getFullYear()} All Rights Reserved
			</FooterCopy>
		</Footer>
	);
};

export default index;
