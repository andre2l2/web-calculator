class Buttons {
	commads = [];

	constructor() {}

	addition() {
		this.insert('+');
	}

	subtraction() {
		this.insert('-');
	}

	multiplication() {
		this.insert('*');
	}

	division() {
		this.insert('/');
	}

	insert(value) {
		if (value === 'x') return this.multiplication();
		return this.commads.push(value);
	}

	clear() {
		this.commads = [];
	}

	print() {
		return this.commads.join('');
	}

	exec() {
		try {
			const getCommads = this.commads.join('');
			return eval(getCommads);
		} catch (error) {
			return 'Syntax Error';
		}
	}
}

function start(e) {
	console.log(e.target.innerText);
	const value = e.target.innerText;

	if (value !== '=') buttons.insert(value);

	if (value === '=') {
		screen.innerHTML = buttons.exec();
		buttons.clear();
	} else {
		screen.innerHTML = buttons.print();
	}
}

const buttons = new Buttons();
const screen = document.querySelector('.render');
const getButtons = document.querySelectorAll('button');

for (let btn of getButtons) {
	btn.addEventListener('click', start);
}
