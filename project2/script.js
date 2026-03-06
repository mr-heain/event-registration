// Test if the file is linked correctly
console.log("Script loaded successfully");

document.getElementById('regForm').addEventListener('submit', function(e) {
    
    // 1. This stops the refresh!
    e.preventDefault(); 

    // 2. Get values
    let n = document.getElementById('name').value;
    let em = document.getElementById('email').value;
    let ph = document.getElementById('phone').value;
    let d = document.getElementById('dob').value;
    let ev = document.getElementById('event').value;
    let col = document.getElementById('college').value;
    
    // Get radio buttons safely
    let gen = document.querySelector('input[name="g"]:checked');
    let mod = document.querySelector('input[name="m"]:checked');
    let check = document.getElementById('confirm').checked;

    // 3. The Validation Check
    if (n == "" || em == "" || ph == "" || d == "" || ev == "" || col == "" || !gen || !mod) {
        alert("Please fill all fields!");
        return; // Stops here
    }

    if (!check) {
        alert("Please check the confirmation box!");
        return;
    }

    // 4. Add to Table if all data is there
    let table = document.getElementById('pTable').getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    row.insertCell(0).innerHTML = n;
    row.insertCell(1).innerHTML = em;
    row.insertCell(2).innerHTML = ph;
    row.insertCell(3).innerHTML = ev;
    row.insertCell(4).innerHTML = mod.value;

    alert("Registration Successful!");
    this.reset(); // Clears the form
});