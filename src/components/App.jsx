import SidebarHeader from "./sidebar-header";
import FlightsDashboard from "./FlightsDashboard";
import ViewBookings from "./ViewBookings";
import BookFlights from "./BookFlight/BookFlight";
import Profile from "./Profile";
import "./App.css";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

export default function App() {
  const [ActiveTab, setActiveTab] = useState(() => FlightsDashboard);
  // const Tabs = [FlightsDashboard, BookFlights, ViewBookings, Profile];

  const Tabs = [
    {component: FlightsDashboard, url: "./FlightsDashboard.jsx"},
    {component: BookFlights, url: "./BookFlights.jsx"},
    {component: ViewBookings, url: "./ViewBookings.jsx"},
    {component: Profile, url: "./Profile.jsx"}
  ]


  const handleTabChange = (component) => {
    if (typeof component === "function") {
      setActiveTab(() => component);
    } else {
      console.error("Invalid component passed to handleTabChange:", component);
    }
  };

  return (
    <>
      <div className="Main">
        <SidebarHeader
          className="SidebarHeader"
          onTabChange={handleTabChange}
          Tabs={Tabs}
        />
        <section className="MainSection">
          <div className="ContentPanel">
            {/* <Router> */}
              {/* <Route path = {`./${ActiveTab}`} component = {ActiveTab}/> */}
            {/* </Router> */}
            <ActiveTab></ActiveTab>
          </div>
        </section>
      </div>
    </>
  );
}
