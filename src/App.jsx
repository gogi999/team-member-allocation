import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Employees from './components/Employees';
import Footer from './components/Footer';
import GroupedTeamMembers from './components/GroupedTeamMembers';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { DataProvider } from './context/DataContext';

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
