// Get the form element
const form = document.querySelector("#my-form");
const msg = document.querySelector(".msg");

// Listen for the submit event on the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the user's name and email
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  // check if name and email are not empty
  if (!name) {
    msg.innerHTML = "Please input the name";
    msg.style.color="red"
    msg.style.font="bold"
    return;
  }
  if (!email) {
    msg.innerHTML = "Please input the email";
    return;
  }

  // Create an object to store the user's details
  const user = {
    name,
    email
  };

  // Check if there is already a "users" key in local storage
  if (localStorage.getItem("users")) {
    // If so, get the existing users
    let users = JSON.parse(localStorage.getItem("users"));

    // Add the new user to the array of users
    users.push(user);

    // Save the updated array of users to local storage
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    // If not, create a new array with the new user
    const users = [user];

    // Save the new array of users to local storage
    localStorage.setItem("users", JSON.stringify(users));
  }
  msg.innerHTML = "";
  form.reset();
});
