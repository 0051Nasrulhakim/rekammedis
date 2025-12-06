
function loadAwalMedisRalan() {
    const no_rawat = getNoRawat();

    apiAjax({
        url: BASE_URL + "/rm/ralan/awalMedis",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rawat }),

        // ==========================
        // HANDLE 404 TANPA ERROR CONSOLE
        // ==========================
        statusCode: {
            404: function (xhr) {
                const msg = xhr.responseJSON?.message || "Data tidak ditemukan";
                $("#awalMedisRalan").text(msg);
                $("#sectionAwalMedisRalan").hide();
            }
        },

        success: function (response) {
            // console.log("response Awal Kep IGD:", response);

            const fieldMap = {
                userPengisiMedisralan: "nm_dokter",
                jamPengisianMedisralan: "tanggal",
                keluhanUtamaMedisralan: "keluhan_utama",
                rpsMedisralan: "rps",
                rpdMedisralan: "rpd",
                rpkMedisralan: "rpk",
                rpoMedisralan: "rpo",
                alergiMedisralan: "alergi",
                kuMedisralan: "keadaan",
                kesadaranMedisralan: "kesadaran",
                gcsMedisralan: "gcs",
                tensiMedisralan: "td",
                nadiMedisralan: "nadi",
                respirasiMedisralan: "rr",
                bbMedisralan: "bb",
                tbMedisralan: "tb",
                kepalaMedisralan: "kepala",
                // mataMedisralan: "mata",
                gigiMedisralan: "rpd",
                // leherMedisralan: "rpd",
                thoraxMedisralan: "thoraks",
                abdomenMedisralan: "abdomen",
                genitalMedisralan: "genital",
                ekstimitasMedisralan: "ekstremitas",
                keteranganFisikMedisralan: "ket_fisik",
                diagnosisMedisralan: "diagnosis",
                tatalaksanaMedisralan: "tata",

                ekgMedisralan: "rpd",
                radiologiMedisralan: "rpd",
                labMedisralan: "rpd",
            };

            // ========== JIKA ADA DATA ==========
            if (response.success === true && response.data) {
                const data = response.data;
                $("#sectionAwalKepIgd").show();

                for (const [elementId, field] of Object.entries(fieldMap)) {
                    let value = data[field] || "-";

                    // format tanggal
                    if (elementId === "jamPengisianMedisralan") {
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
                $("#awalMedisRalan").text(msg);
                $("#sectionAwalMedisRalan").hide();
            }
        },

        // ========== ERROR UMUM ==========
        error: function (xhr) {
            const message = xhr.responseJSON?.message || "Data tidak ditemukan";
            $("#awalMedisRalan").text(message);
            $("#sectionAwalMedisRalan").hide();
        }
    });
}

