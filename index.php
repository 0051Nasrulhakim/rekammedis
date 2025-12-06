<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link rel="stylesheet" href="./assets/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>

<body>
    <div class="container-custom">
        <div class="menu">

            <div class="sectionDataDiri">
                <div class="judul" style="margin-top: 5%; margin-bottom: 5%; font-size: 12pt; font-weight: 800;">IDENTITAS</div>

                <div class="namaPasien" style="display: flex;">
                    <div class="text" style="width: 35%;">NORM</div>
                    <div class="semiColon" style="width: 7%; text-align: center;">:</div>
                    <div class="text" id="noRm" style="width: 58%; white-space: normal;"></div>
                </div>

                <div class="nama" style="display: flex;">
                    <div class="text" style="width: 35%;">NAMA PASIEN</div>
                    <div class="semiColon" style="width: 7%; text-align: center;">:</div>
                    <div class="text" id="namaPasien" style="width: 58%; white-space: normal;"></div>
                </div>

                <div class="alamat" style="display: flex;">
                    <div class="text" style="width: 35%;">ALAMAT</div>
                    <div class="semiColon" style="width: 7%; text-align: center;">:</div>
                    <div class="text" id="alamatPasien" style="width: 58%; white-space: normal;"></div>
                </div>

                <div class="pembayaran" style="display: flex;">
                    <div class="text" style="width: 35%;">PEMBAYARAN</div>
                    <div class="semiColon" style="width: 7%; text-align: center;">:</div>
                    <div class="text" id="pembayaran" style="width: 58%; white-space: normal;"></div>
                </div>

                <div class="statusRawat" style="display: flex;">
                    <div class="text" style="width: 35%;">STATUS RAWAT</div>
                    <div class="semiColon" style="width: 7%; text-align: center;">:</div>
                    <div class="text" id="statusRawat" style="width: 58%; white-space: normal;"></div>
                </div>
            </div>


            <?php include("./utils/checkbox.php") ?>

            <div class="judul">TANGGAL KUNJUNGAN</div>

        </div>
        <div class="wrapper">

            <div class="list">
                <div class="riweayatSoap">
                    <div class="judul">Riwayat SOAP Semua Kunjungan</div>
                    <div class="wrapper" id="riwayatSoap" style="margin-bottom: 1%;">
                        <select class="form-select form-control form-select-sm"
                            id="limitSoap"
                            style="margin-bottom: 0.5%; margin-top: 0.5%;">
                            <option value="5">5 Terakhir</option>
                            <option value="10">10 Terakhir</option>
                            <option value="15">15 Terakhir</option>
                            <option value="20">20 Terakhir</option>
                            <!-- <option value="00">Semua</option> -->
                        </select>

                        <select class="form-select form-control form-select-sm"
                            id="tipeSoap"
                            style="margin-bottom: 0.5%; margin-top: 0.5%;">
                            <option value="dokter">Dokter</option>
                            <option value="perawat">Perawat</option>
                            <!-- <option value="all">Dokter dan Perawat</option> -->
                        </select>

                        <table class="table table-striped table-hover" style="width:100%; border-collapse:collapse; font-size:9pt; border:1px solid #ccc;">
                            <thead style="background:#f5f5f5;">
                                <tr>
                                    <th style="border:1px solid #ccc; padding:6px; width:40px;">No</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:120px;">Tanggal</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:150px;">Petugas</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:250px;">Subjek</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:250px;">Objek</th>
                                    <!-- <th style="border:1px solid #ccc; padding:6px; width:200px;">TTV</th> -->
                                    <th style="border:1px solid #ccc; padding:6px; width:200px;">Asesmen</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:200px;">Plan</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:200px;">Instruksi</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:200px;">Evaluasi</th>
                                </tr>
                            </thead>

                            <tbody id="tbodySoap"></tbody>
                        </table>

                    </div>
                </div>

                <div class="igd" id="rmIGD">

                    <div class="triaseIgd" id="sectionIgd">
                        <div class="judul">Triase IGD</div>
                        <div class="wrapper" id="wrapperIgd">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus maiores quos expedita, consectetur esse tenetur et praesentium neque ut officia suscipit quis minima? Laborum praesentium impedit aliquid recusandae at!
                        </div>
                    </div>

                    <div class="awalMedisIgd">
                        <div class="judul">Awal Medis IGD</div>
                        <div class="sectionAwalMedisIgd" id="sectionAwalMedisIgd">
                            <?php include("./igd/awalMedisIgd.php") ?>
                        </div>
                        <div class="tidakadaData" id="awalMedisIgd" style="margin-bottom: 1%; margin-left: 1%;"></div>
                    </div>

                    <div class="awalKepIgd">
                        <div class="judul">Awal Keperawatan IGD</div>
                        <div class="sAwalkepIgd" id="sAwalkepIgd">
                            <?php include("./igd/awalKeperawatanIgd.php") ?>
                        </div>
                        <div class="tidakadaData" id="AwalKepIgd" style="margin-bottom: 1%; margin-left: 1%;"></div>
                    </div>

                </div>

                <div class="rmRalan" id="rmRalan">

                    <div class="awalMedisUmum">
                        <div class="judul">Awal Medis Ralan</div>
                        <div class="section" id="sectionAwalMedisRalan">
                            <?php include("./rawatjalan/awalMedisRalan.php") ?>
                        </div>
                        <div class="tidakadaData" id="awalMedisRalan" style="margin-bottom: 1%; margin-left: 1%;"></div>
                    </div>

                    <div class="keperawatanRalanUmum">
                        <div class="judul">Awal Keperawatan Ralan</div>

                        <div class="section" id="sectionAwalKepRalan">
                            <?php include("./rawatjalan/awalKeperawatanRalan.php") ?>
                        </div>

                        <div class="tidakadaData" id="awalkepRalan" style="margin-bottom: 1%; margin-left: 1%;"></div>
                    </div>
                </div>

                <div class="rmKandunganRalan" id="rmRalanKandungan">
                    <div class="keperawatanRalanUmum">
                        <div class="judul">Awal Medis Kandungan Ralan</div>
                    </div>
                    <div class="keperawatanRalanUmum">
                        <div class="judul">Awal kebidanan Ralan</div>
                    </div>
                </div>

                <div class="resumeRajal" id="resumeRalan">
                    <div class="judul">Resume Rawat Jalan</div>

                    <div class="section" id="sectionResumeRalan">
                        <?php include("./rawatjalan/resumeRajal.php") ?>
                    </div>

                    <div class="tidakadaData" id="resumeRalan" style="margin-bottom: 1%; margin-left: 1%;"></div>
                </div>

                <div class="ranap" id="rmRanap">

                    <div class="resumeRajal">
                        <div class="judul">Awal Medis Ranap</div>

                        <div class="section" id="awalMedRanap">
                            <?php include("./rawatInap/awalMedisRanap.php") ?>
                        </div>

                        <div class="tidakadaData" id="tidakAdaAwalMedisRanap" style="margin-bottom: 1%; margin-left: 1%;"></div>
                    </div>

                    <div class="permintaanDiet">
                        <div class="judul">Pemrintaan Diet Pasien</div>

                        <div class="section" id="sectionPermintaanDiet">
                            <?php include("./rawatInap/permintaanDiet.php") ?>
                        </div>

                        <div class="tidakadaData" id="tidakAdaDiet" style="margin-bottom: 1%; margin-left: 1%;"></div>
                    </div>

                    <div class="catatanAdime">
                        <div class="judul">Catatan ADIME Gizi</div>

                        <div class="section" id="awalMedRanap">
                            <?php include("./rawatInap/catatanAdime.php") ?>
                        </div>

                        <div class="tidakadaData" id="tidakAdaAdime" style="margin-bottom: 1%; margin-left: 1%;"></div>
                    </div>

                </div>

            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        <script src="./apijs/crawler.js"></script>
        <script src="./apijs/dateformat.js"></script>
        <script src="./apijs/formater.js"></script>
        <script src="./apijs/api.js"></script>
        <script src="./apijs/igd.js"></script>
        <script src="./apijs/ralan.js"></script>
        <script src="./apijs/ranap.js"></script>

        <script>
            document.getElementById("chk1").addEventListener("change", function() {
                actions.chk1(this.checked);
            });
            document.getElementById("chk2").addEventListener("change", function() {
                actions.chk2(this.checked);
            });
            document.getElementById("chk3").addEventListener("change", function() {
                actions.chk3(this.checked);
            });

            const actions = {
                chk1: (checked) => {
                    const el = document.getElementById("chk1");
                    if (el) el.checked = checked;

                    const rmIgdDiv = document.getElementById("rmIGD");
                    if (rmIgdDiv) {
                        rmIgdDiv.style.display = checked ? "block" : "none";
                    }

                    const rmRalan = document.getElementById("rmRalan"); // <-- id yang benar
                    if (rmRalan) {
                        rmRalan.style.display = checked ? "block" : "none";
                    }

                    const resumeRalan = document.getElementById("resumeRalan"); // <-- id yang benar
                    if (resumeRalan) {
                        resumeRalan.style.display = checked ? "block" : "none";
                    }
                },


                chk2: (checked) => {
                    const el = document.getElementById("chk2");
                    if (el) el.checked = checked;

                    const ranapDiv = document.getElementById("rmRanap");
                    if (ranapDiv) {
                        ranapDiv.style.display = checked ? "block" : "none";
                    }
                },

                chk3: (checked) => {

                    const el = document.getElementById("chk3");
                    if (el) el.checked = checked;

                    const ralanKandunganDiv = document.getElementById("rmRalanKandungan");
                    if (ralanKandunganDiv) {
                        ralanKandunganDiv.style.display = checked ? "block" : "none";
                    }
                },

                chk4: (checked) => {
                    const el = document.getElementById("chk4");
                    if (!el) return;
                    el.checked = checked;
                },

                chk5: (checked) => {
                    const el = document.getElementById("chk5");
                    if (!el) return;
                    el.checked = checked;
                },

                chk6: (checked) => {
                    const el = document.getElementById("chk6");
                    if (!el) return;
                    el.checked = checked;
                }
            };
        </script>
        <script>
            $(document).ready(function() {
                ensureLogin(function() {
                    loadAwalMedisIgd();
                    loadAwalKepIgd();
                    loadAwalMedisRalan();
                    loadKepRalan();
                    loadResumeRalan();
                    loadAwalMedisRanap();
                    loadAdimeGizi();
                    loadAdimeGizi();
                    loadPermintaanDiet();

                    loadSoap($("#limitSoap").val(), $("#tipeSoap").val());
                });

                // 🔥 Event onchange untuk limit
                $("#limitSoap").on("change", function() {
                    const limit = $(this).val();
                    const type = $("#tipeSoap").val();
                    loadSoap(limit, type);
                });

                // 🔥 Event onchange untuk tipe SOAP
                $("#tipeSoap").on("change", function() {
                    const type = $(this).val();
                    const limit = $("#limitSoap").val();
                    loadSoap(limit, type);
                });

                statusRawat(function(status_rawat) {
                    let warna = "#50589C"; // default Ralan

                    if (status_rawat.toLowerCase() === "ranap") {
                        warna = "#A07CFF";

                        actions.chk1(false);
                        actions.chk2(true);
                        actions.chk3(false);
                    } else {

                        actions.chk1(true);
                        actions.chk2(false);
                        actions.chk3(false);
                    }

                    $("#statusRawat").html(`
                        <span style="
                            background:${warna};
                            color:white;
                            padding:3px 10px;
                            border-radius:6px;
                            font-weight:bold;
                            font-size:12px;
                            display:inline-block;
                        ">
                            ${status_rawat}
                        </span>
                    `);
                });

                isPasien(function(result) {
                    console.log(result)
                    $("#namaPasien").text(result.nama);
                    $("#alamatPasien").text(result.alamat_pasien);
                    $("#noRm").text(result.no_rm);
                });

                jenisBayar(function(result) {
                    console.log(result)
                    $("#pembayaran").text(result.jenis_bayar);
                });


            });
        </script>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>

</html>