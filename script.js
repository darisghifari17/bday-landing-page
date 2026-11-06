// ==========================================================================
// INTERACTIVE WISHS / QUOTES GENERATOR
// ==========================================================================

const wishes = [
  "\"Tuliskan kode terbaikmu hari ini, nikmati prosesnya.\"",
  "\"Setiap bug adalah cara sistem mengajarkan kesabaran.\"",
  "\"Fokus pada hal yang bisa dikendalikan, lepaskan yang di luar kendali.\"",
  "\"Konsistensi kecil setiap hari mengalahkan lonjakan motivasi sesaat.\"",
  "\"Teruslah belajar, tetap rendah hati, dan buat sesuatu yang bermakna.\""
];

const wishBtn = document.getElementById('wish-btn');
const wishDisplay = document.getElementById('wish-display');

let currentIndex = 0;

if (wishBtn && wishDisplay) {
  wishBtn.addEventListener('click', () => {
    // Efek transisi halus saat teks berganti
    wishDisplay.style.opacity = '0';
    
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % wishes.length;
      wishDisplay.textContent = wishes[currentIndex];
      wishDisplay.style.opacity = '1';
    }, 200);
  });
}