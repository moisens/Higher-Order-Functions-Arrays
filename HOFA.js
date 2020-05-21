const companies = [
   {name: 'Company One', category: 'Finance', Start: 1981, end: 2003},
   {name: 'Company Two', category: 'Retail', Start: 1992, end: 2008},
   {name: 'Company Three', category: 'Auto', Start: 1999, end: 2007},
   {name: 'Company Four', category: 'Retail', Start: 1989, end: 2010},
   {name: 'Company Five', category: 'Technology', Start: 2009, end: 2014},
   {name: 'Company Six', category: 'Finance', Start: 1987, end: 2010},
   {name: 'Company Seven', category: 'Auto', Start: 1986, end: 1996},
   {name: 'Company Eight', category: 'Technology', Start: 2011, end: 2016},
   {name: 'Company Nine', category: 'Retail', Start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//Before that let pass though a for method
/*for(let i = 0; i < companies.length; i++){
   //console.log(companies[i]);
}
*/

//forEach
/*companies.forEach((company) => {
   console.log(company)
});
*/
//filter
/*We want to find the ages between 21 and over*/
/*First with a for loop */
/*const canDrink = [];
for(let i = 0; i < ages.length; i++){
   if(ages[i] >= 21){
      canDrink.push(ages[i]);
   }
}
console.log(canDrink);

//Now with filter
const legalAgeDrink = ages.filter((age) =>{
   if(age >= 21){
      return true;
   }
});
console.log(legalAgeDrink);

//filter retails compagnies 
const retaiCompagnies = companies.filter((company) =>{
   if(company.category === 'Retail'){
      return true;
   }
});
console.log(retaiCompagnies);

//filter compagnies start between 1980 & 1990
const startEightiesCompagnies = companies.filter((company) =>{
   if(company.Start < 1990){
      return true;
   }
});
//console.log(startEightiesCompagnies)

//filter compagnies that last at least ten years or more
const compagniesLastTenYears = companies.filter((company) =>{
   if(company.end - company.Start >= 10 ){
      return true;
   }
});
console.log(compagniesLastTenYears);

//map
//Create array of company names
const companyName = companies.map((company) =>{
   return `${company.name} ${company.Start} - ${company.end}`;
});
//console.log(companyName);

//We want the sqrt of ages and then multiply the result by Two
const ageSquare = ages
.map((age) =>{
   return Math.sqrt(age)
}).map((age) =>{
   return age * 2
});
console.log(ageSquare);

//sort
const sortedCompagnies = companies.sort((company1, company2) =>{
   if(company1.Start > company2.Start){
      return 1
   }else{
      return -1;
   }
})
console.log(sortedCompagnies);

//Sort ages from the lowest to the highest
const lowHighAge = ages.sort((age1, age2) =>{
      return age1 - age2;
});
console.log(lowHighAge);

//reduce
 const ageSum = ages.reduce((total, age) =>{
    return total + age
 }, 0);
 console.log(ageSum);

 //We want the total years for all companies
 const totalYearsCo = companies.reduce((total, company) =>{
    return total + (company.end - company.Start);
 }, 0);

 console.log(totalYearsCo);
*/
 //Combine methode
 const combined = ages
 .map((age) =>{
    return age * 2;
 }).filter((age) =>{
    if(age >= 40){
       return true;
    }
 }).sort((ageA, ageB) =>{
    return ageA -ageB
 }).reduce((total, age) =>{
    return total + age
 }, 0);

 console.log(combined)