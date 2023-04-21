function cliqueFora(){
    var opcoes = document.getElementById('opcoes')
    if(opcoes.style.display = 'block'){
        opcoes.style.display = 'none'
    }
}
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
        menu.style.position = 'none'
        home.style.display = 'none'
        ciclos.style.display = 'none'
        
        opcoes.style.display = 'none'
        
    }
    else{
        menu.style.padding = '20px 0px'
        menu.style.width = '100px'
        menu.style.height = '100%'
        menu.style.position = 'absolute'
        home.style.display = 'block'
        ciclos.style.display = 'block'
        
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

function cliqueHome(){
    var sectionPri = document.getElementById('pri')
    var sectionRedes = document.getElementById('home')


    if(sectionRedes.style.display == 'block'){
        
        
    }else{
        
            sectionPri.style.display = 'none'
            sectionRedes.style.display = 'block'
        
    }
}

function cliqueUm(){
    var sectionPri = document.getElementById('pri')
    var sectionRedes = document.getElementById('home')

    if(sectionPri.style.display == 'block'){
        
        
    }else{
        
            sectionRedes.style.display = 'none'
            sectionPri.style.display = 'block'
        
    }
}



