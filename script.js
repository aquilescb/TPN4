const planetas = [
    { nombre: "Mercurio", tamaño: 4879, distanciaAlSol: 58, tipo: "Rocoso" },
    { nombre: "Venus", tamaño: 12104, distanciaAlSol: 108, tipo: "Rocoso" },
    { nombre: "Tierra", tamaño: 12742, distanciaAlSol: 150, tipo: "Rocoso" },
    { nombre: "Marte", tamaño: 6779, distanciaAlSol: 228, tipo: "Rocoso" },
    { nombre: "Júpiter", tamaño: 139820, distanciaAlSol: 778, tipo: "Gaseoso" },
    { nombre: "Saturno", tamaño: 116460, distanciaAlSol: 1427, tipo: "Gaseoso" },
    { nombre: "Urano", tamaño: 50724, distanciaAlSol: 2871, tipo: "Gaseoso" },
    { nombre: "Neptuno", tamaño: 49244, distanciaAlSol: 4495, tipo: "Gaseoso" },
    { nombre: "Plutón", tamaño: 2376, distanciaAlSol: 5906, tipo: "Rocoso (planeta enano)" },
];

const contenedor = document.getElementById("contenedor-planetas");

planetas.map(planeta => {
    const div = document.createElement("div");
    div.classList.add("planeta");
    div.innerHTML = `
        <h2>${planeta.nombre}</h2>
        <p><strong>Tamaño:</strong> ${planeta.tamaño} km</p>
        <p><strong>Distancia al Sol:</strong> ${planeta.distanciaAlSol} millones de km</p>
        <p><strong>Tipo:</strong> ${planeta.tipo}</p>
    `;
    contenedor.appendChild(div);
});