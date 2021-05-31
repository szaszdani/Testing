import Login from './src/login.js';
import Register from './src/register.js';
import View from './src/view.js';

document.addEventListener('DOMContentLoaded', function(){
    //View
    var view = new View();
    view.registerPanel(document.getElementById('showReg'));

    //Login
    var login = new Login(document.getElementById('username'), document.getElementById('password'));
    document.getElementById('log-btn').onclick = (evt) => {
        evt.preventDefault();
        login.loginUser();
    };

    //Register
    var reg = new Register(document.getElementById('user'), document.getElementById('pass'), document.getElementById('email'));
    document.getElementById('reg-btn').onclick = (evt) => {
        evt.preventDefault();
        reg.registerUser();
    };
});

