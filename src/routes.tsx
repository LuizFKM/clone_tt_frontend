import { Routes, Route } from 'react-router-dom'

import LoginForm from './components/Login'
import RegisterForm from './components/Register'
import Home from './pages/Home'

const Rotas = () => (
    <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
    </Routes>
)

export default Rotas