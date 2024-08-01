import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubHeader from "./components/header/SubHeader";
import Dashboard from './components/Dashboard';
import MainHeader from './components/header/MainHeader';
import Agent from './components/Agent';
import Transaction from './components/Transaction';
import User from './components/User';
import Form from './components/Form';
import Report from './components/Report';

function App() {
  return (
    <Router>
      <MainHeader />
      <SubHeader />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/user" element={<User />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/report" element={<Report />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
