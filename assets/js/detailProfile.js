// Mendapatkan referensi ke elemen input untuk unggah gambar
// const uploadImageInput = document.getElementById("upload-image");

// // Mendapatkan referensi ke elemen div untuk menampilkan gambar terunggah
// const previewContainer = document.getElementById("previewContainer");

// // Fungsi untuk mengatur nilai (value) gambar terlebih dahulu
// function setPreviewImage() {
//   // Contoh URL gambar yang akan diatur sebagai nilai
//   const imageUrl = "assets/img/profilePic.png";

//   // Membuat elemen gambar untuk menampilkan gambar terunggah
//   const imageElement = document.createElement("img");
//   imageElement.src = imageUrl;
//   imageElement.width = 200; // Sesuaikan lebar gambar sesuai kebutuhan
//   imageElement.height = 200; // Sesuaikan tinggi gambar sesuai kebutuhan

//   // Menambahkan elemen gambar ke dalam div untuk menampilkan gambar
//   previewContainer.innerHTML = "";
//   previewContainer.appendChild(imageElement);
// }

// // Menjalankan fungsi untuk mengatur nilai gambar terlebih dahulu
// setPreviewImage();

// Fungsi untuk menampilkan gambar terunggah saat ada perubahan pada input
function previewImage(event) {
  // Mendapatkan file gambar yang diunggah
  const file = event.target.files[0];

  // Mengecek apakah file adalah gambar
  if (file && file.type.startsWith("image/")) {
    // Membuat URL untuk gambar yang diunggah
    const imageUrl = URL.createObjectURL(file);

    // Membuat elemen gambar untuk menampilkan gambar terunggah
    const imageElement = document.createElement("img");
    imageElement.classList.add("img-fluid");
    imageElement.src = imageUrl;

    // Menghapus elemen gambar sebelumnya dan menambahkan elemen gambar baru ke dalam div untuk menampilkan gambar
    previewContainer.innerHTML = "";
    previewContainer.appendChild(imageElement);
  } else {
    // Jika file bukan gambar, berikan pesan kesalahan
    previewContainer.innerHTML = "File yang diunggah harus berupa gambar.";
  }
}

// Menghapus pemanggilan fungsi setPreviewImage() karena kita akan menggunakan fungsi previewImage() untuk menampilkan gambar terunggah.
