const chainMaker = {
	arr: [],
	getLength() {
		return this.arr;
	},
	addLink(value) {
		this.arr.push(value);
		return this;
	},
	removeLink(position) {
		if (typeof position !== "number" || position<=0 || position>this.arr.length){
			this.arr = [];
			throw Error();
		}
		this.arr.splice(position - 1, 1);
		return this;
	},
	reverseChain() {

		this.arr.reverse();
		return this;
	},
  finishChain() {
    let arr2 = this.arr.map(function(map){
      return `( ${map} )`
    }).join('~~');
    this.arr=[];
    return arr2;

    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
