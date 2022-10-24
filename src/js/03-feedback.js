import { throttle } from 'lodash';

const form = document.querySelector('form');
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
const STORAGE_KEY = 'feedbak-form-state';

const formTemp = {email:'', message:'',};
checkTemp();
loadPage();
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput(e){
    e.preventDefault();
    formTemp[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formTemp));
}

function checkTemp(){
    const localTemp = JSON.parse(localStorage.getItem('feedbak-form-state'));
    if(localTemp){
        formTemp.email = localTemp.email;
        formTemp.message = localTemp.message;
    }
}

function loadPage(){
    input.value = formTemp.email;
    textarea.value = formTemp.message;
}

function onSubmit(e){
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.clear();
    e.currentTarget.reset();
}






