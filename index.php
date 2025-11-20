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
                <div class="judul">IDENTITAS</div>
                <div class="namaPasien">
                    <div class="text"> Nama Pasien</div>
                </div>
                <div class="alamat">
                    <div class="text"> Alamat</div>
                </div>
                <div class="pembayaran">
                    <div class="text"> jns Pembayaran</div>
                </div>
            </div>
            <div class="judul">TANGGAL KUNJUNGAN</div>

        </div>
        <div class="wrapper">

            <div class="list">
                <div class="riweayatSoap">
                    <div class="judul">Riwayat SOAP Semua Kunjungan</div>
                    <div class="wrapper" id="riwayatSoap" style="margin-bottom: 1%;">
                        <select class="form-select form-control form-select-sm" name="" id="" style="margin-bottom: 0.5%; margin-top: 0.5%;">
                            <option value="">10 Terakhir</option>
                            <option value="">20 Terakhir</option>
                            <option value="">Semua</option>
                        </select>
                        <select class="form-select form-control form-select-sm" name="" id="" style="margin-bottom: 0.5%; margin-top: 0.5%;">
                            <option value="">Dokter</option>
                            <option value="">Perawat</option>
                            <option value="">Dokter Dan Perawat</option>
                        </select>
                        <table class="table table-striped table-hover" style="width:100%; border-collapse:collapse; font-size:9pt; border:1px solid #ccc;">
                            <thead style="background:#f5f5f5;">
                                <tr>
                                    <th style="border:1px solid #ccc; padding:6px; width:40px;">No</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:160px;">Tanggal</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:150px;">Petugas</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:250px;">Subjek</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:250px;">Objek</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:200px;">TTV</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:200px;">Asesmen</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:200px;">Plan</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:200px;">Instruksi</th>
                                    <th style="border:1px solid #ccc; padding:6px; width:200px;">Evaluasi</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td style="border:1px solid #ccc; padding:6px;">1</td>
                                    <td style="border:1px solid #ccc; padding:6px;">2025-11-14 00:02:45</td>
                                    <td style="border:1px solid #ccc; padding:6px;">Perawat A</td>

                                    <!-- SUBJEK -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        ibu pasien mengatakan demam naik turun
                                    </td>

                                    <!-- OBJEK -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        akral teraba hangat
                                    </td>

                                    <!-- TTV RINGKAS -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        Suhu: 36.5°C<br>
                                        TD: -<br>
                                        Nadi: 123<br>
                                        RR: 24<br>
                                        BB: 48<br>
                                        SpO₂: 97%<br>
                                        GCS: 15<br>
                                        Kesadaran: Compos Mentis
                                    </td>

                                    <!-- ASES -->
                                    <td style="border:1px solid #ccc; padding:6px;">
                                        hipertermi
                                    </td>

                                    <!-- PLAN -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        observasi KU & TTV<br>
                                        kolaborasi DPJP pemberian analgesik
                                    </td>

                                    <!-- INSTRUKSI -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        kompres air hangat
                                    </td>

                                    <!-- EVALUASI -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        demam menurun
                                    </td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid #ccc; padding:6px;">1</td>
                                    <td style="border:1px solid #ccc; padding:6px;">2025-11-14 00:02:45</td>
                                    <td style="border:1px solid #ccc; padding:6px;">Perawat A</td>

                                    <!-- SUBJEK -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        ibu pasien mengatakan demam naik turun
                                    </td>

                                    <!-- OBJEK -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        akral teraba hangat
                                    </td>

                                    <!-- TTV RINGKAS -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        Suhu: 36.5°C<br>
                                        TD: -<br>
                                        Nadi: 123<br>
                                        RR: 24<br>
                                        BB: 48<br>
                                        SpO₂: 97%<br>
                                        GCS: 15<br>
                                        Kesadaran: Compos Mentis
                                    </td>

                                    <!-- ASES -->
                                    <td style="border:1px solid #ccc; padding:6px;">
                                        hipertermi
                                    </td>

                                    <!-- PLAN -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        observasi KU & TTV<br>
                                        kolaborasi DPJP pemberian analgesik
                                    </td>

                                    <!-- INSTRUKSI -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        kompres air hangat
                                    </td>

                                    <!-- EVALUASI -->
                                    <td style="border:1px solid #ccc; padding:6px; white-space:normal;">
                                        demam menurun
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="triaseIgd" id="sectionIgd">
                    <div class="judul">Triase IGD</div>
                    <div class="wrapper" id="wrapperIgd">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus maiores quos expedita, consectetur esse tenetur et praesentium neque ut officia suscipit quis minima? Laborum praesentium impedit aliquid recusandae at!
                    </div>
                </div>

                <div class="awalMedisIgd">
                    <div class="judul">Awal Medis IGD</div>

                    <?php include("./igd/awalMedisIgd.php")?>
                </div>


                <div class="awalKepIgd">
                    <div class="judul">Awal Keperawatan IGD</div>
                    
                    <?php include("./igd/awalKeperawatanIgd.php")?>
                </div>

                <div class="awalMedisUmum">
                    <div class="judul">Awal Medis Ralan</div>

                    <?php include("./rawatjalan/awalMedisRalan.php")?>
                </div>


                <div class="keperawatanRalanUmum">
                    <div class="judul">Awal Keperawatan Ralan</div>

                    <?php include("./rawatjalan/awalKeperawatanRalan.php")?>
                </div>


                <div class="keperawatanRalanUmum">
                    <div class="judul">Awal Medis Kandungan Ralan</div>
                </div>
                <div class="keperawatanRalanUmum">
                    <div class="judul">Awal kebidanan Ralan</div>
                </div>

                <div class="resumeRajal">
                    <div class="judul">Resume Rawat Jalan</div>
                    
                    <?php include("./rawatjalan/resumeRajal.php")?>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>

</html>