class View{
    constructor()
    {
        this.init();
    }
    init()
    {
        var element = document.createElement('section');
        element.setAttribute('class', 'login');
        element.innerHTML = `<p class="display-1">Book Site</p>
                            <p class="h3" id="message"></p>
                            <form id="loginPanel">
                                <label  class="h2" for="username">Felhasználónév: </label><br>
                                <input type="text" id="username"><br>
                                <label  class="h2" for="password">Jelszó: </label><br>
                                <input type="password" id="password"><br><br>
                                <button class="btn btn-primary" id="log-btn">Belépés</button><br><br>
                                <button class="btn btn-primary" id="showReg">Még nem regisztrált? Kattintson ide!</button><br><br>
                            </form>

                            <div id="rgPanel">
                                <form id="registerPanel">
                                    <label class="h2" for="username">Felhasználónév: </label><br>
                                    <input type="text" id="user"><br>
                                    <label class="h2" for="email">E-mail cím: </label><br>
                                    <input type="text" id="email"><br>
                                    <label class="h2" for="password">Jelszó: </label><br>
                                    <input type="password" id="pass"><br><br>
                                    <button class="btn btn-primary" id="reg-btn">Regisztráció</button>
                                </form>
                            </div>`;

        element.classList.add('container');

        document.querySelector('.app').appendChild(element);
    }
    registerPanel(object)
    {
        object.onclick = (evt) => {
            evt.preventDefault();
            document.getElementById('rgPanel').style.display = "block";
        };
    }
}

export default View;