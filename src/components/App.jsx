import SidebarHeader from './sidebar-header'
import Flights from './FlightsView'
import "./App.css"

export default function App(){
    return(
        <>
            <div className='Main'>
                <SidebarHeader className="SidebarHeader"></SidebarHeader>
                <section className='MainSection'>
                    <Flights></Flights>
                </section>
            </div>
        
        </>
    );
}