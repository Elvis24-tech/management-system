import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';

// Page Imports
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Tenants from './pages/Tenants';

function App() {
  return (
    <Router>
      <div className="flex bg-gray-50 min-h-screen">
        
        {/* Sidebar: Fixed component on the left */}
        <Sidebar />
        
        {/* Main Content Area: Flexes to fill space, margin compensates for sidebar width */}
        <div className="flex-1 ml-64"> 
          <Navbar />
          <main className="p-8">
            <Routes>
              {/* Core Application Routes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/tenants" element={<Tenants />} />
              
              {/* Placeholder Routes */}
              <Route path="/maintenance" element={
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-800">Maintenance Management</h2>
                  <p className="mt-2 text-gray-600">This page will house interactive maintenance tracking.</p>
                </div>
              } />
              <Route path="/settings" element={
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-800">Application Settings</h2>
                  <p className="mt-2 text-gray-600">Configure users, roles, and system preferences here.</p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;