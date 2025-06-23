// Define o padrão de movimento (ciclo de 24 horas)
const movimentos: [number, number][] = [
  [1, 2],
  [-1, -2],
  [3, 1],
  [0, 2],
  [-2, -1],
  [2, 0],
  [-1, 1],
  [1, -2],
  [0, 0],
  [2, -1],
  [-2, 2],
  [1, 0],
  [-1, -1],
  [0, 1],
  [2, -2],
  [-1, 0],
  [1, 1],
  [0, -1],
  [2, 1],
  [-2, 0],
  [1, -1],
  [-1, 2],
  [0, -2],
  [2, 2]
];

// Elementos DOM
const inputHoras = document.getElementById('hours') as HTMLInputElement;
const botaoCalcular = document.getElementById('calculate-btn') as HTMLButtonElement;
const botaoResetar = document.getElementById('reset-btn') as HTMLButtonElement;
const resultadoDiv = document.getElementById('result') as HTMLDivElement;
const passosCalculoDiv = document.getElementById('calculation-steps') as HTMLDivElement;
const displayMovimentos = document.getElementById('movements-display') as HTMLDivElement;

// Exibe os movimentos na tela
function exibirMovimentos() {
  displayMovimentos.innerHTML = '';
  movimentos.forEach((movimento, indice) => {
    const elementoMovimento = document.createElement('div');
    elementoMovimento.className = 'movement-item';
    elementoMovimento.textContent = `H${indice}: (${movimento[0]}, ${movimento[1]})`;
    displayMovimentos.appendChild(elementoMovimento);
  });
}

// Calcula a posição do astro após as horas especificadas
function calcularPosicao(horas: number): [number, number] {
  let x = 0;
  let y = 0;
  let passos = `<div class="step">Posição inicial: (0, 0)</div>`;

  for (let i = 0; i < horas; i++) {
    const indiceCiclo = i % 24;
    const [dx, dy] = movimentos[indiceCiclo];
    x += dx;
    y += dy;
    passos += `<div class="step">Hora ${i + 1}: Movimento (${dx}, ${dy}) → Nova posição: (${x}, ${y})</div>`;
  }

  passosCalculoDiv.innerHTML = passos;
  return [x, y];
}

// Manipula o clique no botão Calcular
botaoCalcular.addEventListener('click', () => {
  const horas = parseInt(inputHoras.value);

  if (isNaN(horas)) {
    // Corrigido: parêntese fechado corretamente
    resultadoDiv.textContent = 'Por favor, insira um número válido de horas';
    passosCalculoDiv.innerHTML = '';
    return;
  }

  if (horas < 0) {
    resultadoDiv.textContent = 'O número de horas não pode ser negativo';
    passosCalculoDiv.innerHTML = '';
    return;
  }

  const [x, y] = calcularPosicao(horas);
  resultadoDiv.textContent = `Posição final após ${horas} horas: (${x}, ${y})`;
});

// Manipula o clique no botão Resetar
botaoResetar.addEventListener('click', () => {
  inputHoras.value = '';
  resultadoDiv.textContent = 'Aguardando cálculo...';
  passosCalculoDiv.innerHTML = '';
});

// Inicializa a aplicação
exibirMovimentos();
resultadoDiv.textContent = 'Aguardando cálculo...';
