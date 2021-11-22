const counter = require('./counter');

test('default counter', () => {
    expect(counter.get()).toBe(0);
});

test('increment', () => {
    counter.increment();
    expect(counter.get()).toBe(1);
});