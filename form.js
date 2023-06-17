function kirimData() {
    var name = document.getElementById("nama").value;
    var tanggalElement = document.getElementById("tanggal");
    var tanggal = tanggalElement.value;
    var poli = document.getElementById("poli").value;
    var jk = document.querySelector("input[name=jk]:checked").value;
    var no = document.getElementById("no").value;
    var keluhan = document.getElementById("keluhan").value;

    var pesan = "Nama: " + name + "\n" +
        "Tanggal Berobat: " + tanggal + "\n" +
        "Poli: " + poli + "\n" +
        "Jenis Kelamin: " + jk + "\n" +
        "Nomer yang Bisa Dihubungi: " + no + "\n" +
        "Keluhan: " + keluhan;

    alert(pesan);
    window.location.href = "index.html";
}
