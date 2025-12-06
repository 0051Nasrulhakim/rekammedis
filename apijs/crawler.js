// ==========================================
// crawler.js → ambil no_rawat & no_rm dari URL
// ==========================================

// Ambil parameter dari URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);

    return {
        no_rawat: params.get("no_rawat") || "",
        no_rm: params.get("no_rm") || ""
    };
}

function statusRawat(callback) {
    let no_rawat = getNoRawat();

    apiAjax({
        url: BASE_URL + "/pasien/statusRegistrasi",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rawat }),

        success: function (response) {
            let status_rawat = "Ralan";
            if (response.success && response.data) {
                status_rawat = response.data.status_lanjut;
            }

            callback(status_rawat); // <-- kirim hasil AJAX
        },

        error: function () {
            callback("Ralan");
        }
    });
}

function isPasien(callback) {
    let no_rm = getNoRm();

    apiAjax({
        url: BASE_URL + "/pasien/identitas",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rm }),

        success: function (response) {
            let status_rawat = "Ralan";
            let nama = "-";
            let alamat_pasien = "-";

            if (response.success && response.data) {
                no_rm = response.data.no_rkm_medis;
                status_rawat = response.data.status_lanjut || "Ralan";
                nama = response.data.nm_pasien || "-";
                alamat_pasien = response.data.alamat_pasien || response.data.alamat || "-";
            }

            // callback mengembalikan object lengkap
            callback({
                no_rm,
                status_rawat,
                nama,
                alamat_pasien
            });
        },

        error: function () {
            callback({
                status_rawat: "Ralan",
                nama: "-",
                alamat_pasien: "-"
            });
        }
    });
}

function jenisBayar(callback) {
    let no_rawat = getNoRawat();

    apiAjax({
        url: BASE_URL + "/pasien/jenisBayar",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rawat }),

        success: function (response) {
            let jenis_bayar = "";
            

            if (response.success && response.data) {
                jenis_bayar = response.data.jenis_peserta;
            }

            // callback mengembalikan object lengkap
            callback({
                jenis_bayar,
            });
        },

        error: function () {
            callback({
                jenis_bayar: ""
            });
        }
    });
}


// Simpan ke localStorage
function saveCrawlerData() {
    let { no_rawat, no_rm } = getQueryParams();

    if (no_rawat) localStorage.setItem("no_rawat", no_rawat);
    if (no_rm) localStorage.setItem("no_rm", no_rm);

    // console.log("Crawler disimpan:", { no_rawat, no_rm });
}

// Getter
function getNoRawat() {
    return localStorage.getItem("no_rawat") || "";
}
function getNoRm() {
    return localStorage.getItem("no_rm") || "";
}

// Jalankan otomatis saat halaman load
document.addEventListener("DOMContentLoaded", saveCrawlerData);
