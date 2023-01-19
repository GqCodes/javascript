const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*================== FOR EACH ==================*/
// using a for loop:
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}
// using for each
companies.forEach((company) => console.log(company));

/*================== FILTER ==================*/
// find ages 21 & over
// using for loop
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

const canDrink2 = ages.filter((age) => age >= 21);
console.log(canDrink);

// Filter example: filter the retail companies
const retailCompanies = companies.filter((company) => company.category === 'Retail');
console.log(retailCompanies);

// Filter companies started in the 80's
const eightiesCompanies = companies.filter((company) => company.start >= 1980 && company.start <= 1990);
console.log(eightiesCompanies);

// Filter all companies that lasted 10 years
const lastedTenYears = companies.filter((company) => company.end - company.start >= 10);
console.log(lastedTenYears);

/*================== MAP ==================*/
// instead of just filtering things out, MAP allows us to create NEW arrays from a current array
//EX 1 create array of company names:
const companyInfo = companies.map((company) => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyInfo);

//EX 2 Map over ages and square it:
const agesSquared = ages.map((age) => Math.sqrt(age));
console.log(agesSquared);

// Ex 3 taking the result from EX 2 and multiplying by 2 by "chaining array methods together"
const squaredTimesTwo = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log(squaredTimesTwo);

/*================== SORT ==================*/
// Does what the name suggest, sorts data by a specific parameter of arguement
//EX 1 sort the companies by the start year
const sortCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
console.log(sortCompanies);

// EX 2 sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

/*================== REDUCE ==================*/
// EX 1 add all ages together
// using for loop
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);

// Using reduce
const ageSum2 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum2);

// EX 2 get total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

/* we can also COMBINE these methods through chaining */
const combine = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);
console.log(combine);
