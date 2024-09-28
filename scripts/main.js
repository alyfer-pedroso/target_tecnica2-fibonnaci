document.addEventListener("DOMContentLoaded", () => {
  const $form = document.querySelector("form");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!isNaN(e.target[0].value) && parseInt(e.target[0].value)) {
      verifyFibonacci(parseInt(e.target[0].value));
      return;
    }
    alert("Por favor, insira um número válido.");
  });
});

const verifyFibonacci = (value) => {
  if (value < 0) {
    alert("O valor deve ser positivo");
    return;
  }

  const vector = [];
  let index = 0,
    afterIndex = 1,
    nextIndex;

  while (index <= value) {
    vector.push(index);
    nextIndex = index + afterIndex;
    index = afterIndex;
    afterIndex = nextIndex;
  }

  const resultdiv = document.querySelector("#result");
  if (resultdiv) {
    resultdiv.innerHTML = ``;
  } else {
    const newdiv = document.createElement("div");
    newdiv.id = "result";
    newdiv.className = "p-8 border border-black bg-gray-200";
    document.body.appendChild(newdiv);
  }

  const includes = vector.includes(value);

  document.querySelector("#result").innerHTML = `
    <p class="text-2xl [&>b]:font-bold mb-2"><b>Sequência</b>: [${vector.join(", ")}]</p>
    <span class="text-2xl font-bold ${includes ? "text-green-700" : "text-red-700"}">Pertence: ${includes ? "sim" : "não"}</span>
  `;

  console.log("sequência::", vector);
  console.log("pertence::", includes ? "sim" : "não");
};
