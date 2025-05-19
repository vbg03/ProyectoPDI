// Esperar a que cargue todo el DOM
document.addEventListener('DOMContentLoaded', () => {
  const uploadInput = document.getElementById('uploadFoto');
  const userPhoto = document.getElementById('userPhoto');

  uploadInput.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        userPhoto.src = e.target.result;
        userPhoto.style.display = 'block';
      };

      reader.readAsDataURL(file);
    }
  });
});
