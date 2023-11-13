const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase = lowercase.map((letter) => letter.toUpperCase());
const numbers = "0123456789".split("");
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=".split("");

const firstPassword = document.querySelector("#firstPass");
const secondPassword = document.querySelector("#secondPass");

// click event for password generator button.
// button that generates two passwords and display them in the DOM.
const pwGenerator = document.querySelector("#pwGenerator-btn");
pwGenerator.addEventListener("click", () => {
  firstPassword.textContent = generatePass();
  secondPassword.textContent = generatePass();
  // add a class to the button to change the color to green when clicked,
  // indicating that the passwords are generated successfully.
  setTimeout(() => {
    document.querySelector("#pwGenerator-btn").classList.remove("btn-success");
    document.querySelector("#pwGenerator-btn").classList.add("btn-primary");
  }, 20);
  setTimeout(() => {
    document.querySelector("#pwGenerator-btn").classList.remove("btn-primary");
    document.querySelector("#pwGenerator-btn").classList.add("btn-success");
  }, 200);
});

const pwLengthText = document.querySelector("#pwLengthText");
const pwLength = document.querySelector("#pw-length");

// display the length of the password in the DOM.
pwLength.addEventListener("input", () => {
  pwLengthText.textContent = pwLength.value;
});

// function that's called to generate a password
function generatePass() {
  // default character array is lowercase letters.
  // if the user checks any of the uppercase letters, numbers, and symbols,
  // then the array will push all of those characters.
  const characters = [...lowercase];
  if (document.querySelector("#uppercase").checked) {
    characters.push(...uppercase);
  }
  if (document.querySelector("#numbers").checked) {
    characters.push(...numbers);
  }
  if (document.querySelector("#symbols").checked) {
    characters.push(...symbols);
  }

  // generate a random password based on the user's length selection
  const pwLength = document.querySelector("#pw-length").value;
  let password = "";
  for (let i = 0; i < pwLength; i++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    password += characters[randomNum];
  }
  return password;
}

// function that's called to copy the password to the clipboard by clicking
// on the password that's generated.
function copy(el) {
  var copiedPassword = el.innerText;
  navigator.clipboard.writeText(copiedPassword);
}

// add a class to the button to change the color to green when clicked,
// indicating that the passwords are copied in their clipboard.
document.querySelector("#firstPass").addEventListener("click", () => {
  setTimeout(() => {
    document.querySelector("#firstPass").classList.remove("btn-success");
    document.querySelector("#firstPass").classList.add("btn-primary");
  }, 20);
  setTimeout(() => {
    document.querySelector("#firstPass").classList.remove("btn-primary");
    document.querySelector("#firstPass").classList.add("btn-success");
  }, 200);
  copy(el);
});

document.querySelector("#secondPass").addEventListener("click", () => {
  setTimeout(() => {
    document.querySelector("#secondPass").classList.remove("btn-success");
    document.querySelector("#secondPass").classList.add("btn-primary");
  }, 20);
  setTimeout(() => {
    document.querySelector("#secondPass").classList.remove("btn-primary");
    document.querySelector("#secondPass").classList.add("btn-success");
  }, 200);
  copy(el);
});

const myModal = document.querySelector("#myModal");
const myInput = document.querySelector("#myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
