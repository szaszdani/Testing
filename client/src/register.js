class Register {
    constructor(username, password, email)
    {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    registerUser()
    {
        var msg = document.getElementById('message');
        var rgPanel = document.getElementById('registerPanel');
        
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
                        msg.style.color = "green";
                    }
                    else
                    {
                        msg.style.color = "red";
                    }
                    
                }
            }
            var data = new FormData();
            data.append("user", this.username.value);
            data.append("pass", this.password.value);
            data.append("email", this.email.value);
            xhr.open("POST", "http://localhost/Testing/service/?regist", true);
            xhr.send(data);
            
        }
        this.resetPanel(rgPanel);
    }
    validate()
    {
        let msg = document.getElementById('message');
        if(this.username.value < 5 || this.username.value > 30 || this.username.value == 0)
        {
            msg.innerHTML = "A felhasználónév 5 és 30 karakter között kell legyen!";
            return false;
        }
        if(this.password.value < 7 || this.password.value > 18 || this.password.value == 0)
        {
            msg.innerHTML = "A jelszó 7 és 18 karakter között kell legyen!";
            return false;
        }
        if(this.email.value < 3)
        {
            msg.innerHTML = "Az e-mail cím nem felel meg! Példa: pelda.zoltan@gmail.com";
            return false;
        }
        return true;
    }
    resetPanel(rgPanel)
    {
        rgPanel.reset();
    }
}

export default Register;
