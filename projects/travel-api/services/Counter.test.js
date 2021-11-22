const counter = require('./counter');

describe("Counter test", () => {

    beforeAll(() => {
        // console.log("Before ANY tests are execute");
    });

    beforeEach(() => {
        // console.log("Before EACH tests are execute");
    });

    afterEach(() => {
        // console.log("After EACH tests are execute");
    });

    afterAll(() => {
        // console.log("After ALL tests are execute");
    });

    test('should have counter == 0', () => {
        expect(counter.get()).toBe(0);
    });

    test('counter should be 1 after increment', () => {
        counter.increment();
        expect(counter.get()).toBe(1);
    });
});
