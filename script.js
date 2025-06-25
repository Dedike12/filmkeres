
document.getElementById("filmForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const statusMessage = document.getElementById("statusMessage");
  const form = document.getElementById("filmForm");

  emailjs.send("service_g1117fv", "template_7slhllf", {
    title: document.getElementById("title").value,
    type: document.getElementById("type").value,
    message: document.getElementById("message").value,
    date: new Date().toLocaleString("hu-HU")
  }).then(function(response) {
    statusMessage.innerText = "✅ Kérés sikeresen elküldve!";
    statusMessage.style.color = "lightgreen";
    form.reset();
    setTimeout(() => statusMessage.innerText = "", 5000);
  }, function(error) {
    statusMessage.innerText = "❌ Hiba történt a küldés során. Próbáld újra később.";
    statusMessage.style.color = "red";
    setTimeout(() => statusMessage.innerText = "", 7000);
  });
});
