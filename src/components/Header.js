import React from 'react';
import '../styles/Header.css';
import { Bell, Plus, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <span className="logo-gradient">Health</span>
        <span className="logo-dark">care.</span>
      </div>

      {/* Search + Notification */}
      <div className="header-center">
        <div className="header-search">
          <Search className="header-search-icon" size={18} />
          <span className="header-search-text">Search</span>
        </div>
        <div className="header-icon-box purple">
          <Bell size={18} color="#fff" />
        </div>
      </div>

      {/* Avatar + Add */}
      <div className="header-right">
        <div className="header-avatar-box">
          <img src="/userprofile.png" alt="User Avatar" />
        </div>
        <div className="header-icon-box purple">
          <Plus size={20} color="#fff" />
        </div>
      </div>
    </header>
  );
};

export default Header;