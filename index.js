const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})


Bookings.forEach(booking => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${booking.hotelName}</td>
                        <td>${booking.hotelNumber}</td>
                        <td>${booking.paymentStatus}</td>
                        <td class="${booking.status ===
                        'Cancelled' ? 'danger' : booking.status === 'Pending' ? 'warning'
                        : 'success'}">${booking.status}</td>
                        <td class="primary">Details</td>
                        `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})
