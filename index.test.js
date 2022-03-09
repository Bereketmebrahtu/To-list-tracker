test("Submitting a new task adds it to the list", () => {

  //get the input
  const myInput = document.querySelector("input");
  // enter test data into inputs
  myInput.value = "Have some coffee";
  // submit the form
  const submitButton = document.querySelector("span");
  submitButton.click();
   // verify that the page contains the expected result
   const result = document.querySelector("li");
   equal(result.textContent, "Have some coffee");
   // reset the page so it doesn't affect anything else
   result.textContent = ""; 


});

test("Checking an entry marks it as complete", () => {
//get the input
// reset the page so it doesn't affect anything else
result.textContent = ""; 
});

test("Deleting an entry removes it from the list", () => {
//get the input
// reset the page so it doesn't affect anything else
result.textContent = ""; 
});