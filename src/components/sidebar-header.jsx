import React, { useState } from "react";
import "./sidebar.css";
import DashboardIcon from "../Dependencies/iconDashboard.png";
import BookFlights from "../Dependencies/iconFlightBooking.png";
import ViewBookings from "../Dependencies/iconViewBookings.png";
import Account from "../Dependencies/iconProfile.png";
import LogoHeader from "../Dependencies/LogoWithName.png";
import LogoutIcon from "../Dependencies/LogoutICON.png";
import "../Dependencies/Fonts/Fonts.css";

function SidebarHeader({ Tabs, onTabChange }) {
  const [active, setActive] = useState();
  const [header, setHeader] = useState("Flights");

  const handleClick = (index, label) => {
    setActive(index);
    setHeader(label.toUpperCase());
    onTabChange(Tabs[index]);
  };

  return (
    <>
      <header>
        <img src={LogoHeader} alt="LogoHeader" />
        <p>{header}</p>
        <div>
          <img src={LogoutIcon} alt="Logout" />
          Logout
        </div>
      </header>
      <aside>
        {[
          { icon: DashboardIcon, label: "Flights" },
          { icon: BookFlights, label: "Book Flights" },
          { icon: ViewBookings, label: "View Bookings" },
          { icon: Account, label: "Profile" },
        ].map((item, index) => (
          <div
            key={index}
            className={`sidebar-item-${active === index ? "active" : ""}`}
            onClick={() => handleClick(index, item.label)}
          >
            <img src={item.icon} alt="icon" />
            {item.label}
          </div>
        ))}
      </aside>
    </>
  );
}
export default SidebarHeader;
