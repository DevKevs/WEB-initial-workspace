//Kevin feliz 2019-8682
const nombre = document.querySelector('#Nombre')
const apellido = document.querySelector('#Apellido')
const cedula = document.querySelector('#Cedula')
const email = document.querySelector('#Mail')
const formulario = document.querySelector('#formulario');
// const addAlerta = document.querySelector('#alerta');
const addError = document.querySelector('#error');
const boton = document.querySelector('#btn')



function Posibilitys(){
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        if(CheckNom() && CheckApel() && CheckCed() && CheckMail()){
            let Cedlongitud = cedula.value.replace('-', '')
            Cedlongitud = Cedlongitud.replace('-', '')

            if(Cedlongitud.length == 11){
                EnviarForm()
                cedula.style.borderColor = 'white'
                document.querySelector('.cedula').style.display = 'none'
            }
            else{
                cedula.style.borderColor = 'red'
                document.querySelector('.cedula').textContent = 'cedula invalida'
                document.querySelector('.cedula').style.display = 'block'
            }
        }
        else{
            Errores('Llene todos los campos')
            CheckNom();
            CheckApel();
            CheckCed();
            CheckMail();
        }
    })
    nombre.addEventListener('blur', CheckNom)
    apellido.addEventListener('blur', CheckApel)
    cedula.addEventListener('blur', CheckCed)
    email.addEventListener('blur', CheckMail)

    nombre.addEventListener('input', CheckNom)
    apellido.addEventListener('input', CheckApel)
    cedula.addEventListener('input', CheckCed)
    email.addEventListener('input', CheckMail)

    cedula.addEventListener('keypress', aggGiones)
}

Posibilitys()

//funciones 
function CheckNom(e){
    if(nombre.value === ''){
        mostrarErrores.ErrorNombre()
        return false;
    }
    else{
        nombre.style.borderColor = 'white'
        document.querySelector('.nombre').style.display = 'none'
        return true;
    }
}

function CheckApel(e){
    if(apellido.value === ''){
        mostrarErrores.ErrorApellido()
        return false;
    }
    else{
        apellido.style.borderColor = 'white'
        document.querySelector('.apellido').style.display = 'none'
        return true;
    }
}

function CheckCed(e){
    if(cedula.value === ''){
        mostrarErrores.ErrorCedula('Complete el campo.')
        return false;
    }
    else if(isNaN(quitarGuines(cedula))){
        mostrarErrores.ErrorCedula('Cedula invalida...')
        return false;
    }
    else if(quitarGuines(cedula).length > 11 || quitarGuines(cedula).length != 11){
        mostrarErrores.ErrorCedula('Cedula invalida...')
        return false;
    }
    else{
        cedula.style.borderColor = 'white'
        document.querySelector('.cedula').style.display = 'none'
        return true;
    }
}
function CheckMail(e){
    if(email.value === ''){
        mostrarErrores.ErrorEmail('Campo obligatorio.')
        return false;
    }
    else{
        const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(regex.test(email.value)){
            email.style.borderColor = 'white'
            document.querySelector('.email').style.display = 'none'
            return true;
        }
        else{
            mostrarErrores.ErrorEmail('Correo invalido')
            return false; 
        }
    }
}

function quitarGuines(cedula){
    let arrayCedula = Array.from(cedula.value)
    arrayCedula = arrayCedula.filter(c => c != '-');
    let cedSinGiones = '';
    arrayCedula.forEach( num => {
        cedSinGiones += num
    });
    return cedSinGiones
}

//mostrar alertas o errores 
const mostrarErrores = {
    ErrorNombre: () =>{
        nombre.style.borderColor = 'red'
        document.querySelector('.nombre').style.display = 'block'
    },
    ErrorApellido: () =>{
        apellido.style.borderColor = 'red'
        document.querySelector('.apellido').style.display = 'block'
    },
    ErrorCedula: (e) =>{
        cedula.style.borderColor = 'red'
        document.querySelector('.cedula').textContent = e
        document.querySelector('.cedula').style.display = 'block'
    },
    ErrorEmail: (e) =>{
        email.style.borderColor = 'red'
        document.querySelector('.email').textContent = e
        document.querySelector('.email').style.display = 'block'
    }
    

}
function EnviarForm(){
    alert("Formulario enviado con exito!")

    setTimeout(() => {
        limpiarDatos()
    }, 1000);
}

const Errores = error =>{
    addError.innerHTML = `<div class="alert alert-danger alert-dismissible fade show text-center" role="alert" id="alert">
                            <strong>${error}</strong>
                        </div>`;
    setTimeout(() =>{
        addError.innerHTML = '';
    },3000)                
}

function aggGiones(e){
    let key = window.event ? e.which : e.keyCode
    if(key < 48 || key > 57) {
        if(key != 46 && key !=45)
        {
            e.peventDefault();
        }
    }
    e.target.value.length === 3 ? e.target.value += '-' : e.target.value 
    e.target.value.length === 11 ? e.target.value += '-': e.target.value 
    e.target.value === '-' ? e.preventDefault() : e.target.value 
    e.target.value.length===13 ? e.preventDefault() : e.target.value
}

function limpiarDatos() {
    nombre.value = ''
    apellido.value = ''
    cedula.value = ''
    email.value = ''
}