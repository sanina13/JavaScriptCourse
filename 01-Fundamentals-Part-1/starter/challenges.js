/*const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;
*/
/*const markHeight = 1.88;
const markWeight = 95;

const johnHeight = 1.76;
const johnWeight = 85;*/
/*
const markBmi = markWeight / markHeight ** 2;
const johnBmi = johnWeight / johnHeight ** 2;

if (markBmi > johnBmi) {
	console.log(`Mark's BMI (${Math.round(markBmi * 10) / 10}) is higher than John's (${Math.round(johnBmi * 10) / 10})`)
} else {
	console.log(`John's BMI (${Math.round(johnBmi * 10) / 10}) is higher than Mark's (${Math.round(markBmi * 10) / 10})`)
}*/
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;

if(averageDolphins > averageKoalas && averageDolphins >= 100){
	console.log(`Dolphins wins with ${averageDolphins} points.`);
}else if(averageKoalas > averageDolphins && averageKoalas >= 100){
	console.log(`Koalas wins with ${averageKoalas} points.`);
}else if(averageDolphins > averageKoalas && averageDolphins < 100){
	console.log('Dolphins Scores under 100 points');
}else if(averageKoalas > averageDolphins && averageKoalas < 100){
	console.log('Koalas Scores under 100 points');
}else if(averageKoalas === averageDolphins && averageKoalas >= 100 && averageDolphins >=100){
	console.log('Draw')
}else{
	console.log('Any team scores over 100 points and the thow teams have the same points');
}