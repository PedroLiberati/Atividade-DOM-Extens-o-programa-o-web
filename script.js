let contador = 0;

const spanContador = document.getElementById("contador");
const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");

btnMais.addEventListener("click", () => {
    contador++;
    spanContador.textContent = contador;
});

btnMenos.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        spanContador.textContent = contador;
    } else {
        alert("O contador já está em zero!");
    }
});

const inputTexto = document.getElementById("inputTexto");
const divParagrafos = document.getElementById("paragrafos");
const charCount = document.getElementById("charCount");

inputTexto.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const texto = inputTexto.value.trim();

        if (texto !== "") {
            const p = document.createElement("p");
            p.textContent = texto;
            divParagrafos.appendChild(p);
        }

        inputTexto.value = "";
        charCount.textContent = 0;
    }
});

inputTexto.addEventListener("input", () => {
    const texto = inputTexto.value.replace(/\s/g, "");
    charCount.textContent = texto.length;
});

const btnLista = document.getElementById("btnLista");
const tipoLista = document.getElementById("tipoLista");
const divListas = document.getElementById("listas");

btnLista.addEventListener("click", () => {
    const tipo = tipoLista.value;

    const lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        const item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
    }

    divListas.appendChild(lista);
});

const btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", () => {
    contador = 0;
    spanContador.textContent = 0;

    divParagrafos.innerHTML = "";
    divListas.innerHTML = "";

    inputTexto.value = "";
    charCount.textContent = 0;
});
