import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'

function App() {

	return (
		<div className="App">
			<ToastContainer position='top-center' theme='colored'/>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />}></Route>
					<Route path='/signup' element={<Signup />}></Route>
					<Route path='/dashboard' element={<Dashboard />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
