/* 1.task
e Create an empty array called passwords to store multiple passwords.Add three passwords to the array using push().For each password 
in the array:Convert the password to lowercase and print it. Check if the password length is at least 8 characters long: If it is,
 print "Strong password". If it is not, print "Weak password". Count how many letter are in each password using a for loop and print the
  result. Remove the first password from the array using shift() and print the updated array.Add a new password to the beginning of the 
  array using unshift() and print the updated array.  */

const passwords = [];
passwords.push("QWErtuul", "bterwsW", "jsJSnnaaa");
console.log(passwords);

///lowerCase
for (let i = 0; i < passwords.length; i++) {
    console.log(passwords[i].toLowerCase());
}

///strong and weak passwords
for (let i = 0; i < passwords.length; i++) {
    let result = passwords[i].length >= 8 ? `${passwords[i]} - Strong Password ` : `${passwords[i]} - weak password `
    console.log(result);
}

///passwords length
for (let i = 0; i < passwords.length; i++) {
    let lengthNumber = passwords[i].length
    console.log(` ${passwords[i]} lengh is ${lengthNumber}`);
}

///shift
passwords.shift();
console.log(passwords);

////unshift
passwords.unshift("xamurabi");
console.log(passwords);
