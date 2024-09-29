function calculate() {
  // Get values
  let num1 = document.getElementById("firstnumber").value;
  let num2 = document.getElementById("secondnumber").value;
  let radioButtonGroup = document.getElementsByName("operation");
  let selectedOperation = Array.from(radioButtonGroup).find(radio => radio.checked);

  // Clear previous errors
  clearErrors();

  // Validate input
  let isValid = validateForm(num1, num2, selectedOperation);

  if (isValid) {
    let result = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (selectedOperation.value) {
      case 'addition':
        result = num1 + num2;
        break;
      case 'subtraction':
        result = num1 - num2;
        break;
      case 'multiplication':
        result = num1 * num2;
        break;
      case 'division':
        if (num2 === 0) {
          document.getElementById("lastname-error").innerHTML = "Cannot divide by zero!";
          return;
        }
        result = num1 / num2;
        break;
      default:
        break;
    }
    
    document.getElementById("result").innerHTML = `Result is: ${result}`;
  }
}

function validateForm(num1, num2, operation) {
  let isValid = true;

  // Check if first number is entered and valid
  if (num1 === "") {
    document.getElementById("firstname-error").innerHTML = "Please enter first number";
    isValid = false;
  } else if (isNaN(num1)) {
    document.getElementById("firstname-error").innerHTML = "Please enter a valid number";
    isValid = false;
  }

  // Check if second number is entered and valid
  if (num2 === "") {
    document.getElementById("lastname-error").innerHTML = "Please enter second number";
    isValid = false;
  } else if (isNaN(num2)) {
    document.getElementById("lastname-error").innerHTML = "Please enter a valid number";
    isValid = false;
  }

  // Check if an operation is selected
  if (!operation) {
    document.getElementById("operation-error").innerHTML = "Select any of the operations";
    isValid = false;
  }

  return isValid;
}

function resetForm() {
  document.getElementById("mathForm").reset();  // Resets all form fields
  document.getElementById("result").innerHTML = ""; // Clears the result
  clearErrors();  // Clears error messages
}

function clearErrors() {
  document.getElementById("firstname-error").innerHTML = "";
  document.getElementById("lastname-error").innerHTML = "";
  document.getElementById("operation-error").innerHTML = "";
}
