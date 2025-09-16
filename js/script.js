// Welcome message
alert("Selamat datang di Nua Corp!");
const welcomeName = prompt("Masukkan nama Anda:");
  const nameTarget = document.getElementById("welcomeName");
  if (nameTarget) {
    nameTarget.textContent = welcomeName || "Anonim!";
  }

document.addEventListener("DOMContentLoaded", function () {
  // Tampilan dari form dan infoBox
  const form = document.getElementById("messageForm");
  const infoBox = document.getElementById("infoBox");

  if (form) {
    form.addEventListener("submit", function (f) {
      f.preventDefault();

      const data = new FormData(form);
      const name = data.get("name");
      const birthdate = new Date(data.get("birthdate"));
      const gender = data.get("gender");
      const message = data.get("message");

      // Validasi jenis kelamin
      if (!gender) {
        alert("Silakan pilih jenis kelamin.");
        return;
      }

      const day = String(birthdate.getDate()).padStart(2, '0');
      const month = String(birthdate.getMonth() + 1).padStart(2, '0');
      const year = birthdate.getFullYear();
      const formatted = `${day}/${month}/${year}`;

      infoBox.innerHTML = `
        <div class="mb-1 font-bold">Current time :</div>
        <div id="currentTime" class="mb-3">${new Date().toString()}</div>
        <div>
          <b>Name</b> : ${name}<br />
          <b>Birthdate</b> : ${formatted}<br />
          <b>Gender</b> : ${gender}<br />
          <b>Message</b> : ${message}
        </div>
      `;
    });
  }
  
  function updateTime() {
    const timeNow = new Date().toString();
    const timeEl = document.getElementById("currentTime");
    if (timeEl) {
      timeEl.textContent = timeNow;
    }
  }
  setInterval(updateTime, 1000);
  updateTime();
})