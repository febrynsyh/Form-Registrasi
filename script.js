$(document).ready(function () {
    alert("jQuery berhasil berjalan!");

    $("#registrationForm").on("submit", function (event) {
        event.preventDefault();

        const nama = $("#nama").val().trim();
        const usiaText = $("#usia").val().trim();
        const usia = Number(usiaText);

        if (nama === "") {
            alert("Nama harus diisi!");
            return;
        }

        if (
            usiaText === "" ||
            !Number.isInteger(usia) ||
            usia < 3 ||
            usia > 120
        ) {
            alert("Masukkan usia yang valid!");
            return;
        }

        if (usia > 6) {
            alert(
                "Halo, " + nama +
                "!\nUsia Anda: " + usia +
                " tahun.\nANDA BOLEH MASUK TAMAN BERMAIN."
            );
        } else {
            alert(
                "Halo, " + nama +
                "!\nUsia Anda: " + usia +
                " tahun.\nANDA TIDAK BOLEH MASUK TAMAN BERMAIN."
            );
        }
    });

    $("#btnClear").on("click", function () {
        $("#registrationForm")[0].reset();
    });
});