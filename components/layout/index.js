import PanelNav from './PanelNav';
import SideList from './SideList';
import { Other, Parent, Sidebar } from './styles';

const PanelLayout = ({ children }) => {
	return (
		<Parent>
			<Sidebar>
				<SideList />
			</Sidebar>
			<PanelNav />
			<Other>{children}</Other>
		</Parent>
	);
};

export default PanelLayout;
