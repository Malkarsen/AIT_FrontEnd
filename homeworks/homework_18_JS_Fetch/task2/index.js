const USER_CONTAINER = document.querySelector(".user-container");
const USER_NAME = document.querySelector(".user-name");
const USER_GENDER = document.querySelector(".user-gender");
const USER_NATIONALITY = document.querySelector(".user-nationality");
const USER_EMAIL = document.querySelector(".user-email");
const URL = "https://randomuser.me/api/?inc=gender,name,nat,email";

const loadUser = async () => {
  const response = await fetch(URL, { method: "GET" });
  const result = await response.json();
  const user = result.results[0];

  if (response.ok) {
    const { name, gender, nat: nationality, email } = user;
    const { first: firstName, last: lastName } = name;

    USER_NAME.textContent = `${firstName} ${lastName}`;
    USER_GENDER.textContent = gender;
    USER_NATIONALITY.textContent = nationality;
    USER_EMAIL.textContent = email;
  }
};

loadUser();
