import * as Solver from './imports.js';
import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Escolha um exercício para rodar: ', exercise => {
	switch (exercise) {
		case '1':
			run(Solver.Problem1);
			break;
		case '2':
			run(Solver.Problem2);
			break;
		case '3':
			run(Solver.Problem3);
			break;
		case '7':
			run(Solver.Problem7);
			break;
		case '9':
			run(Solver.Problem9);
			break;
		case '12':
			run(Solver.Problem12);
			break;
		case '29':
			run(Solver.Problem29);
			break;
		case '43':
			run(Solver.Problem43);
			break;
		case '49':
			run(Solver.Problem49);
			break;
		case '57':
			run(Solver.Problem57);
			break;
		case '65':
			run(Solver.Problem65);
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
		if (!passed) console.log(`Teste ${i + 1} falhou!`);
		return acc && passed;
	}, true);

	if (correct)
		console.log(`Todos os ${problemClass.tests.length} testes passaram!`);
	else console.log('Os testes falharam!');
}