function loadKepRalan() {
    const no_rawat = getNoRawat();

    apiAjax({
        url: BASE_URL + "/rm/ralan/awalKepRalan",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rawat }),

        // ==========================
        // HANDLE 404 TANPA ERROR CONSOLE
        // ==========================
        statusCode: {
            404: function (xhr) {
                const msg = xhr.responseJSON?.message || "Data tidak ditemukan";
                $("#awalkepRalan").text(msg);
                $("#sectionAwalKepRalan").hide();
            }
        },

        success: function (response) {

            const fieldMap = {
                userPengisiAwalKepralan: "nama",
                jamPengisianAwalKepralan: "tanggal",
                tdAwalKepRalan: "td",
                nadiAwalKepRalan: "nadi",
                rrAwalKepRalan: "rr",
                suhuAwalKepRalan: "suhu",
                gcsAwalKepRalan: "gcs",

                statusNutrisiAwalKepralan: "rps",
                keluhanUtamaAwalKepralan: "keluhan_utama",
                rpdAwalKepralan: "rpd",
                alergiAwalKepralan: "alergi",
                rpkAwalKepralan: "rpk",
                rpoAwalKepralan: "rpo",
                alatBantuAwalKepralan: "alat_bantu",
                prothesaKepralan: "prothesa",
                // cacatFisikAwalKepralan: "",
                adlKepralan: "adl",
                statusPsikologiAwalKepralan: "status_psiko",
                // statusSosialAwalKepralan: "bb",
                hubunganPasienAwalKepralan: "hub_keluarga",
                tinggalAwalKepralan: "tinggal_dengan",
                ekonomiAwalKepRalan: "ekonomi",
                nilai1AwalKepralan: "nilai1",
                nilai2AwalKepralan: "nilai2",
                totalAwalKepRalan: "total_hasil",

                // leherMedisralan: "rpd",
                berjalan_a_AwalKepralan: "berjalan_a",
                berjalan_bAwalKepralan: "berjalan_b",
                berjalan_c_AwalKepralan: "berjalan_c",
                hasilAwalKepralan: "hasil",
                laporAwalKepralan: "lapor",

                nyeriAwalKepralan: "nyeri",
                provokesAwalKepralan: "provokes",
                qualityAwalKepralan: "quality",
                lokasiAwalKepralan: "lokasi",
                menyebarAwalKepralan: "menyebar",
                skalaAwalKepralan: "skala_nyeri",
                durasiAwalKepralan: "durasi",

                nyeri_hilang: "nyeri_hilang",
                pada_dokter: "pada_dokter",
                masalahKeperawatanAwalKepralan: "pada_dokter",
                rencanaKeperawatanAwalKepralan: "rencana",
                // labMedisralan: "rpd",
            };

            // ========== JIKA ADA DATA ==========
            if (response.success === true && response.data) {
                const data = response.data;
                $("#sectionAwalKepIgd").show();

                for (const [elementId, field] of Object.entries(fieldMap)) {
                    let value = data[field] || "-";

                    // format tanggal
                    if (elementId === "jamPengisianAwalKepralan") {
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
                $("#awalkepRalan").text(msg);
                $("#sectionAwalKepRalan").hide();
            }
        },

        // ========== ERROR UMUM ==========
        error: function (xhr) {
            const message = xhr.responseJSON?.message || "Data tidak ditemukan";
            $("#awalkepRalan").text(message);
            $("#sectionAwalKepRalan").hide();
        }
    });
}

function loadResumeRalan() {
    const no_rawat = getNoRawat();

    apiAjax({
        url: BASE_URL + "/rm/ralan/resume",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rawat }),

        // ==========================
        // HANDLE 404 TANPA ERROR CONSOLE
        // ==========================
        statusCode: {
            404: function (xhr) {
                const msg = xhr.responseJSON?.message || "Data tidak ditemukan";
                $("#resumeRalan").text(msg);
                $("#sectionResumeRalan").hide();
            }
        },

        success: function (response) {
            // console.log("response Awal Kep ralan:", response);

            const fieldMap = {
                namaDokterResumeRajal: "nm_dokter",
                tglMasukResumeRajal: "tgl_registrasi",
                tanggalKeluarResumeRajal: "tgl_registrasi",
                kondisiPulangResumeRajal: "kondisi_pulang",
                diagnosaResumeRajal: "diagnosa_utama",
                kdDiagnosaUtama: "kd_diagnosa_utama",
                diagnosaSkunderResumeRajal: "diagnosa_sekunder",
                diagnosaSkunderResumeRajal2: "diagnosa_sekunder2",
                diagnosaSkunderResumeRajal3: "diagnosa_sekunder3",
                icdxResumeRajalSkunder: "kd_diagnosa_sekunder",
                icdxResumeRajalSkunder2: "kd_diagnosa_sekunder2",
                icdxResumeRajalSkunder3: "kd_diagnosa_sekunder3",
                prosedurUtama: "prosedur_utama",
                kdProsedurUtama: "kd_prosedur_utama",

                prosedurSkunder: "prosedur_sekunder",
                kdProsedurSkunder: "kd_prosedur_sekunder",
                prosedurSkunder2: "prosedur_sekunder2",
                kdProsedurSkunder2: "kd_prosedur_sekunder2",

                instruksiResumeRajal: "td",
                jalanperawatanResumeRajal: "jalannya_penyakit",
                keluhanUtamaResumeRajal: "keluhan_utama",
                obatObatanResumeRajal: "obat_pulang",

            };

            // ========== JIKA ADA DATA ==========
            if (response.success === true && response.data) {
                const data = response.data;
                $("#sectionResumeRalan").show();

                for (const [elementId, field] of Object.entries(fieldMap)) {
                    let value = data[field] || "-";

                    // format tanggal
                    if (elementId == "tglMasukResumeRajal" || elementId == "tanggalKeluarResumeRajal") {
                        value = data.tgl_registrasi
                            ? formatShort(data.tgl_registrasi)
                            : "-";
                    }
                    // ====== KHUSUS KELUHAN UTAMA: Hapus spasi setelah newline ======
                    if (elementId === "keluhanUtamaResumeRajal") {
                        value = value
                            .replace(/\\n/g, "\n")
                            .replace(/\n\s+/g, "\n")
                            .replace(/^\s+/gm, "")
                            .trim()
                            .replace(/^[a-z]/gm, c => c.toUpperCase()); // kapitalisasi tiap baris
                    }


                    $("#" + elementId).text(value);
                }
            }

            // ========== JIKA DATA KOSONG ==========
            else {
                const msg = response.message || "Data tidak ditemukan";
                $("#resumeRalan").text(msg);
                $("#sectionResumeRalan").hide();
            }
        },

        // ========== ERROR UMUM ==========
        error: function (xhr) {
            const message = xhr.responseJSON?.message || "Data tidak ditemukan";
            $("#awalkepRalan").text(message);
            $("#sectionResumeRalan").hide();
        }
    });
}

