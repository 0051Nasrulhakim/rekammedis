
function loadAwalMedisRanap() {
    const no_rawat = getNoRawat();

    apiAjax({
        url: BASE_URL + "/rm/ranap/awalMedis",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rawat }),

        // ==========================
        // HANDLE 404 TANPA ERROR CONSOLE
        // ==========================
        statusCode: {
            404: function (xhr) {
                const msg = xhr.responseJSON?.message || "Data tidak ditemukan";
                $("#tidakAdaAwalMedisRanap").text(msg);
                $("#awalMedRanap").hide();
            }
        },

        success: function (response) {
            const fieldMap = {
                userPengisiMedisRanap: "nama",
                jamPengisianMedisRanap: "tanggal",
                keluhanUtamaMedisRanap: "keluhan_utama",
                rpsMedisRanap: "rps",
                rpdMedisRanap: "rpd",
                rpkMedisRanap: "rpk",
                rpoMedisRanap: "rpo",
                alergiMedisRanap: "alergi",
                kuMedisRanap: "keadaan",
                kesadaranMedisRanap: "kesadaran",
                gcsMedisRanap: "gcs",
                tensiMedisRanap: "td",
                nadiMedisRanap: "nadi",
                respirasiMedisRanap: "rr",
                bbMedisRanap: "bb",
                tbMedisRanap: "tb",
                kepalaMedisRanap: "kepala",
                // mataMedisRanap: "mata",
                gigiMedisRanap: "rpd",
                // leherMedisRanap: "rpd",
                thoraxMedisRanap: "thoraks",
                abdomenMedisRanap: "abdomen",
                genitalMedisRanap: "genital",
                ekstimitasMedisRanap: "ekstremitas",
                keteranganFisikMedisRanap: "ket_fisik",
                diagnosisMedisRanap: "diagnosis",
                tatalaksanaMedisRanap: "tata",

                ekgMedisRanap: "rpd",
                radiologiMedisRanap: "rpd",
                labMedisRanap: "rpd",
            };

            // ========== JIKA ADA DATA ==========
            if (response.success === true && response.data) {
                const data = response.data;
                $("#awalMedRanap").show();

                for (const [elementId, field] of Object.entries(fieldMap)) {
                    let value = data[field] || "-";

                    // format tanggal
                    if (elementId === "jamPengisianMedisRanap") {
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
                $("#tidakAdaAwalMedisRanap").text(msg);
                $("#awalMedRanap").hide();
            }
        },

        // ========== ERROR UMUM ==========
        error: function (xhr) {
            const message = xhr.responseJSON?.message || "Data tidak ditemukan";
            $("#tidakAdaAwalMedisRanap").text(message);
            $("#awalMedRanap").hide();
        }
    });
}

function loadAdimeGizi() {
    const no_rawat = getNoRawat();

    apiAjax({
        url: BASE_URL + "/rm/ranap/catatanAdime",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rawat }),

        statusCode: {
            404: function (xhr) {
                const msg = xhr.responseJSON?.message || "Data tidak ditemukan";
                $("#tbodyAdimeGizi").html(
                    `<tr><td colspan="7" class="text-center">${msg}</td></tr>`
                );
            }
        },

        success: function (response) {

            if (response.success === true && response.data.length > 0) {
                const rows = response.data;
                let html = "";

                rows.forEach(item => {
                    const tanggal = item.tanggal
                        ? formatShortWithTimeSeconds(item.tanggal)
                        : "-";

                    html += `
                        <tr>
                            <td style="word-wrap:break-word; white-space:normal;">
                                ${item.nama}<br>${tanggal}
                            </td>

                            <td style="word-wrap:break-word; white-space:normal;">
                                ${item.asesmen || "-"}
                            </td>

                            <td style="word-wrap:break-word; white-space:normal;">
                                ${item.diagnosis || "-"}
                            </td>

                            <td style="word-wrap:break-word; white-space:normal;">
                                ${item.intervensi || "-"}
                            </td>

                            <td style="word-wrap:break-word; white-space:normal; white-space:pre-line;">
                                ${item.monitoring || "-"}
                            </td>

                            <td style="word-wrap:break-word; white-space:normal; white-space:pre-line;">
                                ${item.evaluasi || "-"}
                            </td>

                            <td style="word-wrap:break-word; white-space:normal;">
                                ${item.instruksi || "-"}
                            </td>
                        </tr>
                    `;
                });

                $("#tbodyAdimeGizi").html(html);
            } else {
                $("#tbodyAdimeGizi").html(
                    `<tr><td colspan="7" class="text-center">Data tidak ditemukan</td></tr>`
                );
            }
        },

        error: function (xhr) {
            const msg = xhr.responseJSON?.message || "Terjadi kesalahan";
            $("#tbodyAdimeGizi").html(
                `<tr><td colspan="7" class="text-center">${msg}</td></tr>`
            );
        }
    });
}

function loadPermintaanDiet() {
    const no_rawat = getNoRawat();

    apiAjax({
        url: BASE_URL + "/rm/ranap/permintaanDiet",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ no_rawat }),

        statusCode: {
            404: function (xhr) {
                const msg = xhr.responseJSON?.message || "Data tidak ditemukan";
                $("#tbodyPermintaanDiet").html(
                    `<tr><td colspan="5" class="text-center">${msg}</td></tr>`
                );
            }
        },

        success: function (response) {

            if (response.success === true && response.data.length > 0) {
                const rows = response.data;
                let html = "";

                rows.forEach(item => {
                    const tanggal = item.tanggal
                        ? formatShort(item.tanggal)
                        : "-";

                    html += `
                        <tr>
                            <td>
                                ${tanggal}
                            </td>

                            <td>
                                ${item.kamar_bangsal || "-"}
                            </td>

                            <td>
                                ${item.waktu || "-"}
                            </td>

                            <td>
                                ${item.jam || "-"}
                            </td>

                            <td>
                                ${item.nama_diet || "-"}
                            </td>
                        </tr>
                    `;
                });

                $("#tbodyPermintaanDiet").html(html);
            } else {
                $("#tbodyPermintaanDiet").html(
                    `<tr><td colspan="5" class="text-center">Tidak Ada Data Permintaan Diet</td></tr>`
                );
            }
        },

        error: function (xhr) {
            const msg = xhr.responseJSON?.message || "Terjadi kesalahan";
            $("#tbodyPermintaanDiet").html(
                `<tr><td colspan="5" class="text-center">${msg}</td></tr>`
            );
        }
    });
}

