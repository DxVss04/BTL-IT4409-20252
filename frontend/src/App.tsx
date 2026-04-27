import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import ChatPage from './pages/ChatPage';
import ContactsPage from './pages/ContactsPage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <div className="h-screen w-screen bg-surface flex overflow-hidden">
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ChatPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            {/* Additional routes will go here */}
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
