import './App.scss'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import Sidebar from './pages/Dashboard/Sidebar/Sidebar'
import Tickets from './pages/Dashboard/Main/Tickets/Tickets'
import Overview from './pages/Dashboard/Main/Overview/Overview'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { SearchProvider } from './contexts/searchContext'

function App() {
	return (
		<SearchProvider>
			<div className="App">
				<ToastContainer position='top-center' theme='colored' />
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='/dashboard' element={<Dashboard />}>
							<Route path='' element={<Overview />} />
							<Route path='tickets' element={<Tickets />} />
							<Route path='*' element={<PageNotFound />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</SearchProvider>
	)
}

export default App
