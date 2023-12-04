import { BrowserRouter, Navigate, Route, Routes,redirect} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import './index.css'
import LoginDialog from './components/LoginDialog/LoginDialog';
import Register from './components/Register/Register';
const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginDialog/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route
              path="/dashboard"
              element={
                localStorage.getItem('token') ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Route>

      </Routes>
    </BrowserRouter>
  </div>
};

export default App;