const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double');
const showMillionairesButton = document.getElementById('show-millionaires');
const sortButton = document.getElementById('sort');
const calculateWealthButton = document.getElementById('calculate-wealth');


let data = [];




//Fetch random user add money
async function getRandomUser(){
 const user = await fetch('https://randomuser.me/api/');
 const data = await user.json();
 console.log(data);

}

getRandomUser();
getRandomUser();
getRandomUser();


