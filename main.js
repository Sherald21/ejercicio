const productos = [
  { nombre: "Laptop Lenovo", categoria: "Tecnología", precio: 1500 },
  { nombre: "Celular Samsung", categoria: "Tecnología", precio: 1200 },
  { nombre: "Auriculares JBL", categoria: "Tecnología", precio: 300 },
  { nombre: "Mouse Logitech", categoria: "Tecnología", precio: 150 },
  { nombre: "Teclado Redragon", categoria: "Tecnología", precio: 200 },

  { nombre: "Sofá 3 plazas", categoria: "Hogar", precio: 850 },
  { nombre: "Mesa de comedor", categoria: "Hogar", precio: 400 },
  { nombre: "Lámpara de pie", categoria: "Hogar", precio: 90 },
  { nombre: "Alfombra persa", categoria: "Hogar", precio: 300 },
  { nombre: "Silla ergonómica", categoria: "Hogar", precio: 220 },

  { nombre: "Remera blanca", categoria: "Ropa", precio: 50 },
  { nombre: "Pantalón jeans", categoria: "Ropa", precio: 120 },
  { nombre: "Campera de cuero", categoria: "Ropa", precio: 350 },
  { nombre: "Zapatillas Nike", categoria: "Ropa", precio: 250 },
  { nombre: "Gorra negra", categoria: "Ropa", precio: 40 },

  { nombre: "Martillo", categoria: "Ferretería", precio: 60 },
  { nombre: "Taladro eléctrico", categoria: "Ferretería", precio: 400 },
  { nombre: "Caja de herramientas", categoria: "Ferretería", precio: 220 },
  { nombre: "Destornillador", categoria: "Ferretería", precio: 30 },
  { nombre: "Cinta métrica", categoria: "Ferretería", precio: 25 },
];


//  Categoría fija
const categoria = "Tecnología";

// Seleccionamos el contenedor usando querySelector
const contenedor = document.querySelector("#contenedor-productos");

// Usamos un bucle for para recorrer y filtrar
for (let i = 0; i < productos.length; i++) {
  if (productos[i].categoria === categoria) {
    const producto = productos[i];

    // Creamos el HTML para un producto
    const htmlProducto = `
      <div class="producto">
        <img src="https://via.placeholder.com/220x150?text=${encodeURIComponent(producto.nombre)}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Categoría: ${producto.categoria}</p>
        <p>Precio: $${producto.precio}</p>
      </div>
    `;

    // Insertamos usando innerHTML
    contenedor.innerHTML += htmlProducto;
  }

for (let i  = 0; i < productos.length; i++) {
  const element= productos[i];
  if(element.categoria==="Ropa"){//si cambia la categoria a va a imprimir esa categoria especifica
    console.log(productos[i])
  }
  

}