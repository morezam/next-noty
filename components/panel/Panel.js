import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import CreateNote from '../note/CreateNote';
import ShowNote from '../note/ShowNote';
import ShowNotes from '../note/ShowNotes';
import { Other, Parent, Sidebar, ModeWrapper } from './PanelStyles';
import SideList from './SideList';
import ShowTodos from '../todo/ShowTodos';
import PanelNav from './PanelNav';
import ThemeContext from '../../context/theme-context';
import Modes from '../Modes';

const Panel = () => {
	const authCtx = useContext(AuthContext);
	const themeCtx = useContext(ThemeContext);
	const history = useHistory();

	if (!authCtx.isAuthenticated) {
		history.replace('/');
	}

	return (
		<Router>
			<Parent>
				<Sidebar>
					<SideList />
					<ModeWrapper onClick={() => themeCtx.toggleTheme()}>
						<Modes />
					</ModeWrapper>
				</Sidebar>
				<PanelNav />
				<Other>
					<Switch>
						<Route exact path="/panel">
							<ShowNotes />
						</Route>
						<Route path="/panel/create">
							<CreateNote />
						</Route>
						<Route
							path="/panel/note/:id"
							render={props => <ShowNote {...props} />}
						/>
						<Route path="/panel/todos">
							<ShowTodos />
						</Route>
					</Switch>
				</Other>
			</Parent>
		</Router>
	);
};

export default Panel;
