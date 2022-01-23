const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double');
const showMillionairesButton = document.getElementById('show-millionaires');
const sortButton = document.getElementById('sort');
const calculateWealthButton = document.getElementById('calculate-wealth');


let data = [];

getRandomUser()
getRandomUser();
getRandomUser();
getRandomUser();


//Fetch random user add money
async function getRandomUser(){
 const response = await fetch('https://randomuser.me/api/');
 const data = await response.json();

 const user = data.results[0];
 const newUser = {
     name: `${user.name.first} ${user.name.last}`,
     money : Math.floor(Math.random() * 1000000)
 }
 addData(newUser);
}


function doubleMoney(){
    data = data.map((user)=>{
        return { ...user , money:user.money * 2 }
    })

    updateDOM();
}

//Add new data 
function addData(object){
    data.push(object);
    updateDOM();
}

//Sort by Richest
function sortByRichest(){
    data.sort((a,b)=>b.money-a.money);
    updateDOM();

}

//Show Millionaries

function showMillionaries(){
    data = data.filter(user => user.money >1000000);
    updateDOM();

}



//Format number as money
function formatMoney(money){
  return  money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' ₺';
  
}

function updateDOM(providedData = data){
    //clear main div
        main.innerHTML = ' <h2><strong>Person</strong> Wealth</h2>';
        providedData.forEach(item=>{
            const element = document.createElement('div');
            element.classList.add('person');
            element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`
            main.appendChild(element);
        });
}


addUserButton.addEventListener('click',getRandomUser);
doubleMoneyButton.addEventListener('click',doubleMoney);
sortButton.addEventListener('click',sortByRichest);
showMillionairesButton.addEventListener('click',showMillionaries);

