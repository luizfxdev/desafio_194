//script.ts
// Define o padrão de movimento (ciclo de 24 horas)
const movements: [number, number][] = [
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

// Elementos do DOM
const hoursInput = document.getElementById('hours') as HTMLInputElement;
const calculateBtn = document.getElementById('calculate-btn') as HTMLButtonElement;
const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;
const calculationStepsDiv = document.getElementById('calculation-steps') as HTMLDivElement;
const movementsDisplay = document.getElementById('movements-display') as HTMLDivElement;

// Exibe os movimentos na tela
function displayMovements() {
  movementsDisplay.innerHTML = '';
  movements.forEach((movement, index) => {
    const movementElement = document.createElement('div');
    movementElement.className = 'movement-item';
    movementElement.textContent = `H${index}: (${movement[0]}, ${movement[1]})`;
    movementsDisplay.appendChild(movementElement);
  });
}

// Calcula a posição do astro após as horas especificadas
function calculatePosition(hours: number): [number, number] {
  let x = 0;
  let y = 0;
  let steps = `<div class="step">Posição inicial: (0, 0)</div>`;

  for (let i = 0; i < hours; i++) {
    const cycleIndex = i % 24; // Ciclo se reinicia a cada 24 horas
    const [dx, dy] = movements[cycleIndex];
    x += dx;
    y += dy;
    steps += `<div class="step">Hora ${i + 1}: Movimento (${dx}, ${dy}) → Nova posição: (${x}, ${y})</div>`;
  }

  calculationStepsDiv.innerHTML = steps;
  return [x, y];
}

// Manipula o clique no botão "Calcular"
calculateBtn.addEventListener('click', () => {
  const hours = parseInt(hoursInput.value);

  if (isNaN(hours)) {
    // Validação para entrada não numérica
    resultDiv.textContent = 'Por favor, insira um número válido de horas.';
    calculationStepsDiv.innerHTML = '';
    return;
  }

  if (hours < 0) {
    // Validação para entrada negativa
    resultDiv.textContent = 'O número de horas não pode ser negativo.';
    calculationStepsDiv.innerHTML = '';
    return;
  }

  const [x, y] = calculatePosition(hours);
  resultDiv.textContent = `Posição final após ${hours} horas: (${x}, ${y})`;
});

// Manipula o clique no botão "Resetar"
resetBtn.addEventListener('click', () => {
  hoursInput.value = '';
  resultDiv.textContent = 'Aguardando cálculo...';
  calculationStepsDiv.innerHTML = '';
});

// Inicializa a visualização dos movimentos e define o texto inicial
displayMovements();
resultDiv.textContent = 'Aguardando cálculo...';
