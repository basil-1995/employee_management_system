import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import CreateForm from './components/createFrom';
import FormList from './components/formList';
import EditForm from './components/editForm';
import AddEmployee from './components/addEmployee';
import EmployeeList from './components/employeeList';


function App() {
  const isAuthenticated = !!localStorage.getItem('access_token');
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login';
  };

  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar">
          <h2>Employee Manager</h2>
          <div className="nav-items">
            {isAuthenticated ? (
              <>
                <Link to="/" style={linkStyle}>My Forms</Link>
                <Link to="/employee-list" style={linkStyle}>Employee List</Link>
                <Link to="/create-form" style={linkStyle}>Create Form</Link>
                <button onClick={handleLogout} style={logoutBtnStyle}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/register" style={linkStyle}>Register</Link>
                <Link to="/login" style={linkStyle}>Login</Link>
              </>
            )}
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<FormList />} />
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-form" element={<CreateForm />} />
            <Route path="/edit-form/:id" element={<EditForm />} />
            <Route path="/add-employee/:id" element={<AddEmployee />} />
          </Routes>

        </main>
      </div>
    </Router>
  )
}

const logoutBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#dc3545',
  fontWeight: '500',
  cursor: 'pointer',
  marginLeft: '20px',
  fontSize: '16px'
};

const linkStyle = {
  color: '#007bff',
  marginLeft: '20px',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '16px'
};

export default App
