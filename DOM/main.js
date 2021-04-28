
const btn = document.querySelector('.btn');

/*btn.addEventListener('click',(e) => {
    (e).preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';

    document.querySelector('body').classList.add('bg-dark');
});*/

btn.addEventListener('mouseover', (e) => {
    (e).preventDefault();
    btn.style.background = 'red';
})

btn.addEventListener('mouseout',(e) => {
    (e).preventDefault();
    btn.style.background = 'black';
})

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

myForm.addEventListener("DOMContentLoaded", () => {
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

  var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage
  i = keys.length; //6
console.log("keys", keys);
let stringifiedDetailsOfPeople, detailsOfPeople;

function onSubmit(e){
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields';

        setTimeout(()  => msg.remove(), 3000)
    }
    else{
        const emailId = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        if (emailInput.value.length > 0 && nameInput.value.length > 0) {
          const object = {
            name: name,
            emailId: emailId //unique
          };
          localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
          axios
          .post('https://crudcrud.com/api/d8ce09a91dbb48ff810f441b9214bf56/users',{object})
          .then(addNewLineElement(object));
         // addNewLineElement(object);
        }

        function addNewLineElement(object){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
     
        nameInput.value = '';
        emailInput.value = '';
        }
    }
}



const getUsers = axios
.get('https://crudcrud.com/api/d8ce09a91dbb48ff810f441b9214bf56/users').then(data => console.log(data));



