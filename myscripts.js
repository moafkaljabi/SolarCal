function getInputValues() {
  // Selecting the input element and get its value
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let result = num1 / ((num2 * 200 * 30) / 1000);
  // Displaying the value
  //   console.log(num1 / ((num2 * 200 * 30) / 1000));
  alert(result);
  
  
}
