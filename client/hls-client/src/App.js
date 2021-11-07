import React from 'react'
import Signup from './Pages/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './Pages/PrivateRoute.js';
import ForgotPassword from './Pages/ForgotPassword';
import UpdateProfile from './Pages/UpdateProfile';
import Login from './Pages/Login';
///import Switch from 'react-bootstrap/esm/Switch';
import server1 from './Pages/server1';


function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="server1" component={server1}/>
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
