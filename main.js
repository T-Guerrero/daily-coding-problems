import Problem1 from './problem1.js'
import Problem2 from './problem2.js'
import Problem3 from './problem3.js'
import Problem7 from './problem7.js'
import Problem9 from './problem9.js'
import Problem29 from './problem29.js'

import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escolha um exercício para rodar: ', exercise => {
  switch (exercise) {
    case '1':
      run(Problem1);
      break;
    case '2':
      run(Problem2);
      break;
    case '3':
      run(Problem3);
      break;
    case '7':
      run(Problem7);
      break;
    case '9':
      run(Problem9);
      break;
      case '29':
      run(Problem29);
      break;
    default:
      console.log('ERROR: Exercício não encontrado!');
      break;
  }
  rl.close();
});

function run(problemClass) {
  const correct = problemClass.tests.reduce((acc, test, i) => {
    const passed = test();
    if (!passed) console.log(`Teste ${i+1} falhou!`);
    return acc && passed;
  }, true);

  if (correct)
    console.log(`Todos os ${problemClass.tests.length} testes passaram!`);
  else
    console.log('Os testes falharam!')
}
