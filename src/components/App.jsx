import SidebarHeader from "./sidebar-header";
import FlightsDashboard from "./FlightsDashboard";
import "./App.css";

export default function App() {

  return (
    <>
      <div className="Main">
        <SidebarHeader className="SidebarHeader"></SidebarHeader>
        <section className="MainSection">
          <div className="ContentPanel">
            <FlightsDashboard></FlightsDashboard>
          </div>
        </section>
      </div>
    </>
  );
}
