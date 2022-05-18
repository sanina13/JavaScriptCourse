/*const calcAverage = (game1, game2, game3) => (game1 + game2 + game3) / 3;
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);  
const checkWinner = function (avgDolphins, avgKoalas) {
  if(avgDolphins >= avgKoalas * 2){
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  }else if(avgKoalas >= avgDolphins * 2){
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  }else{
    return `No one wins the tournament!`;
  }
}

console.log(checkWinner(avgDolphins, avgKoalas));*/

//test bill 100
// const calcTip = function (billValue){
//   if(billValue >= 50 && billValue <= 300){
//     return billValue*15/100;
//   }else{
//     return billValue*20/100;
//   }
// }
// const bills = [125, 555, 44];
// const value1 = calcTip(bills[0]);
// const value2 = calcTip(bills[1]);
// const value3 = calcTip(bills[2]);
// const tips = [value1, value2, value3];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(value1);
// console.log(value2);
// console.log(value3);
// console.log(bills);
// console.log(tips);
// console.log(total);

const Mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}

const John = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;  
  }
}

if(Mark.calcBMI() > John.calcBMI()){
  console.log(`Mark's BMI(${Mark.calcBMI()}) is higher than John's(${John.calcBMI()})`)
}else{
  console.log(`John's BMI(${John.calcBMI()}) is higher than Mark's(${Mark.calcBMI()})`)  
}
