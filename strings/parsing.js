let name = "Brenda Kaye";
let firstName = "Brenda";
let lastName = "Kaye";

function getFirstName(firstName) {
    let start = firstName.indexOf(" ");
    return firstName.substring(start);
}

function getLastName(lastName) {
    let end = lastName.indexOf(" ") + 1;
    return lastName.substring(end);
}

 console.log("Name: " + name);
console.log("First name: " + getFirstName(firstName));
console.log("Last name: " + getLastName(lastName));

