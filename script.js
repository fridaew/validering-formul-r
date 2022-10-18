const form = document.querySelector('#validationForm');
const button = document.querySelector('.btn');
const nonemessage=document.querySelector('.d-none')


const setSuccess = () => {
    return true;
}

const setError = () => { 
   return false;
}

const validateText = (id) => {
    
    const name = document.querySelector(id)
    const regEx = /^[a-zA-Zéüöêåäø.\-_']+$/

    
    if(name.value.trim() === '') { 
        console.log(`You have to write a valid ${name.name}`); 
        return setError(name); 
    } 
    
    else if (name.value.length < 2 ) { 
        console.log('Name must contain at least 2 characters.'); 
        return setError(name) 
    }

     else if (!regEx.test(name.value)){
        console.log('Name must contain letters only.');
        return setError(name)
     }
     else {
         return setSuccess(name) // här kallar vi på setSucces 
         }
}

const validateEmail = (id) => {
    
    const email = document.querySelector(id)

    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/
   
    if(email.value.trim() === '') {
        console.log('Email can not be empty.');
        
        return setError(email)  
     } 
     else if (!regExp.test(email.value)) {
        console.log('Email is not valid.');
        return setError(email)
     }
     else {
         return setSuccess(email)
     }

}

const validatePassword = (id) => {

    const password = document.querySelector(id)
    
   if(password.value.trim() === ''){
        console.log('You need to write password');
      return setError(password)
    } 

   else if (password.value.trim().length < 6 || password.value.trim().length > 15 ){
        console.log('Password min 6 max 15 characters');
        return setError (password)
        }

   else {
       return setSuccess(password)
       }  

}

const validateRepeatPassword = (id) => {

    const repeatPassword = document.querySelector(id)
    const password= document.querySelector('#password')
    

    if (repeatPassword.value.trim() === ''){
         console.log('You need to repeat password');
         return setError(repeatPassword)
    }
    
    else if(password.value.trim() !== repeatPassword.value){
        console.log('password does not match');
        return setError (repeatPassword)
    }

    else {
        return setSuccess (repeatPassword)
    }
    
}

const validateCheckbox = (id) => {

    const checkbox = document.querySelector(id)
    
    if(!checkbox.checked){
        console.log('You need to check the box');
        return setError(checkbox)
    }

    else {
        return setSuccess(checkbox)
    }
}


form.addEventListener('submit', e => {
    
e.preventDefault()

   
  
const errors =[]; 

     for(let i=0; i < form.length; i++){ 

    
        
    const inputId = '#' + form[i].id 


        if (form[i].type === 'text') { 
            errors[i] = validateText(inputId) 

        }
         else if(form[i].type === 'email') {
            errors[i] =validateEmail(inputId)
        }
         else if (form[i].type === 'password') {
            if (form[i].id === 'repeatPassword') {
                errors[i]= validateRepeatPassword(inputId)
            } 
            else {
                errors[i]=validatePassword(inputId)
                }
            }
        
         else if (form[i].type === 'checkbox') {
            errors[i] = validateCheckbox(inputId)
        } 
    }

    console.log(errors);

    const user ={
        Firstname:(firstName).value,
        Lastname:(lastName).value,
        Email:(email).value,
        Password:(password).value
    }

    if(errors.includes(false)) { 
        
        nonemessage.classList.remove('d-none');
     }
    else {
        nonemessage.classList.add('d-none');
        console.log('YEY, alla fält är rätt ifyllda!');
        console.log(user)
    }


})