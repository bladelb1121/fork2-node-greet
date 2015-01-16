greet = require("../lib/index.js");
var expect = require('chai').expect;
describe('greet',function(){
	it("greet should greet a person by name",function(){
 		expect(greet('blade')).to.equal("hello, blade");
	});
	it("greet should greet a person sexy if drunk",function(){
		expect(greet("blade",true)).to.equal("helloblade, you look sexy today");
	});
});
