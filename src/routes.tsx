import { Routes, Route } from 'react-router-dom'

import LoginForm from './components/Login'
import RegisterForm from './components/Register'

const Rotas = () => (
    <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
    </Routes>
)

export default Rotas