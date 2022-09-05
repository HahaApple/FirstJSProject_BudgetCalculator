
//UI budget
const setBudget = document.querySelector('#set-budget'),
      inputBudget = document.querySelector('#input-budget'),
      submitBudget = document.querySelector('#submit-budget'),
      budgetMessage = document.querySelector('#budget-message');

//UI spending
const description = document.getElementById('description');
const amount = document.getElementById('amount');  
const spendingForm = document.getElementById('spending-form');
const spending = document.getElementById('spending'); 
const spendingTable = document.getElementById('spending-table');
const spendingList = document.getElementById('spending-list'); 
const doneBtn = document.getElementById('done-btn'); 
const doneSpending = document.getElementById('done-spending');
const totalMessage = document.getElementById('total-message');
const totalAmount = document.getElementById('total-amount');
const finalMessage = document.getElementById('final-message');
const amountList = [];

let total = 0;


// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // Listen for Go
    setBudget.addEventListener('click', setGoal);

    //Listen for Submit
    spendingForm.addEventListener('submit', addSpending);

    //Remove Item from list
    spendingList.addEventListener('click', removeItem);

    // Submit Done
    doneSpending.addEventListener('submit', submitDone);

}


function setGoal(e) {
    let budget = parseInt(inputBudget.value);
   
    if(budget >= 50) {
       setMessage(`You've set your saving goal to $${budget}`, 'green');
       //inputBudget.value = '';
       submitBudget.value = 'Change Goal';
       spending.style.display = 'block';
       
    } else if(budget < 50) {
        setMessage(`Please try to save sometihng!!!`, 'red');
        //inputBudget.value = 'Please set your monthly goal';
        //spending.style.display = 'none';
    }

    // Set Message
    function setMessage(msg, color) {
        budgetMessage.innerHTML = msg;
        budgetMessage.style.color = color;
    } 
    e.preventDefault();
};

// Submit Spending
function addSpending(e) {
    let spendingAmout = parseInt(amount.value);

    if(description.value === '' || spendingAmout === '' || spendingAmout < 0) {
        alert('Please add your spending.');
    } else {
        

        const list = document.getElementById('spending-list');

        // Create tr element
        const row = document.createElement('tr');

        // Add content to element
        row.innerHTML = `
        <th scope="row">${description.value}</th>
        <td>$${spendingAmout}</td>
        <td><a href='#' class="delete">X</a></td>
        `;
        
        // Append Child to list
        list.appendChild(row);

        // Add total
        amountList.push(spendingAmout);
        if(amountList.length > 0) {
        total = amountList.reduce((pre, curr) => pre + curr, 0); }
        //addTotalAmount();
        totalAmount.innerHTML = total;

        setMessage(`Total spending: $${total}`);

        // Display Spending Table
        spendingTable.style.display = 'block';
        doneBtn.style.display = 'block';

    // Set Message
    function setMessage(msg) {
        
        totalMessage.innerHTML = msg;
    } 
        description.value = '';
        amount.value = '';
    }
    e.preventDefault();
}

// Remove Item from List
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}


// Submit Done
function submitDone(e) {
    let totalExpense = parseInt(totalAmount.innerHTML);
    let budget = parseInt(inputBudget.value);
    let balance = Math.abs(budget - totalExpense);
    
    if(budget - totalExpense > 0) {
        setMessage(`Congrats! You spent ${balance} less than your budget!`, 'green');
    } else {
      setMessage(`Ooops! You spent ${balance} more than your budget!`, 'red');
    }
    // Set Message
    function setMessage(msg, color) {
        finalMessage.innerHTML = msg;
        finalMessage.style.color = color;
    }
    
    
    e.preventDefault();
}