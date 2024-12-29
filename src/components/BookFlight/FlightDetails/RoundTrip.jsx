import ComboBox from "./ComboBox"
const Flights = ["Manila", "Cebu", "Taguig","Manila", "Cebu", "Taguig","Manila", "Cebu", "Taguig"]



export default function RoundTrip(){
    return(
        <ComboBox options={Flights}></ComboBox>
    );
}