
import Seat from "./Seat";

function SeatLayout({
  rows,
  bookedSeats,
  selectedSeats,
  onSeatClick
}) {
  return (
    <div className="seat-layout">

      <div className="screen">
        SCREEN
      </div>

      {rows.map((row) => (
        <div className="seat-row" key={row}>

          <span>{row}</span>

          {Array.from({ length: 9 }, (_, index) => {

            const seatId = row + (index + 1);

            const status = bookedSeats.includes(seatId)
              ? "booked"
              : selectedSeats.includes(seatId)
              ? "selected"
              : "available";

            return (
              <Seat
                key={seatId}
                seatId={seatId}
                status={status}
                onSeatClick={onSeatClick}
              />
            );
          })}

        </div>
      ))}

    </div>
  );
}

export default SeatLayout;
