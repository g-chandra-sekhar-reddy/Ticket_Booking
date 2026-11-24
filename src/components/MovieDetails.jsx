
function MovieDetails({ movieName, ticketPrice }) {
  return (
    <div className="movie-details">
      <h2>{movieName}</h2>
      <p>Ticket Price: ₹{ticketPrice}</p>
    </div>
  );
}

export default MovieDetails;
