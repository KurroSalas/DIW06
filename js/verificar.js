
window.addEventListener('load', iniciar);

function iniciar() {

    function fvalor(e) {

        let cadena = e.target.value;


        console.log(cadena.length);

        if (cadena.length > 4) {
            e.target.classList.remove("ko");
            e.target.classList.add("ok");
        } else if (cadena.length == 0) {
            e.target.classList.remove("ok");
            e.target.classList.remove("ko");
        } else {
            e.target.classList.remove("ok");
            e.target.classList.add("ko");
        }
    }


    function fcambio(e){

        e.target.innerText="";
        e.target.classList.add("reg");
   
    }

    function fcambio2(e){

        e.target.innerText="Registrate";
        e.target.classList.remove("reg");
   
    }


    let usu = document.getElementById('usu');
    usu.addEventListener('blur', fvalor)

    let passwd = document.getElementById('passwd');
    passwd.addEventListener('blur', fvalor)

    let buttonreg = document.getElementById('buttonreg');
    buttonreg.addEventListener("mouseenter", fcambio);
    buttonreg.addEventListener("mouseout", fcambio2);






}