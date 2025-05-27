import React, { useState } from 'react';
import '../styles/Sidebar.css';
import {
  LayoutDashboard,
  History,
  Calendar,
  CalendarPlus,
  TrendingUp,
  MessageCircleMore,
  Phone,
  Settings,
} from 'lucide-react';

const generalLinks = [
  { label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { label: 'History', icon: <History size={20} /> },
  { label: 'Calendar', icon: <Calendar size={20} /> },
  { label: 'Appointments', icon: <CalendarPlus size={20} /> },
  { label: 'Statistics', icon: <TrendingUp size={20} /> },
];

const toolsLinks = [
  { label: 'Chat', icon: <MessageCircleMore size={20} /> },
  { label: 'Support', icon: <Phone size={20} /> },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button
        className="hamburger-menu"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h3 className="sidebar-section-title">General</h3>
          <nav className="sidebar-nav">
            {generalLinks.map((link) => (
              <div
                key={link.label}
                className={`sidebar-nav-item ${
                  activeItem === link.label ? 'active' : ''
                }`}
                onClick={() => setActiveItem(link.label)}
              >
                <div className="sidebar-icon">{link.icon}</div>
                <span className="sidebar-label">{link.label}</span>
              </div>
            ))}
          </nav>

          <h3 className="sidebar-section-title tools-title">Tools</h3>
          <nav className="sidebar-nav">
            {toolsLinks.map((link) => (
              <div
                key={link.label}
                className={`sidebar-nav-item ${
                  activeItem === link.label ? 'active' : ''
                }`}
                onClick={() => setActiveItem(link.label)}
              >
                <div className="sidebar-icon">{link.icon}</div>
                <span className="sidebar-label">{link.label}</span>
              </div>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div
              className={`sidebar-nav-item ${
                activeItem === 'Setting' ? 'active' : ''
              }`}
              onClick={() => setActiveItem('Setting')}
            >
              <div className="sidebar-icon">
                <Settings size={20} />
              </div>
              <span className="sidebar-label">Setting</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;