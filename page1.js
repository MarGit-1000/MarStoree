document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const detail = button.nextElementSibling; // Elemen detail terkait tombol

            // Pastikan elemen detail ditemukan
            if (!detail || !detail.classList.contains('detail')) {
                console.error('Element detail tidak ditemukan!');
                return;
            }

            // Toggle detail visibility
            if (detail.classList.contains('open')) {
                closeDetail(detail);
                button.classList.remove('active'); // Hapus kelas active saat tutup
            } else {
                openDetail(detail);
                button.classList.add('active'); // Tambah kelas active saat buka
            }
        });
    });

    function openDetail(detail) {
        detail.style.maxHeight = detail.scrollHeight + 'px'; // Atur tinggi sesuai konten
        detail.classList.add('open'); // Tambahkan kelas open setelah tinggi diatur
    }

    function closeDetail(detail) {
        detail.style.maxHeight = '0'; // Tutup hingga nol
        requestAnimationFrame(() => {
            detail.classList.remove('open');
        });
    }
});

document.getElementById('scrollBottomBtn').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight, // Scroll ke bagian bawah
        behavior: 'smooth' // Animasi scrolling yang halus
    });
});
document.getElementById('readyup').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight, // Scroll ke bagian bawah
        behavior: 'smooth' // Animasi scrolling yang halus
    });
});
function createSnowflake() {
    const header = document.getElementById('header');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '💧'; // Simbol salju

    // Posisi awal salju (acak di lebar header)
    snowflake.style.left = Math.random() * window.innerWidth + 'px';

    // Ukuran dan durasi animasi acak
    snowflake.style.fontSize = Math.random() * 5 + 10 + 'px'; // Ukuran antara 10px - 25px
    snowflake.style.animationDuration = Math.random() * 15 + 20 + 's'; // Durasi 1s - 10s
    snowflake.style.opacity = Math.random() * 0.5 + 0.5; // Transparansi 50% - 100%

    // Hapus salju setelah animasi selesai
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });

    header.appendChild(snowflake);
}

// Tambahkan butiran salju secara berkala
setInterval(createSnowflake, 200);
