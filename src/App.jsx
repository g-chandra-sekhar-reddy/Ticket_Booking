
import { useState } from "react";

import MovieDetails from "./components/MovieDetails";
import SeatLayout from "./components/SeatLayout";
import BookingSummary from "./components/BookingSummary";

import "./App.css";

function App() {

  const movieName = "Movie Name";
  const ticketPrice = 150;

  const rows = ["A", "B", "C", "D", "E", "F","G"];

  const [bookedSeats, setBookedSeats] = useState([
   
,"A5", "B5","C5","D5","E5","F5","G5","D1","D2","D3","D4","D5","D6","D7","D8","D9",
   "D7", "F5"
  ]);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const [isConfirmed, setIsConfirmed] = useState(false);

  // Select or deselect seats
  function handleSeatClick(seatId) {

    if (selectedSeats.includes(seatId)) {

      setSelectedSeats(
        selectedSeats.filter((seat) => seat !== seatId)
      );

    } else {

      setSelectedSeats([...selectedSeats, seatId]);

    }

    setIsConfirmed(false);
  }

  // Confirm booking
  function handleConfirm() {

    if (selectedSeats.length > 0) {

      setBookedSeats([...bookedSeats, ...selectedSeats]);

      setSelectedSeats([]);

      setIsConfirmed(true);
    }
  }

  return (
    <div className="app">

      <h1>🎬 Cinema Seat Booking</h1>

      <MovieDetails
        movieName={movieName}
        ticketPrice={ticketPrice}
      />

      <div className="legend">

        <span className="available">Available</span>

        <span className="selected">Selected</span>

        <span className="booked">Booked</span>

      </div>

      <SeatLayout
        rows={rows}
        bookedSeats={bookedSeats}
        selectedSeats={selectedSeats}
        onSeatClick={handleSeatClick}
      />

      <BookingSummary
        selectedSeats={selectedSeats}
        ticketPrice={ticketPrice}
        onConfirm={handleConfirm}
        isConfirmed={isConfirmed}
      />

    </div>
  );
}

export default App;
