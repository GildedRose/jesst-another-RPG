const randomNumber = require('../lib/random.js');
const { TestScheduler } = require('jest');

test('gets random number between 1 and 10',() => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});