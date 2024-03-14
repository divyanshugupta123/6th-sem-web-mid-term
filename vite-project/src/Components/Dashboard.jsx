
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{"backgroundColor":"lightcyan"}}>
      <h1>Dashboard</h1>
      <Link style={{"textDecoration":"none"}}  to="/login">Login</Link>

      
      <Link style={{"marginLeft":"200px","textDecoration":"none"}}  to="/signup">Register</Link>
    </div>
  );
}

export default Dashboard;
