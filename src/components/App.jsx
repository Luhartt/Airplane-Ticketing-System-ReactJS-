import SidebarHeader from "./sidebar-header";
import FlightsDashboard from "./FlightsDashboard";
import ViewBookings from "./ViewBookings";
import BookFlights from "./BookFlight/BookFlight";
import Profile from "./Profile";
import "./App.css";
import { useState } from "react";
import { Router, Route } from "react-router";

export default function App() {
  const [ActiveTab, setActiveTab] = useState(() => FlightsDashboard);
  const Tabs = [FlightsDashboard, BookFlights, ViewBookings, Profile];

  const handleTabChange = (component) => {
    if (typeof component === "function") {
      setActiveTab(() => component); // Correctly set component reference
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
