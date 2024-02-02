import firebase from './firebase.js';

var db = firebase.firestore();

// Object to hold the counts of each booking
var bookingCounts = {
    'casaDine': 0,
    'palmerasDine': 0,
    'sulyapDine': 0,
    'casaHotel': 0,
    'palmerasHotel': 0,
    'tahananMedingHotel': 0
};

var totalBookings = 0;
var bookingPlaces = {};

db.collection("BookingPending")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const establishmentID = data.establishmentID;
            const place = data.place;

            // Store the place name for this establishmentID
            bookingPlaces[establishmentID] = place;

            // Log the establishmentID and place
            console.log('establishmentID:', establishmentID, 'place:', place);


            // If this bookingID is one of the ones we're tracking, increment its count
            if (bookingCounts.hasOwnProperty(establishmentID)) {
                bookingCounts[establishmentID]++;
            }

            // Increment total bookings count
            totalBookings++;
        });

        // Find the booking with the highest and lowest count
        var mostBookedBooking = Object.keys(bookingCounts).reduce((a, b) => bookingCounts[a] > bookingCounts[b] ? a : b);
        var leastBookedBooking = Object.keys(bookingCounts).reduce((a, b) => bookingCounts[a] < bookingCounts[b] ? a : b);

        // Log the value of leastBookedName
        // Log the establishmentID of the least booked booking
        console.log(leastBookedBooking);

        // Get the HTML elements
        var mostBookedElement = document.getElementById('mostBooked');
        var mostBookedCountElement = document.getElementById('mostBookedCount');
        var leastBookedNameElement = document.getElementById('leastBookedName');
        var leastBookedCountElement = document.getElementById('leastBookedCount');
        var totalBookingsElement = document.getElementById('testing');

        // Set the text content of the elements
        mostBookedElement.textContent = bookingPlaces[mostBookedBooking];
        mostBookedCountElement.textContent = bookingCounts[mostBookedBooking];
        leastBookedNameElement.textContent = bookingPlaces[leastBookedBooking];
        leastBookedCountElement.textContent = bookingCounts[leastBookedBooking];
        totalBookingsElement.textContent = totalBookings;
    });