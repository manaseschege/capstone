import React, { useState } from "react";


const BookingTable = () => {
    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState("");
    const [partySize, setPartySize] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking submitted:", bookingDate, bookingTime, partySize);
        // Handle booking submission logic here
    };

    return (
        <form id="form" onSubmit={handleSubmit} className="booking-form">
            <label htmlFor="booking-date">Booking Date:</label>
            <input
                type="date"
                id="booking-date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                required
            />
            <label htmlFor="booking-time">Booking Time:</label>
            <input
                type="time"
                id="booking-time"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                required
            />
            <label htmlFor="party-size">Party Size:</label>
            <input
                type="number"
                id="party-size"
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                required
            />
            <button type="submit">Book Table</button>
        </form>
    );
};

export default BookingTable;
