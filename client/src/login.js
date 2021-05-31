class Login {
    constructor(username, password)
    {
        this.username = username;
        this.password = password;
    }
    loginUser()
    {
        var msg = document.getElementById('message');
        if(this.validate())
        {
            var xhr = new XMLHttpRequest();
            var response;
            xhr.onreadystatechange = function()
            {
                if(this.readyState == 4 && this.status == 200)
                {
                    response = JSON.parse(this.responseText);
                    msg.innerHTML = response.messages;
                    if(response.ok)
                    {
                        setTimeout(location.replace("http://localhost/testing/client/book.php"), 10000);
                    }
                }
            }
            var data = new FormData();
            data.append("username", this.username.value);
            data.append("password", this.password.value);
            xhr.open("POST", "http://localhost/Testing/service/?login", true);
            xhr.send(data);
            
        }
    }
    validate()
    {
        var msg = document.getElementById('message');
        if(this.password.value < 1 && this.username.value < 1)
        {
            msg.innerHTML = "A felhasználónév és a jelszó nem lehet üres!";
            return false;
        }
        if(this.username.value < 1)
        {
            msg.innerHTML = "A felhasználónév nem lehet üres!";
            return false;
        }
        if(this.password.value < 1)
        {
            msg.innerHTML = "A jelszó nem lehet üres!";
            return false;
        }
        return true;
    }
}

export default Login;