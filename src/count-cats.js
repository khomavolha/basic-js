module.exports = function countCats(matrix) {
let arr = matrix.flat(Infinity);
let arr2=[];
for(let i = 0; i<arr.length; i++){
if(arr[i]=='^^'){
arr2.push(arr[i])
}}
return arr2.length;
};

