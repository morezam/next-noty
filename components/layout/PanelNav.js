import { useState } from 'react';
import Link from 'next/link';
import { FaEllipsisV, FaRegListAlt, FaTasks } from 'react-icons/fa';
import LogOut from '../user/LogOut';
import { NavTop, LinkNav, NavListWrap, NavList } from './PanelNavStyles';

const PanelNav = () => {
	const [open, setOpen] = useState(false);

	return (
		<NavTop>
			<Link href="/panel" passHref>
				<LinkNav>
					<FaRegListAlt />
				</LinkNav>
			</Link>
			<Link href="/panel/todos" passHref>
				<LinkNav>
					<FaTasks />
				</LinkNav>
			</Link>
			<LinkNav
				style={{ position: 'absolute', right: '0', zIndex: '200' }}
				onClick={() => setOpen(!open)}>
				<FaEllipsisV />
			</LinkNav>
			<NavListWrap open={open} onClick={() => setOpen(!open)}>
				<NavList>
					<LogOut />
				</NavList>
			</NavListWrap>
		</NavTop>
	);
};

export default PanelNav;
