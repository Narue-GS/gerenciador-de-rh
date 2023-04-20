import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { UsersProvider } from './hooks/useUsers';
import { PermissionsProvider } from './hooks/usePermissions';
import { JurisditionProvider } from './hooks/useJurisdictions';
import { CurrentUserProvider } from './hooks/useCurrentUser';

import Home from './pages/home';

function App() {
  return (
		<JurisditionProvider>
			<PermissionsProvider>
					<UsersProvider>
						<CurrentUserProvider>
							<Router>
								<div className="App">
									<Routes>
										<Route path="/" element={<Home />}></Route>
									</Routes>
								</div>
							</Router>
						</CurrentUserProvider>
					</UsersProvider>
			</PermissionsProvider>
		</JurisditionProvider>
  );
}

export default App;
