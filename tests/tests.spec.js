import Operation from '../src/model/Operation';

test('Normal method', () => {

	const s = "abcdefg";
	const op1 = new Operation([{ move: 1 }, { insert: "FOO" }]);
	const op2 = new Operation([{ move: 3 }, { insert: "BAR" }]);

	expect(op1.apply(s)).toEqual("aFOObcdefg");
	expect(op2.apply(s)).toEqual("abcBARdefg");
})

test('Static method', () => {
	const s = 'abcdefg';
	const op1 = new Operation([{ move: 1 }, { insert: "FOO" }]);
	const op2 = new Operation([{ move: 3 }, { insert: "BAR" }]);
	const op3 = op1.combine(op2);

	expect(Operation.combine(op1, op2).apply(s)).toEqual(op3.apply(s))
});