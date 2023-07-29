// An array to store user details
var userDetails = [];
function storeAndDisplay() {
  // Get the input values
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const b = document.querySelector('input[name="b"]:checked').value;

  // Create an object to store the user details
  const userDetails = {
    name: name,
    address: address,
    number: number,
    email: email,
    b: b,
  };

  let userDetailsArray = JSON.parse(localStorage.getItem('userDetailsArray')) || [];

  // Add the new user details to the array
  userDetailsArray.push(userDetails);

  // Store the updated array in local storage as a JSON string
  localStorage.setItem('userDetailsArray', JSON.stringify(userDetailsArray));

  // Display the user details
  //displayUserDetails();

  alert('Details Entered Successfully!!!.....Thank You');
}


function displayUserDetails() {
  // Get the display area element
  const userDetailsJSON = localStorage.getItem('userDetails');
  const userDetails = JSON.parse(userDetailsJSON);

  // Check if data is present in Local Storage
  if (userDetails) {
    const displayDiv = document.getElementById('displayDetails');
    displayDiv.innerHTML = `
      <p>Name: ${userDetails.name}</p>
      <p>Address: ${userDetails.address}</p>
      <p>Contact Number: ${userDetails.number}</p>
      <p>Email: ${userDetails.email}</p>
      <p>BloodGroup: ${userDetails.b}</p>
      
    `;
  }
}
displayUserDetails()