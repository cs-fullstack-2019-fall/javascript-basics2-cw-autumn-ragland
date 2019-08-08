// EX 1
// Create two variables. One should equal “My name is: “ and the other should equal your name. Print the two variables in one print message.
var myName = "Autumn";
var greeting = "My name is: ";
alert(greeting + myName);

// EX 2
//Ask the user “What is your balance”. Make sure to save that answer in a variable balance. Subtract 10 from that balance. Print "You lost $10. Your new balance is: [THE BALANCE]".
var balance = parseInt(prompt("What is your balance?"));
var newBalance = balance - 10;
alert("You lost $10. Your new balance is: " + newBalance);

// EX 3
// Create a variable. Ask the user to “Enter your number grade”. Ask the user “Enter your extra credit". Print the grade plus extra credit.
var grade = parseInt(prompt("Enter your grade number"));
var extraCredit = parseInt(prompt("Enter your extra credit"));
alert(grade + extraCredit);

// EX 3
// Create a variable called balance and save it after asking the user “What is your balance?”. Create a variable called deduction and save it when asking the user “How much do you want to deduct?” Print the remaining balance after subtracting the deduction.
var balance3 = prompt("What is your balance?");
var deduction = prompt("How much do you want to deduct");
alert("Remining balance: " + (balance3 - deduction));
