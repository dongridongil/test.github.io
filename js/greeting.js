const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



    function OnLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME)
        const username = loginInput.value;

        localStorage.setItem(USERNAME_KEY , username);
        paintGreetings(username);
    }

    

///로컬스토리지에 유저정보가없으면 null값을반환할거야
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username){
    greeting.innerText = `안녕  ${username} ~`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", OnLoginSubmit);
}else{
    paintGreetings(savedUsername);
    
}
