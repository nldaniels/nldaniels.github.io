    // JavaScript code for form validation

      // Retrieve the input field value
const inputField = document.getElementById('inputField');
const message = document.getElementById('message');

	// Prevent form from submitting
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
   const inputValue = inputField.value.trim();
   if(inputField == ''){
      console.log('Input is required!'); 
      event.preventDefault();
   }
   // Regular expression pattern for alphanumeric input
   const inputRegex = /^[a-zA-Z0-9]+$/;
      // Check if the input value matches the pattern
   if (!inputRegex.test(inputValue)) {
        // Invalid input: display error message
      console.log('Error: Input must be letters and numbers only!');
      message.textContent = 'Error: Input must be letters and numbers only!';
      event.preventDefault();
       // Valid input: display confirmation and submit the form
   } else {
      console.log('Form has been submitted successfully!');
      message.textContent = 'Form has been submitted successfully!';
      form.reset();
   }
});