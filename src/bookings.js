import firebase from './firebase.js';

  var db = firebase.firestore();
  
  export function fetchBookings() {
    return db.collection("BookingPending")
        .get()
        .then((querySnapshot) => {
            let Bookings = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                Bookings.push({
                    hotelName: data.place,
                    hotelNumber: data.bookingID,
                    paymentStatus: "Due",
                    status: data.status
                });
            });
            return Bookings;
        });
}