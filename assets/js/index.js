let mode = document.querySelector('#mode-icon')

mode.addEventListener('click', () =>{
    let formulario = document.querySelector('#login-form')
    let background = document.querySelector('#container')
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        formulario.classList.add('dark')
        background.classList.add('dark')
    }else{
        mode.classList.remove('fa-sun')
        mode.classList.add('fa-moon')
        formulario.classList.remove('dark')
        background.classList.remove('dark')
    }
})