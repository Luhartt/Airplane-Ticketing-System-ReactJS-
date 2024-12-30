import SidebarHeader from "./sidebar-header";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FlightsDashboard from "./FlightsDashboard";
import ViewBookings from "./ViewBookings";
import BookFlights from "./BookFlight/BookFlight";
import Profile from "./Profile";
export default function App() {
  // const Tabs = [FlightsDashboard, BookFlights, ViewBookings, Profile];

  const Tabs = [
    { component: FlightsDashboard, url: "/flights-dashboard/" },
    { component: BookFlights, url: "/book-flights/*" },
    { component: ViewBookings, url: "view-bookings/" },
    { component: Profile, url: "/profile/" },
  ];

  return (
    <BrowserRouter>
      <div className="Main">
        <SidebarHeader className="SidebarHeader" Tabs={Tabs} />
        <section className="MainSection">
          <div className="ContentPanel">
            <Routes>
              {Tabs.map((item) => (
                <Route
                  key={item.url}
                  path={item.url}
                  element={<item.component />}
                />
              ))}
            </Routes>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}
