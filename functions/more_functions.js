function displayMailingLabel(name, address, city, state, zip) {
    console.log("Name: " + name );
    console.log("Address: " + address);
    console.log("City: " + city);
    console.log("State: " + state);
    console.log("Zip: " + zip);
}

function addNumbers(num1, num2) {
    console.log(num1 + num2);
}

function displayReceipt(totalDue, amountPaid) {
    const changeDue = totalDue - amountPaid;
    console.log("totalDue: $" + totalDue);
    console.log("amountPaid: $" + amountPaid);
    console.log("changeDue: $" + changeDue);
}


displayMailingLabel("Jaquell", "123 Main Street", "New York", "NY","12345");
displayMailingLabel("Stacy", "123 Cool Road", "New York", "NY","12345");

addNumbers(250, 250);
addNumbers(100, 375);



displayReceipt(50, 250);
displayReceipt(50, 50);
displayReceipt(50, 10);
