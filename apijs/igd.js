function loadAwalMedisIgd() {
    const no_rawat = getNoRawat();
    apiAjax({
        url: BASE_URL + "/rm/ralan/awalMedisIgd",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rawat: no_rawat }),
        success: function (response) {
            // console.log("response Awal Medis IGD:", response);

            const fieldMap = {
                userPengsiAwalMedisIgd: "nm_dokter",
                jamPengisianAwalMedisIgd: "tanggal",
                keluhanAwalMedisIgd: "keluhan_utama",
                rpsAwalMedisIgd: "rps",
                rpdAwalMedisIgd: "rpd",
                rpkAwalMedisIgd: "rpk",
                rpoAwalMedisIgd: "rpo",
                riwayatAlergiAwalMedisIgd: "alergi",
                diagnosaAwalMedisIgd: "ket_fisik",
                ketfisikAwalMedisIgd: "diagnosis",
                tatalaksanaAwalMedisIgd: "tata",
                tbAwalMedisIgd: "tb",
                bbAwalMedisIgd: "bb",
                spo2AwalMedisIgd: "spo",
                respirasiAwalMedisIgd: "rr",
                nadiAwalMedisIgd: "nadi",
                tensiAwalMedisIgd: "tensi",
                gcsAwalMedisIgd: "gcs",
                kesadaranAwalMedisIgd: "kesadaran",
                kuAwalMedisIgd: "keadaan",
                kepalaAwalMedisIgd: "kepala",
                mataAwalMedisIgd: "mata",
                gigidanMulutAwalMedisIgd: "gigi",
                leherAwalMedisIgd: "leher",
                thoraxAwalMedisIgd: "thoraks",
                abdomenAwalMedisIgd: "abdomen",
                genitalAnusAwalMedisIgd: "genital",
                ekstimitasAwalMedisIgd: "ekstremitas",
                
            };

            if (response.success === true && response.data) {
                $("#sectionAwasectionAwalMedisIgdlKepIgd").show();
                const data = response.data;

                for (const [elementId, field] of Object.entries(fieldMap)) {

                    let value = data[field] || "-";

                    // khusus tanggal → format Indonesia
                    if (elementId === "jamPengisianAwalMedisIgd") {
                        value = data.tanggal
                            ? formatShortWithTimeSeconds(data.tanggal)
                            : "-";
                    }

                    $("#" + elementId).text(value);
                }
            } 
            // ========== JIKA DATA KOSONG ==========
            else {
                const msg = response.message || "Data tidak ditemukan";
                $("#awalMedisIgd").text(msg);
                $("#sectionAwalMedisIgd").hide();
            }
        },
        // ========== ERROR UMUM ==========
        error: function (xhr) {
            const message = xhr.responseJSON?.message || "Data tidak ditemukan";
            $("#awalMedisIgd").text(message);
            $("#sectionAwalMedisIgd").hide();
        }
    });
}


function loadAwalKepIgd() {
    const no_rawat = getNoRawat();

    apiAjax({
        url: BASE_URL + "/rm/ralan/awalKepIgd",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rawat }),

        // ==========================
        // HANDLE 404 TANPA ERROR CONSOLE
        // ==========================
        statusCode: {
            404: function (xhr) {
                const msg = xhr.responseJSON?.message || "Data tidak ditemukan";
                $("#AwalKepIgd").text(msg);
                $("#sAwalkepIgd").hide();
            }
        },

        success: function (response) {

            const fieldMap = {
                userPengisiKepIgd: "nama",
                jamPengisianKepIgd: "tanggal",
                rpsKepIgd: "keluhan_utama",
                rpdKepIgd: "rps",
                rpoKepIgd: "rpd",

                intrakranialKepIgd: "tekanan",
                pupilKepIgd: "pupil",
                edemaKepIgd: "edema",
                eliminasiKepIgd: "rr",
                integumenKepIgd: "nadi",
                tugorKulitKepIgd: "tensi",
                perdarahan: "gcs",
                intoksikasiKepIgd: "kesadaran",
                neuroSensorikKepIgd: "kesadaran",

                kondisiPsikologisKepIgd: "psikologis",
                gangguanJiwaKepIgd: "jiwa",
                adakahPerilakuKepIgd: "perilaku",
                hubunganPasienDenganKeluargaKepIgd: "hubungan",
                tinggalDenganKepIgd: "tinggal_dengan",

                edukasiDiberikanKpdKepIgd: "edukasi",
                provokes: "provokes",
                quality: "quality",
                menyebar: "menyebar",
                skala: "skala_nyeri",
                durasi: "durasi",
                lokasi: "lokasi",

                rencanaKeperawatanKepIgd: "rencana",
                nyeri: "nyeri",
                hasil: "hasil",
                lapor: "lapor",
                berjalan_a: "berjalan_a",
                berjalan_b: "berjalan_b",
                berjalan_c: "berjalan_c",
            };

            // ========== JIKA ADA DATA ==========
            if (response.success === true && response.data) {
                const data = response.data;
                $("#sAwalkepIgd").show();

                for (const [elementId, field] of Object.entries(fieldMap)) {
                    let value = data[field] || "-";

                    // format tanggal
                    if (elementId === "jamPengisianKepIgd") {
                        value = data.tanggal
                            ? formatShortWithTimeSeconds(data.tanggal)
                            : "-";
                    }

                    $("#" + elementId).text(value);
                }
            }
            // ========== JIKA DATA KOSONG ==========
            else {
                const msg = response.message || "Data tidak ditemukan";
        
                $("#AwalKepIgd").text(msg);
                $("#sAwalkepIgd").hide();
            }
        },

        // ========== ERROR UMUM ==========
        error: function (xhr) {
            const message = xhr.responseJSON?.message || "Data tidak ditemukan";
            $("#AwalKepIgd").text(message);
            $("#sAwalkepIgd").hide();
        }
    });
}

