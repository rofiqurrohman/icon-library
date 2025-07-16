import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Home } from '@/pages/Home';
import { IconLibraryProvider } from '@/contexts/IconLibraryContext';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <IconLibraryProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/admin" element={<AdminPage />} /> */}
        </Routes>
        <Toaster position='bottom-center' />
      </Router>
    </IconLibraryProvider>
  );
}

export default App;
