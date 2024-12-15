const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "airplaneticketingsystem2024",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/FlightsDashboard", (req, res) => {
  const query = `
SELECT Flights.DepartureDate, Flights.ArrivalDate, Flights.AirplaneNumber, Flights.FlightID, 
ArrivalAirport.AirportCode AS ArrivalAirportCode, DepartureAirport.AirportCode AS DepartureAirportCode, Flights.Type
FROM flights
JOIN Airport AS DepartureAirport ON Flights.DepartureAirportID = DepartureAirport.AirportID
JOIN Airport AS ArrivalAirport ON Flights.ArrivalAirportID = ArrivalAirport.AirportID
WHERE flights.DepartureDate >= NOW()
ORDER BY Flights.DepartureDate ASC;
    `;
    db.query(query, (err, results) => {
        if(err) res.status(500).json({error:err});
        res.json(results)
    })
});

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
