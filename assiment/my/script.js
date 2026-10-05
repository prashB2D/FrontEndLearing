/* ============================================
   SEAT DATA
   In real project, fetch this from your backend:
   fetch('/api/shows/123/seats').then(...)
   ============================================ */
const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const seatsPerRow = 10;
const maxSeats = 10; // max seats per booking

// Generate seat layout (some booked randomly for demo)
const seats = [];
rows.forEach(row => {
  for (let i = 1; i <= seatsPerRow; i++) {
    seats.push({
      id: row + i,
      row: row,
      number: i,
      price: 200,
      status: Math.random() < 0.2 ? 'booked' : 'available' // 20% booked for demo
    });
  }
});

// State
let selectedSeats = []; // array of seat objects

/* ============================================
   RENDER SEATS
   ============================================ */
const seatGrid = document.getElementById('seatGrid');

function renderSeats() {
  // Group seats by row
  const byRow = {};
  seats.forEach(seat => {
    if (!byRow[seat.row]) byRow[seat.row] = [];
    byRow[seat.row].push(seat);
  });

  // Build HTML
  let html = '';
  Object.keys(byRow).forEach(row => {
    html += `<div class="seat-row">`;
    html += `<span class="row-label">${row}</span>`;
    byRow[row].forEach(seat => {
      html += `<button 
        class="seat ${seat.status}" 
        data-id="${seat.id}"
        ${seat.status === 'booked' ? 'disabled' : ''}
      >${seat.number}</button>`;
    });
    html += `</div>`;
  });

  seatGrid.innerHTML = html;

  // Attach click listeners
  document.querySelectorAll('.seat.available').forEach(btn => {
    btn.addEventListener('click', () => handleSeatClick(btn.dataset.id));
  });
}

/* ============================================
   HANDLE SEAT CLICK
   ============================================ */
function handleSeatClick(seatId) {
  const seat = seats.find(s => s.id === seatId);
  if (!seat || seat.status === 'booked') return;

  const index = selectedSeats.findIndex(s => s.id === seatId);

  if (index > -1) {
    // Already selected → deselect
    selectedSeats.splice(index, 1);
    document.querySelector(`.seat[data-id="${seatId}"]`).classList.remove('selected');
  } else {
    // Check max limit
    if (selectedSeats.length >= maxSeats) {
      alert(`You can select maximum ${maxSeats} seats`);
      return;
    }
    // Select
    selectedSeats.push(seat);
    document.querySelector(`.seat[data-id="${seatId}"]`).classList.add('selected');
  }

  updateSummary();
}

/* ============================================
   UPDATE SUMMARY BAR
   ============================================ */
function updateSummary() {
  const listEl = document.getElementById('selectedList');
  const totalEl = document.getElementById('totalPrice');
  const confirmBtn = document.getElementById('confirmBtn');

  if (selectedSeats.length === 0) {
    listEl.textContent = 'None';
    totalEl.textContent = '0';
    confirmBtn.disabled = true;
  } else {
    listEl.textContent = selectedSeats.map(s => s.id).join(', ');
    const total = selectedSeats.reduce((sum, s) => sum + s.price, 0);
    totalEl.textContent = total;
    confirmBtn.disabled = false;
  }
}

/* ============================================
   CONFIRM BOOKING
   ============================================ */
document.getElementById('confirmBtn').addEventListener('click', async () => {
  if (selectedSeats.length === 0) return;

  const seatIds = selectedSeats.map(s => s.id);
  const total = selectedSeats.reduce((sum, s) => sum + s.price, 0);

  // In real project, send to backend:
  /*
  try {
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ showId: 123, seatIds })
    });
    const data = await res.json();
    if (data.success) {
      window.location.href = '/payment';
    } else {
      alert(data.error);
    }
  } catch (err) {
    alert('Booking failed. Try again.');
  }
  */

  alert(`Booking confirmed!\nSeats: ${seatIds.join(', ')}\nTotal: ₹${total}`);
});

/* ============================================
   INIT
   ============================================ */
renderSeats();
updateSummary();