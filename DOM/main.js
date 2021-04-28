
const btn = document.querySelector('.btn');
/* 
btn.addEventListener('click',(e) => {
    (e).preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';

    document.querySelector('body').classList.add('bg-dark');
}); */

btn.addEventListener('mouseover', (e) => {
    (e).preventDefault();
    btn.style.background = 'red';
})

btn.addEventListener('mouseout',(e) => {
    (e).preventDefault();
    btn.style.background = 'black';
})

const myForm = document.querySelector('#my-form');

const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');



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

  
if (document.readyState !== "loading") {
  async function getUserData() {
    await axios.get(`https://crudcrud.com/api/6e426ee533da4525bfbd6e7524250be2/users`).then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        console.log("creating ", data.data[i]);
        addNewLineElement(data.data[i]);
      }
    });
  }
  getUserData();
}

  var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage
  i = keys.length; //6
console.log("keys", keys);
let stringifiedDetailsOfPeople, detailsOfPeople;

myForm.addEventListener('submit', async(e)=> {
    e.preventDefault();

    const emailInput = document.getElementById("email").value;
    const nameInput = document.getElementById("name").value;
    if(nameInput === '' || emailInput === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields';

        setTimeout(()  => msg.remove(), 3000)
    }
    else{
        
        if (emailInput.length > 0 && nameInput.length > 0) {
          let object = {
            name: nameInput,
            emailId: emailInput //unique
          };
          //localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
          const response = await axios
          .post('https://crudcrud.com/api/6e426ee533da4525bfbd6e7524250be2/users',object)
          
          //addNewLineElement(response.data);  
          
        
          addNewLineElement(response.data);
        }

        function addNewLineElement(object){
        const li = document.createElement('li');
        const del = document.createElement('button');
        del.className = 'del'
        del.innerHTML = 'Delete';
        del.style.backgroundColor = 'grey';
        del.style.marginLeft = '20px';
        
     
        
        
        li.appendChild(document.createTextNode(`${object.name} : ${object.emailId}`));
        li.appendChild(del);
        userList.appendChild(li);
       
        del.addEventListener('click',(e)=>{
            e.preventDefault();
           
            axios.delete(`https://crudcrud.com/api/6e426ee533da4525bfbd6e7524250be2/users/${object._id}`)
            .then((res) =>{
              userList.removeChild(li);
            })
          
           
        })
     
        name.value = '';
        email.value = '';
        }
    }
});




const getUsers = axios
.get('https://crudcrud.com/api/6e426ee533da4525bfbd6e7524250be2/users').then(data => console.log(data));



