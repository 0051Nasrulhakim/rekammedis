function formatTTV(item) {
    const tinggi = item.tinggi ? item.tinggi + " cm" : "-";
    const berat = item.berat ? item.berat + " kg" : "-";

    return `
        Suhu: ${item.suhu_tubuh || "-"} °C<br>
        Tensi: ${item.tensi || "-"}<br>
        Nadi: ${item.nadi || "-"} x/menit<br>
        RR: ${item.respirasi || "-"} x/menit<br>
        SPO2: ${item.spo2 || "-"} %<br>
        GCS: ${item.gcs || "-"}<br>
        Tinggi: ${tinggi}<br>
        Berat: ${berat}
    `;
}

function formatTTVTable(item) {

    function getGCSColor(gcs) {
        const val = parseInt(gcs);
        if (isNaN(val)) return "#FFF9D9"; // default pastel
        if (val >= 13) return "#D3F9D3";  // HIJAU pastel (Normal)
        if (val >= 9)  return "#FFF4B5";  // KUNING pastel (Warning)
        return "#FFC7C7";                 // MERAH pastel (Danger)
    }

    return `
        <table style="width:100%; font-size:12px; border-collapse:collapse; margin-bottom:4px; table-layout:fixed;">
            <tr>
                <td style="border:1px solid #E9F2FF; padding:6px; width:12%; background:#FFF9D9;">
                    Suhu : <b>${item.suhu_tubuh || "-"}°C</b>
                </td>

                <td style="border:1px solid #E9F2FF; padding:6px; width:12%; background:#FFF9D9;">
                    Tensi : <b>${item.tensi || "-"}</b>
                </td>

                <td style="border:1px solid #E9F2FF; padding:6px; width:12%; background:#FFF9D9;">
                    Nadi : <b>${item.nadi || "-"} x/menit</b>
                </td>

                <td style="border:1px solid #E9F2FF; padding:6px; width:12%; background:#FFF9D9;">
                    Respirasi : <b>${item.respirasi || "-"} x/menit</b>
                </td>

                <td style="border:1px solid #E9F2FF; padding:6px; width:12%; background:#FFF9D9;">
                    SpO2 : <b>${item.spo2 || "-"}%</b>
                </td>

                <td style="
                    border:1px solid #E9F2FF;
                    padding:6px; 
                    width:12%; 
                    background:${getGCSColor(item.gcs)};
                ">
                    GCS : <b>${item.gcs || "-"}</b>
                </td>

                <td style="border:1px solid #E9F2FF; padding:6px; width:12%; background:#FFF9D9;">
                    TB : <b>${item.tinggi || "-"} cm</b>
                </td>

                <td style="border:1px solid #E9F2FF; padding:6px; width:12%; background:#FFF9D9;">
                    BB : <b>${item.berat || "-"} kg</b>
                </td>
            </tr>
        </table>
    `;
}

