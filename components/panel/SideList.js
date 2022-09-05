import Link from 'next/link';
import { FaRegListAlt, FaRegPlusSquare, FaTasks } from 'react-icons/fa';
import Logo from '../Logo';
import LogOut from '../user/LogOut';
import { StyledLink, Ul } from './SideListStyles';

const SideList = () => {
	const authCtx = useContext(AuthContext);
	const history = useHistory();
	const onHomeClick = () => {
		history.replace('/');
		authCtx.logOut();
	};

	return (
		<Ul>
			<li>
				<Link passHref href="/">
					<StyledLink onClick={onHomeClick}>
						<Logo />
					</StyledLink>
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
				<Link passHref href="/panel/create">
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
};

export default SideList;
