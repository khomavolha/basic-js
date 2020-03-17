module.exports = function getSeason(date) {
if (!date) return 'Unable to determine the time of year!'

let trDate = new Date(1000, 0, 0, 0, 1, 2, 3);
    if (date.getMonth !== trDate.getMonth) {
      throw new Error();
    };

try {
let a = date.getMonth();
date.setHours(0, 0, 0, 0);
if (a == 0|| a== 1|| a == 11) return 'winter';
if (a == 2|| a== 3|| a == 4) return 'spring';
if (a == 5|| a== 6|| a == 7) return 'summer';
if (a == 8|| a== 9|| a == 10) return 'autumn';

}catch{throw new Error}


};
