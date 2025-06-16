async function verifierAdmin() {
  const token = localStorage.getItem('token');
  if (!token) return window.location.href = "login.html";
}
async function chargerConsommations() {
  const res = await fetch('https://suivi-consommation.onrender.com/consommation');
  const data = await res.json();
  const tbody = document.querySelector('#tableau tbody');
  tbody.innerHTML = '';
  data.forEach(c => {
    const row = `<tr><td>${c.client}</td><td>${c.produit}</td><td>${c.quantite}</td><td>${new Date(c.date).toLocaleString()}</td></tr>`;
    tbody.innerHTML += row;
  });
}
function logout() {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
}
function exportCSV() {
  fetch('https://TON-BACKEND.onrender.com/consommation')
    .then(res => res.json())
    .then(data => {
      const lignes = [["Client", "Produit", "Quantité", "Date"]];
      data.forEach(c => lignes.push([c.client, c.produit, c.quantite, c.date]));
      const csv = lignes.map(l => l.join(",")).join("\n");
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "consommations.csv";
      a.click();
    });
}
verifierAdmin();
chargerConsommations();
