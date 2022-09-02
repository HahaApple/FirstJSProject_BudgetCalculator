//Some value
//let budget = 2000;

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
const doneBtn = document.getElementById('done-btn'); 
const doneSpending = document.getElementById('done-spending');
const totalSpending = document.getElementById('total-spending');


// Assign UI budget number
//inputBudget.textContent = budget;
   
//Listen for Go
setBudget.addEventListener('click', function(){
    let budget = parseInt(inputBudget.value);
   
    if(budget >= 50) {
       setMessage(`You've set your saving goal to $${budget}`);
       spending.style.display = 'block';
       
    } else if(budget < 50) {
        setMessage(`Please be serious and Save sometihng!!!`);
        inputBudget.value = 'Please set your monthly goal';
        spending.style.display = 'none';
    }

    // Set Message
    function setMessage(msg) {
        budgetMessage.innerHTML = msg;
    }
});

//Listen for Submit
spendingForm.addEventListener('submit', addSpending);

// Submit Spending
function addSpending(e) {
    if(description.value === '' || amount.value === '' || amount.value < 0) {
        alert('Please add your spending.');
    }
   
    const list = document.getElementById('spending-list');

    // Create tr element
    const row = document.createElement('tr');

    // Insert cols
    row.innerHTML = `
     <th scope="row">${description.value}</th>
    <td>$${amount.value}</td>
    <td><a href='#' class="delete">X</a></td>
    `;
    
    // Append Child to list
    list.appendChild(row);

    // Display Spending Table
    spendingTable.style.display = 'block';
    doneBtn.style.display = 'block';

    // Add Total Spending
    

    // Add total function
    

    let total = 0;
    let spendingArr = [];
    function addTotal(arr) {
       
        
       total += arr[i];
       
    
    }
    addTotal(spendingArr.push(parseInt(amount.value)));

    console.log(spendingArr);
    console.log(total);



    // Set Total spending
    setMessage(`Total spending: $${total}`);

    // Set Message
    function setMessage(msg) {
    totalSpending.innerHTML = msg;
    }
    
    description.value = '';
    amount.value = '';

    e.preventDefault();
}