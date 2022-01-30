var expect = require("chai").expect;
var calculator = require("../app/calculator")

describe("Basic calculator", ()=>{
    //success test
    describe("adds, multiplies, divides and substracts", ()=>{
        it("calculates two numbers", () => {
            var addit = calculator.add(5,2);
            var subit = calculator.sub(5,2);
            var mulit = calculator.mul(5,2);
            var divit = calculator.div(10,2);

            expect(addit).to.equal(7);
            expect(subit).to.equal(3);
            expect(mulit).to.equal(10);
            expect(divit).to.equal(5);
        })
    })
//FAIL test
    describe("adds, multiplies, divides and substracts", ()=>{
        it("calculates two numbers", () => {
            var addit = calculator.add(5,2);
            var subit = calculator.sub(5,2);
            var mulit = calculator.mul(5,2);
            var divit = calculator.div(10,2);

            expect(addit).to.equal(8);
            expect(subit).to.equal(5);
            expect(mulit).to.equal(12);
            expect(divit).to.equal(2);
        })
    })
})


describe("test", () => {

    before(() => console.log("Testing started - before all tests"));
    after(() => console.log("Testing finished - after all tests"));
  
    beforeEach(() => console.log("Before a test - enter a test"));
    afterEach(() => console.log("After a test - exit a test"));
  
    it('test 1', () => console.log("PASS"));
    it('test 2', () => console.log("FAIL"));
  
});