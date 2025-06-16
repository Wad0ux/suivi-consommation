document.getElementById('form-consommation').addEventListener('submit', async (e) => {
  e.preventDefault();
  const client = document.getElementById('client').value;
  const produit = document.getElementById('produit').value;
  const quantite = document.getElementById('quantite').value;
  await fetch('https://TON-BACKEND.onrender.com/consommation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ client, produit, quantite })
  });
  alert('Ajouté !');
  e.target.reset();
});
