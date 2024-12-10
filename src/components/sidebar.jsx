import React, { useState } from "react";
import "./sidebar.css";
import DashboardIcon from "../Dependencies/iconDashboard.png";
import BookFlights from "../Dependencies/iconFlightBooking.png";
import ViewBookings from "../Dependencies/iconViewBookings.png";
import Account from "../Dependencies/iconProfile.png";

function Sidebar() {

  const[active, setActive] = useState(null);

    const handleClick = (index) => {
      setActive(index)
    }

  return (
    <aside>
      {[
        {icon: DashboardIcon, label: "Flights"},
        {icon: BookFlights, label: "Book Flights"},
        {icon: ViewBookings, label: "View Bookings"},
        {icon: Account, label: "Profile"},
      ].map((item, index) => (
        <div
          key={index}
          className = {`sidebar-item-${active === index ? "active" : ""}`}
          onClick = {() => handleClick(index)}
        >
        <img src={item.icon} alt = 'icon'/>
        {item.label}
        </div>
      ))}
    </aside>

  );
}
export default Sidebar;
