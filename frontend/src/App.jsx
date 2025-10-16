import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import RequesterPage from './components/RequesterPage';
import SectionHeadPage from './components/SectionHeadPage';
import BatchHeadPage from './components/BatchHeadPage';
import StudentBodyPage from './components/StudentBodyPage';
import Register from './pages/Register';

// Create Auth Context
export const AuthContext = createContext();

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/requester" element={
            <ProtectedRoute>
              <RequesterPage />
            </ProtectedRoute>
          } />
          <Route path="/section-head" element={
            <ProtectedRoute>
              <SectionHeadPage />
            </ProtectedRoute>
          } />
          <Route path="/batch-head" element={
            <ProtectedRoute>
              <BatchHeadPage />
            </ProtectedRoute>
          } />
          <Route path="/student-body" element={
            <ProtectedRoute>
              <StudentBodyPage />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;