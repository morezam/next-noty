import { useState } from 'react';
import Link from 'next/link';
import { FaWindowClose } from 'react-icons/fa';
import {
	StyledLink,
	NavUlWrapper,
	NavUl,
	NavWrapper,
	NavClose,
	LogoNav,
} from './NavStyles';
import Logo from '../Logo';
import Menu from '../menu';

const Nav = () => {
	const [active, setActive] = useState(false);

	return (
		<NavWrapper>
			<Menu />
			<LogoNav>
				<Link href="/" passHref>
					<StyledLink color="#000">
						<Logo />
					</StyledLink>
				</Link>
			</LogoNav>

			<NavUlWrapper active={active}>
				<NavClose onClick={() => setActive(!active)}>
					<FaWindowClose />
				</NavClose>
				<NavUl>
					<li>
						<Link href="/" passHref>
							<StyledLink>Home</StyledLink>
						</Link>
					</li>
					<li>
						<Link href="/signup" passHref>
							<StyledLink>Signup</StyledLink>
						</Link>
					</li>
					<li>
						<Link href="/login" passHref>
							<StyledLink>Login</StyledLink>
						</Link>
					</li>
				</NavUl>
			</NavUlWrapper>
		</NavWrapper>
	);
};

export default Nav;
