import ShowNotes from '../note/ShowNotes';
import { Other, Parent, Sidebar, ModeWrapper } from './PanelStyles';
import SideList from './SideList';
import PanelNav from './PanelNav';

const Panel = () => {
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
