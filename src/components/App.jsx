import SidebarHeader from "./sidebar-header";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FlightsDashboardComponent from "./FlightsDashboard";
import ViewBookingsComponent from "./ViewBookings";
import BookFlightsComponent from "./BookFlight/BookFlight";
import ProfileComponent from "./Profile";
export default function App() {
  // const Tabs = [FlightsDashboard, BookFlights, ViewBookings, Profile];

  const Tabs = [
    { component: FlightsDashboardComponent, url: "/flights-dashboard" },
    { component: BookFlightsComponent, url: "/book-flights" },
    { component: ViewBookingsComponent, url: "view-bookings" },
    { component: ProfileComponent, url: "/profile" },
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
