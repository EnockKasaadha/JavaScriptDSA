//FUNCTIONAL PROGRAMMING EXAMPLE (the use of higher order functions)
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    { name: "Company Two", category: "Retail", start: 1992, end: 2008},
    { name: "Company Three", category: "Auto", start: 1999, end: 2007},
    { name: "Company Four", category: "Retail", start: 1989, end: 2010},
    { name: "Company Five", category: "Technology", start: 1987, end: 2010},
    { name: "Company Six", category: "Finance", start: 1987, end: 2010},
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989}
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//FOREACH is used to loop an array instead of the for loop
companies.forEach(function(Company){
    console.log(Company);
})  
//this is the same as;
    // for (let i = 0; i < companies.length; i++) {
    //     console.log(companies[i]);
    // }


//FILTER filters things from the array
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink)
//OR
    //const canDrink = ages.filter(function (age) {
    //     if(age>21){
    //         return true;
    //     }
    // });


//filter the retail comopanies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);
    //OR
    // const retailCompanies = companies.filter(function (company) {
    //     if(company.category === 'Retail'){
    //         return true;
    //     }
    // })



//filter all companies that stated in the 80's
const companies80 = companies.filter(company => (company.start >= 1980 && company.start <= 1989));
    // const companies80 = companies.filter(function (company) {
    //     if (company.start>=1980 && company.start<=1989) {
    //         return true;
    //     }
    // })
console.log(companies80)


//get companies that lasted ten years or more
const lasted10 = companies.filter(company => (company.end-company.start>=10));
console.log(lasted10);


//the MAP method returns the array of the specified object
//create array of company names
const companyNames = companies.map(company=>company.name);
    // const companyNames = companies.map(function (company) {
    //     return company.name;
    // })
console.log(companyNames);

const agesSquare = ages
    .map(age => Math.sqrt(age))//first it squares
    .map(age => age*2);//then it multiplies the results
console.log(agesSquare);


//the SORT method sorts
const sortedCompanies = companies.sort((c1, c2) => (c2.start>c2.start ? 1 : -1));
console.log(sortedCompanies)

//the REDUCE returns a total of the loops
const agesSum = ages.reduce((total,age)=>total+age, 0);
console.log(agesSum);

const totalYears = companies.reduce((total,company) => total + (company.end - company.start), 0);
console.log(totalYears);


//HOW TO USE THEM TOGETHER
//COMBINING THE METHODS

const combined =ages
    .map(age => age*2)
    .filter(age => age>=40)
    .sort((a,b) => a-b)
    .reduce((a,b) => a+b,0);

console.log(combined);

/* 
    JS functional libraries and data structures
        Underscore.js: http://underscorejs.org/
        Bilby.js: http://bilby.brianmckenna.org/
        Lazy.js: http://danieltao.com/lazy.js/
        Bacon.js: https://baconjs.github.io/
        Fn.js: http://eliperelman.com/fn.js
        Functional.js: http://functionaljs.com/
        Ramda.js: http://ramdajs.com/0.20.2/index.html
        Mori: http://swannodette.github.io/mori/
*/