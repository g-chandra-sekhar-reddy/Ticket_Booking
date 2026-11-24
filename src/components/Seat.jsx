
function Seat({ seatId, status, onSeatClick }) {
  return (
    <button
      className={`seat ${status}`}
      disabled={status === "booked"}
      onClick={() => onSeatClick(seatId)}
    >
      {seatId}
    </button>
  );
}

export default Seat;
