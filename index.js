import "../styles.css";

const submitButton = document.getElementById("submit");

// const dt = axios
//   .get("https://crudcrud.com/api/36627c8fcc0247d3a1c5b0344fc56a74/getBioData")
//   .then((data) => console.log(data));
console.log("b");
setTimeout(() => console.log("c"), 0);
console.log("d");

document.addEventListener("DOMContentLoaded", () => {
  console.log("vscode");
  localStorage.getItem();
});

if (document.readyState !== "loading") {
  console.log("vscode");

  var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage
    i = keys.length; //6
  console.log("keys", keys);
  let stringifiedDetailsOfPeople, detailsOfPeople;

  // 6 to 0
  while (i--) {
    //i==2
    if (keys[i].match(/userDetails/g)) {
      //we only care about keys that start with userDetails
      //this is called regex matching
      stringifiedDetailsOfPeople = localStorage.getItem(keys[i]);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);

      addNewLineElement(detailsOfPeople);
    }
  }
}
// const listOfPeople = []
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const object = {
      name: name,
      emailId: emailId //unique
    };
    localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
    // localStorage.setItem("userDetailEmail" + emailId, emailId);
    // listOfPeople.push(object)
    addNewLineElement(object);
  }
});

function addNewLineElement(object) {
  const ul = document.getElementById("listOfPeople");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.name + " " + object.emailId + " ")
  );
  // li.appendChild()
  console.log(document.createElement("i"));
  const a1 = document.createElement("input");
  a1.id = "yash";
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", () => {
    console.log(object.name);
    document.getElementById("");
  });
  a1.className = "delete";
  a1.style.border = "2px solid green";
  console.log(a1);
  li.appendChild(a1);

  const a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", () => {
    // axios.delete(`${apiendpoint}/registeruser/${object._id}`);
    li.remove();
  });
  a.className = "delete";
  a.style.border = "2px solid red";
  console.log(a);
  li.appendChild(a);
  console.log(li);

  ul.appendChild(li);
  console.log(object);
}

const obj = '{"name":"yash PRASAD","emailId":"yash@gmail.com"}';

console.log("obj", JSON.parse(obj).emailId);
