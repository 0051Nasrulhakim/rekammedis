// ==========================================
// dateFormat.js → Format tanggal ke Indonesia
// ==========================================

// Ubah tanggal ISO ke format Indonesia:
// example input: "2024-12-10T14:01:01.000Z"
// output: "10 Desember 2024 21:01"
function formatTanggalIndonesia(dateString, withTime = true) {
    if (!dateString) return "";

    const date = new Date(dateString);

    // Nama bulan
    const bulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const tgl = date.getDate();
    const bln = bulan[date.getMonth()];
    const thn = date.getFullYear();

    // Waktu Indonesia otomatis (pakai local time browser)
    const jam = date.getHours().toString().padStart(2, "0");
    const menit = date.getMinutes().toString().padStart(2, "0");

    if (withTime) {
        return `${tgl} ${bln} ${thn} ${jam}:${menit}`;
    } else {
        return `${tgl} ${bln} ${thn}`;
    }
}

// Format simple: 2024-12-10 → 10/12/2024
function formatShort(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);

    const tgl = String(date.getDate()).padStart(2, "0");
    const bln = String(date.getMonth() + 1).padStart(2, "0");
    const thn = date.getFullYear();

    return `${tgl}/${bln}/${thn}`;
}

function formatShortWithTimeSeconds(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function formatShortWithTime(dateString) {
    if (!dateString) return "";

    const date = new Date(dateString);

    // Tanggal
    const tgl = String(date.getDate()).padStart(2, "0");
    const bln = String(date.getMonth() + 1).padStart(2, "0");
    const thn = date.getFullYear();

    // Waktu (lokal)
    const jam = String(date.getHours()).padStart(2, "0");
    const menit = String(date.getMinutes()).padStart(2, "0");

    return `${tgl}/${bln}/${thn} ${jam}:${menit}`;
}



// Ekspor ke global
window.formatTanggalIndonesia = formatTanggalIndonesia;
window.formatShort = formatShort;
window.formatShortWithTime = formatShortWithTime;
