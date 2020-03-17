module.exports = function createDreamTeam(members) {
if (members!==undefined &&members!==null && typeof members ==='object' && members.length>0){
let newArr = [];
let result = [];
for (let i in members){
  if(typeof members[i] === 'string'){
    members[i].trim();
    newArr.push(members[i].trim()[0].toUpperCase());
  }}
return newArr.sort().join('')
}else{return false}

};
