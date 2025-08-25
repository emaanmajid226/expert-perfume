const products = [
  { id: 1, name: "Rose Essence", price: 1200, gender: "women", img: "https://images.unsplash.com/photo-1595433707802-6b2626a6f2af?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Citrus Fresh", price: 1300, gender: "men", img: "https://images.unsplash.com/photo-1614707267537-6c0086516757?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Amber Nights", price: 1500, gender: "women", img: "https://images.unsplash.com/photo-1624454000933-c7183762c508?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "Ocean Mist", price: 1100, gender: "men", img: "https://images.unsplash.com/photo-1594631252844-dc31ee6c50ad?q=80&w=1200&auto=format&fit=crop" }
];

const grid = document.getElementById('productGrid');

function renderProducts(filter) {
  grid.innerHTML = "";
  products.filter(p => filter==="all" || p.gender===filter)
    .forEach(p => {
      const col = document.createElement('div');
      col.className = "col-12 col-md-6 col-lg-3";
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${p.img}" class="card-img-top" style="height:250px;object-fit:cover">
          <div class="card-body text-center">
            <h5 class="card-title">${p.name}</h5>
            <p class="text-secondary">PKR ${p.price}</p>
            <button class="btn btn-dark btn-sm">Add to Cart</button>
          </div>
        </div>`;
      grid.appendChild(col);
    });
}

document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', e => {
    renderProducts(e.target.getAttribute('data-filter'));
  });
});

renderProducts("all");
