function mudouTamano(){
    var home = document.getElementById('casa')
    var menu = document.getElementById('imenu')
    var sectionRedes = document.getElementById('home')
    var ciclos = document.getElementById('ciclos')
    var opcoes = document.getElementById('opcoes')

    if(window.innerWidth >= 600){
        menu.style.width = '100%'
        menu.style.height = '35px'
        home.style.display = 'inline'
        ciclos.style.display = 'inline'
        opcoes.style.display = 'none'

    }else{
        menu.style.padding = '0px 0px'
        menu.style.height = '0px'
        home.style.display = 'none'
        ciclos.style.display = 'none'
        
        
    }
}

function Menu(){
    var home = document.getElementById('casa')
    var menu = document.getElementById('imenu')
    var sectionRedes = document.getElementById('home')
    var ciclos = document.getElementById('ciclos')
    var opcoes = document.getElementById('opcoes')

    if(menu.style.height == '100%'){
        menu.style.padding = '0px 0px'
        menu.style.height = '0px'
        home.style.display = 'none'
        ciclos.style.display = 'none'
        sectionRedes.style.width = '80%'
        opcoes.style.display = 'none'
        
    }
    else{
        menu.style.padding = '20px 0px'
        menu.style.width = '100px'
        menu.style.height = '100%'
        home.style.display = 'block'
        ciclos.style.display = 'block'
        sectionRedes.style.width = '90%'
    }
}

function clickOpc(){
    var btn = document.getElementById('ciclos')
    var opcoes = document.getElementById('opcoes')

    if(opcoes.style.display == 'block'){
        opcoes.style.display = 'none'
        btn.innerHTML = 'Ciclos &darr;'
    }else{
        opcoes.style.display = 'block'
        
        btn.innerHTML = 'Ciclos &uarr;'
    }
}