function loadSoap(limit, type) {
    const no_rm = getNoRm();
    let thisUrl;

    if (type == "dokter") {
        thisUrl = BASE_URL + "/rm/ralan/riwayatSoapDokter";
    } else {
        thisUrl = BASE_URL + "/rm/ralan/riwayatSoap";
    }

    // ⏳ Tampilkan loading sederhana
    $("#tbodySoap").html(`
        <tr>
            <td colspan="10" style="text-align:center; padding:12px;">
                Memuat data SOAP...
            </td>
        </tr>
    `);

    apiAjax({
        url: thisUrl,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rm, limit }),

        success: function (response) {
            console.log(response)
            const data = response.data || [];
            let html = "";

            if (data.length === 0) {
                html = `
                    <tr>
                        <td colspan="10" style="text-align:center; padding:12px;">
                            Tidak ada data SOAP
                        </td>
                    </tr>
                `;
            } else {
                data.forEach((item, index) => {
                    html += `
                        <tr>
                            <td style="border:1px solid #ccc; padding:6px;">${index + 1}</td>
                            <td style="border:1px solid #ccc; padding:6px;">
                                ${formatShort(item.tgl_perawatan)} ${item.jam_rawat}<br>
                                <span style="
                                    background:${item.status == 'Ralan' ? '#50589C' : '#A07CFF'};
                                    color:white;
                                    padding:1px 5px;
                                    border-radius:6px;
                                    font-size:11px;
                                    font-weight:bold;
                                    display:inline-block;
                                    margin-top:3px;
                                ">
                                    ${item.status}
                                </span>
                            </td>
                            <td style="border:1px solid #ccc; padding:6px;">${item.nama || "-"}</td>
                            <td style="border:1px solid #ccc; padding:6px; white-space:normal;">${item.keluhan || "-"}</td>
                            <td style="border:1px solid #ccc; padding:6px; white-space:normal;">${item.pemeriksaan || "-"}</td>
                            <td style="border:1px solid #ccc; padding:6px;">${item.penilaian || "-"}</td>
                            <td style="border:1px solid #ccc; padding:6px; white-space:normal;">${item.rtl || "-"}</td>
                            <td style="border:1px solid #ccc; padding:6px; white-space:normal;">${item.instruksi || "-"}</td>
                            <td style="border:1px solid #ccc; padding:6px; white-space:normal;">${item.evaluasi || "-"}</td>
                        </tr>

                        <tr>
                            <td colspan="10" style="padding:0; border:none;">
                                ${formatTTVTable(item)}
                            </td>
                        </tr>
                    `;
                });
            }

            $("#tbodySoap").html(html);
        },

        error: function (xhr) {
            const msg = xhr.responseJSON?.message || "Terjadi kesalahan";

            $("#tbodySoap").html(`
                <tr>
                    <td colspan="10" style="text-align:center; padding:12px; color:red;">
                        Gagal memuat data SOAP: ${msg}
                    </td>
                </tr>
            `);
        }
    });
}

