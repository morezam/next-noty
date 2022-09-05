import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../context/authContext';
import ShowNotes from '../note/ShowNotes';
import { Other, Parent, Sidebar, ModeWrapper } from './PanelStyles';
import SideList from './SideList';
import PanelNav from './PanelNav';

const Panel = () => {
	// const { state } = useAuthContext();
	// const router = useRouter();

	// if(!state.token){
	// 	router.replace('/login')
	// }

	return (
		<Parent>
			<Sidebar>
				<SideList />
			</Sidebar>
			<PanelNav />
			<Other>
				<ShowNotes />
			</Other>
		</Parent>
	);
};

export default Panel;
