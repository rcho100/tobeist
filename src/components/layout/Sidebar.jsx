import React from 'react';
import {
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__top">
        <li>
          <span><FaInbox /></span>
          <span> Inbox</span>
        </li>
        <li>
          <span><FaRegCalendar /></span>
          <span> Today</span>
        </li>
        <li>
          <span><FaRegCalendarAlt /></span>
          <span> Upcoming</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
