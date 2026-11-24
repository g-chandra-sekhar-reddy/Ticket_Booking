
function BookingSummary({
  selectedSeats,
  ticketPrice,
  onConfirm,
  isConfirmed
}) {
  const totalPrice = selectedSeats.length * ticketPrice;

  return (
    <div className="summary">

      <h2>Booking Summary</h2>

      <p>
        Selected Seats:{" "}
        {selectedSeats.length > 0
          ? selectedSeats.join(", ")
          : "None"}
      </p>

      <p>
        Selected Seat Count: {selectedSeats.length}
      </p>

      <p>
        Ticket Price: ₹{ticketPrice}
      </p>

      <h3>Total Amount: ₹{totalPrice}</h3>

      <button
        onClick={onConfirm}
        disabled={selectedSeats.length === 0}
      >
        Confirm Booking
      </button>

      {isConfirmed && (
        <h3>Booking Successful!</h3>
      )}

    </div>
  );
}

export default BookingSummary;
