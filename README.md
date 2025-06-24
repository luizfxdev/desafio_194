# Missão Espacial: Encontre o Astro Perdido 🚀


Capitão, você recebeu uma missão importante da Federação Espacial! Um astro misterioso está se movendo de forma errática na órbita de vários planetas e precisamos determinar sua posição exata a cada hora para rastreá-lo. 
Sua tarefa é criar um programa que calcule a posição do astro com base em um conjunto de movimento predefinido. 🪐

## Funcionamento do Sistema
O astro segue um padrão cíclico de movimentos que se repetem a cada 24 horas:
- Os movimentos são expressos como deslocamentos em um espaço 2D
- Parte da posição inicial `(0, 0)`
- Cada hora, aplica-se um movimento específico (deslocamento em X e Y)
- Após 24 horas, o ciclo recomeça

## Entrada
1. **Lista de movimentos**:  
   24 tuplas de inteiros representando deslocamentos horários  
   Exemplo: `[(1, 2), (-1, -2), (3, 1), (0, 2), ...]`
   
2. **Horas**:  
   Inteiro representando o número de horas a calcular  
   Exemplo: `5`

## Saída Esperada
- Tupla de dois inteiros com a posição final  
  Exemplo: `(1, 2)`

## Exemplo de Uso
Entrada
movimentos = [
(1, 2),
(-1, -2),
(3, 1),
(0, 2),
(-2, -1),
# ... (24 movimentos no total)
]
horas = 5

Processamento
posição_final = calcular_posição(movimentos, horas)

Saída
print(posição_final) # Resultado esperado: (1, 2)

text

## Como Resolver?
1. **Calcular movimentos totais**:
total_x = 0
total_y = 0
for i in range(horas):
movimento = movimentos[i % 24] # Repete ciclo a cada 24h
total_x += movimento
total_y += movimento

text

2. **Retornar posição final**:
return (total_x, total_y)

text

## Requisitos
- Linguagem: Html,CSS, TypeScript
- Dependências: Nenhuma

> **Importante**: O ciclo de 24 horas deve ser considerado! Se `horas > 24`, volte ao início da lista após o 24º movimento.

Boa sorte, Capitão! Que as estrelas guiem seu código 🌌✨
