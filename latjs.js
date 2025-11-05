let angka1 = document.getElementById("angka1");
let angka2 = document.getElementById("angka2");
let tambah = document.getElementById("tambah");
let kurang = document.getElementById("kurang");
let kali = document.getElementById("kali");
let bagi = document.getElementById("bagi");
let texthasil = document.getElementById("hasil");

function penjumlahan() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a + b;
    texthasil.innerHTML = "hasil :" + hasil;

}

function pengurangan() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a - b;
    texthasil.innerHTML = "hasil :" + hasil;

}

function perkalian() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a * b;
    texthasil.innerHTML = "hasil :" + hasil;

}

function pembagian() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a / b;
    texthasil.innerHTML = "hasil :" + hasil;

}
tambah.onclick = penjumlahan;
kurang.onclick = pengurangan;
kali.onclick = perkalian;
bagi.onclick = pembagian;