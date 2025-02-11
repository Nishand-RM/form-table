document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodChoices = document.querySelectorAll('input[name="food"]:checked');
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Validate that at least 2 food choices are selected
    if (foodChoices.length < 2) {
        alert("Please select at least two food choices.");
        return;
    }

    const food = Array.from(foodChoices).map(f => f.value).join(", ");

    // Add to table
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = firstName;
    newRow.insertCell(1).textContent = lastName;
    newRow.insertCell(2).textContent = email;
    newRow.insertCell(3).textContent = address;
    newRow.insertCell(4).textContent = pincode;
    newRow.insertCell(5).textContent = gender;
    newRow.insertCell(6).textContent = food;
    newRow.insertCell(7).textContent = state;
    newRow.insertCell(8).textContent = country;

    // Clear form
    document.getElementById('userForm').reset();
});
