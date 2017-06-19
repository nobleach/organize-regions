import test from 'ava';
import mode from '../src/frequency';

test('it gets the most frequent integer in an array', t => {
    const integers = [1, 3, 9, 5, 7, 7, 3, 4, 3, 3, 9, 7, 3];

    // Run unit
    const result = mode(integers);

    // Verify expectations
    t.deepEqual(result, 3);
});
