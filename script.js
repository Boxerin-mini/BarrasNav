
const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

        toggle.addEventListener("click", () =>{
            sidebar.classList.toggle("close"); /*Se cierra la barra*/
        })

        /**Cambio de tema e iconos del switch */
        modeSwitch.addEventListener("click", () =>{
            body.classList.toggle("dark");

            if(body.classList.contains("dark")){
                modeText.innerText = "Modo Claro"
            }else{
                modeText.innerText = "Modo oscuro"
            }
        })