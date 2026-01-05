const openingTimes = [
  { day: "Monday", open: "10:00", close: "01:00" },
  { day: "Tuesday", open: "12:00", close: "01:00" },
  { day: "Wednesday", open: "10:00", close: "01:00" },
  { day: "Thursday", open: "10:00", close: "01:00" },
  { day: "Friday", open: "13:00", close: "01:00" },
  { day: "Saturday", open: "Closed", close: "" },
  { day: "Sunday", open: "13:00", close: "01:00" },
];

const ReservationSection = () => {
  return (
    <div className="reservation-section container-fluid p-5 py-5">
      <div className="row g-5 full-height-row">

        {/* Reservation Form */}
        <div className="col-lg-6 col-md-12 order-1 order-lg-1 full-height-col">
          <div className="reservation-form">
            <h2>Reservations</h2>
            <form>
              <div className="form-group">
                <label>Full Name:</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>

              <div className="form-group">
                <label>Choose Table:</label>
                <input type="text" className="form-control" placeholder="Table number" />
              </div>

              <div className="form-group">
                <label>Choose Time:</label>
                <input type="text" className="form-control" placeholder="Time" />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>

              <button type="submit" className="btn btn-dark w-100 mt-4">
                Book Table
              </button>
            </form>
          </div>
        </div>

        {/* Opening Times */}
        <div className="col-lg-6 col-md-12 order-2 order-lg-2 full-height-col">
          <div className="opening-times">
            <h2>Opening Time</h2>
            <div className="time-list">
              {openingTimes.map((item, index) => (
                <div className="time-row" key={index}>
                  <span className="day">{item.day}:</span>
                  <span className="times">{item.open}{item.close && ` - ${item.close}`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReservationSection;
