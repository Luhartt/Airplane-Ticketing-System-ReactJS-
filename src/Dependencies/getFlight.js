function getFlight() {}

function transformFlight(rawflight) {
  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-us", options);
  }

  function formatTime(dateString) {
    const timeString = dateString.substring(11, 16);
    return timeString;
  }

  return {
    BookingDate: rawflight.BookingDate,
    TransactionNumber: rawflight.ReferenceNo,
    AirplaneNumber: rawflight.AirplaneNumber,
    DepartureDate: formatDate(rawflight.DepartureDate),
    Type: rawflight.Type,
    FlightData: {
      DepartureLocation: rawflight.DepartureAirportCode,
      ArrivalLocation: rawflight.ArrivalAirportCode,
      ArrivalTime: formatTime(rawflight.ArrivalDate),
      DepartureTime: formatTime(rawflight.DepartureDate),
    },
  };
}

export { getFlight, transformFlight };
