// deklarasi element dom
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const hasil = document.getElementById('hasil');

// fungsi tombol reset
function reset() {
  input1.value = '';
  input2.value = '';
  hasil.innerText = 0;
}

// fungsi tombol operasi
function operasi(op) {
  let jumlah = 0;

  // mengubah string ke number
  const angka1 = Number(input1.value);
  const angka2 = Number(input2.value);

  // jalankan operasi
  if (op === 'tambah') {
    jumlah = angka1 + angka2;
  } else if (op === 'kurang') {
    jumlah = angka1 - angka2;
  } else if (op === 'kali') {
    jumlah = angka1 * angka2;
  } else if (op === 'bagi') {
    jumlah = angka1 / angka2;
  }

  // hasil dibulatkan
  hasil.innerText = Math.ceil(jumlah);
}