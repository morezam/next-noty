import Link from 'next/link';
import { memo } from 'react';
import { FaRegListAlt, FaRegPlusSquare, FaTasks } from 'react-icons/fa';
import Logo from '../Logo';
import LogOut from '../user/LogOut';
import { StyledLink, Ul } from './SideListStyles';

const SideList = memo(() => {
	return (
		<Ul>
			<li style={{ paddingBottom: '2rem' }}>
				<Link href="/">
					<a>
						<Logo />
					</a>
				</Link>
			</li>
			<li>
				<Link passHref href="/panel">
					<StyledLink>
						<FaRegListAlt />
						All Notes
					</StyledLink>
				</Link>
			</li>
			<li>
				<Link passHref href="/panel/notes/create">
					<StyledLink>
						<FaRegPlusSquare />
						create new note
					</StyledLink>
				</Link>
			</li>
			<li>
				<Link passHref href="/panel/todos">
					<StyledLink>
						<FaTasks />
						todos
					</StyledLink>
				</Link>
			</li>
			<li style={{ position: 'absolute', bottom: '0', width: '100%' }}>
				<LogOut />
			</li>
		</Ul>
	);
});

SideList.displayName = 'SideList';

export default SideList;
