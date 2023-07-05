//getting button from DOM
var addExpenseButton = document.getElementById("expenseBtn");

//if the button is clicked, get expenses from the user
addExpenseButton.addEventListener("click", function () {
  var expenseForm = addExpenseForm();
  var clickedElement = document.getElementById("expForm");
  if (clickedElement.classList.contains("expenseForm")) {
    clickedElement.classList.toggle("expand");
  }
  //wait for submit button 
  var submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click",function(event){
    event.preventDefault(); // Prevent default form submission
    
    displayExpense(expenseForm);
    expenseForm.reset(); // Reset the form fields
    expenseForm.parentNode.removeChild(expenseForm);
  });
});

var expensesList = document.getElementById("expensesList");

expensesList.addEventListener("click", function(event) {
  var clickedElement = event.target;
  if (clickedElement.classList.contains("expLI")) {
    clickedElement.classList.toggle("expand");
  }
});

function displayExpense( expenseForm) {
    //add expense to the array
  var ul = "";
  var i;
  //getting the expense category
  var selectedValue = document.querySelector('input[name="cat"]:checked').value;
  for (i = 0; i < 2; i++) {
    ul+= expenseForm.elements[i].value + "<br>";
  }

  ul+= selectedValue + "<br>";
  var date = new Date();
  ul+= date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + "<br>";

  document.getElementById("expensesList").innerHTML += '<li class = "expLI">'+ul+'</li>';
}

//function to add buttons and boxes to accept users input
function addExpenseForm() {
  //getting div
  var expenseForm = document.getElementById("expForm");
  expenseForm.innerHTML = `
        <form id="expenseInfo" class = "expenseForm"> 
        <p>Name<br>
        <input type="text" name="name" class = "txt"><br><br></p>
        <p>Cost<br>
        <input type="text" name="cost" class = "txt"><br><br></p>
        <p><label>
        <input type="radio" name="cat" value="Food">
        Food
        </label></p>
        <p><label>
        <input type="radio" name="cat" value="Rent and Utilities">
        Rent and Utilities
        </label><br></p>
        <p><label>
        <input type="radio" name="cat" value="Tuition and Classes">
        Tuition and Classes
        </label><br></p>
        <p><label>
        <input type="radio" name="cat" value="Fun">
        Fun
        </label></p>
        <p><label>
        <input type="radio" name="cat" value="Miscellaneous">
        Miscellaneous
        </label><br><br></p>
        <input type="submit"  id = "submitBtn">
        </form>
    `;
  return document.getElementById("expenseInfo");
}


