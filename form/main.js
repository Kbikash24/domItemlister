// Get the form element
const form = document.querySelector("#my-form");
const msg = document.querySelector(".msg");
const usersList = document.querySelector("#users");

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

  // Create a list item element to display the new user
  const li = document.createElement("li");
  li.innerHTML = `${user.name} - ${user.email}`;

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
    localStorage.setItem("users", JSON.stringify(users));

  }
  // craete a edit button
  const editBtn = document.createElement("button");
  editBtn.innerHTML= "Edit"
  editBtn.classList.add("edit-btn")
  editBtn.style.padding='3px 9px'
  editBtn.style.borderRadius='5px'
  editBtn.style.margin='5px'
  editBtn.onclick= function(){
    let users = JSON.parse(localStorage.getItem("users"));
    document.getElementById("name").value =user.name;
      document.getElementById("email").value = user.email;
      localStorage.removeItem("user");


  }
li.append(editBtn)

  
  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = " Delete";
  deleteBtn.style.padding='3px 3px'
  deleteBtn.style.borderRadius='5px'
  deleteBtn.style.margin='2px'
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function() {
    let users = JSON.parse(localStorage.getItem("users"));

    // Filter out the user that you want to delete
    users = users.filter((u) => u.email !== user.email);

    localStorage.setItem("users", JSON.stringify(users));

    // Remove the list item element from the UI
    li.remove();
  
  
  };

  // Append the delete button to the list item
  li.appendChild(deleteBtn);

  // Append the list item to the unordered list element
  usersList.appendChild(li);

  // Clear the form fields
  form.reset();
});
// Create an edit button
const editBtn = document.createElement("button");
editBtn.innerHTML = "Edit";
editBtn.classList.add("edit-btn");
li.appendChild(editBtn);
editBtn.addEventListener("click", (e) => {
  e.preventDefault();
  li.classList.toggle("edit-mode");
});

