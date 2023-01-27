document.getElementById('calculate').addEventListener('click', function(){

    //getIncome input
      const incomeInput = document.getElementById('income-input');
  
      const newIncomeInputText = incomeInput.value;
      const newIncomeInputAmount = parseFloat(newIncomeInputText);
      //update balance
  
      const totalExpense = document.getElementById('total-expense');
  
      // const previousExpenseText = totalExpense.innerText;
      // const previousExpenseAmount = parseFloat(previousExpenseText);
  
      // const newExpenseTotal = parseFloat(previousExpenseAmount + newIncomeInputAmount);
  
      
  
      //Expense
  
      const foodValue = document.getElementById('food-value').value;
      const foodAmount = parseFloat(foodValue);
  
      const  rentValue = document.getElementById('rent-value').value;
      const rentAmount = parseFloat(rentValue);
      const clothValue = document.getElementById('cloth-value').value;
      const clothAmount = parseFloat(clothValue);
  
      const totalExpenseAmount = parseFloat(foodAmount + rentAmount + clothAmount);
  
      totalExpense.innerText = totalExpenseAmount;
      
      //Balance 
      const balance = document.getElementById('net-balance');
      const balanceAmount = balance.innerText;
      const balanceValue = parseFloat(balanceAmount);
  
      const newBalance = parseFloat(newIncomeInputAmount - totalExpenseAmount);
  
      balance.innerText = newBalance;
  
  
  
  })
  
  document.getElementById('save').addEventListener('click', function(){
       const savingInputValue = document.getElementById('saving-input').value;
  
       const savingValue = parseFloat(savingInputValue);
  
       const savingtext = document.getElementById('saving-amount')
       const saveparsent = parseFloat(savingValue * 100);
  
       savingtext.innerText = saveparsent;
  
       const remainingBalance = document.getElementById('remaining-balance');
        const previousBalance = document.getElementById('net-balance');
        const previousBalancetext = previousBalance.innerText;
        const previousBalanceAmount = parseFloat(previousBalancetext);
       const updateRemainingBalance = parseFloat(previousBalanceAmount - saveparsent);
  
       remainingBalance.innerText = updateRemainingBalance;
  
  })
  