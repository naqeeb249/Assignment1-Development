
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

myForm.addEventListener('DOMContentLoaded',(e) => {
    console.log(localStorage.getItem('name'));
document.querySelector('#name').innerHTML = localStorage.getItem('name');


})

function onSubmit(e){
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields';

        setTimeout(()  => msg.remove(), 3000)
    }
    else{
        localStorage.setItem('name',nameInput.value);
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}





