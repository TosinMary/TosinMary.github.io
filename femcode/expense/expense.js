function addMoney() {
var totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
var money = parseInt(document.getElementById("money").value);
if (money === "" || isNaN(money)) {
	alert("Please Enter Valid Number");
}
else {
	totalBudget += money;
	currentBalance += money;
	document.getElementById("totalBudget").innerHTML = totalBudget;
	document.getElementById("currentBalance").innerHTML = currentBalance;
}
}

function addExpense() {
	var totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
	var expenseName = document.getElementById("expenseName").value;
	var expenseAmount = parseInt(document.getElementById("expenseAmount").value);

	if (expenseName === "") {
		alert("Please Enter Valid Expense Name");
	}
	 else if (expenseAmount === "" || isNaN(expenseAmount)) {
		alert("Please Enter Valid Expense Amount");
	}
	else {
	   if (expenseAmount <= currentBalance) { 
		   currentBalance -= expenseAmount;
		   document.getElementById("currentBalance").innerHTML = currentBalance;
		   var para = document.createElement("P");

		   para.innerHTML = `Expense Name : ${expenseName} <br> Expense Amount : ${expenseAmount} <br> Current Balance : ${currentBalance}`;

		   document.getElementById("addedExpenses").appendChild(para);
	    }
	   else {
		alert("Sorry Your Expense Amount Is Higher Than Your Current Balance");
	    }
    }
}