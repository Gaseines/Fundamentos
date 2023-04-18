function Menu(){
    var home = document.getElementById('casa')
    var menu = document.getElementById('imenu')
    var sectionRedes = document.getElementById('home')
    var ciclos = document.getElementById('ciclos')

    if(menu.style.height == '100%'){
        menu.style.padding = '0px 0px'
        menu.style.height = '0px'
        home.style.display = 'none'
        ciclos.style.display = 'none'
        sectionRedes.style.width = '80%'
        
    }else{
        menu.style.padding = '20px 0px'
        menu.style.height = '100%'
        home.style.display = 'block'
        ciclos.style.display = 'block'
        sectionRedes.style.width = '90%'
    }
}

function clickOpc(){
    var btn = document.getElementById('ciclos')
    var opcoes = document.getElementById('opcoes')

    if(opcoes.style.display == 'none'){
        opcoes.style.display = 'block'
        btn.innerHTML = 'Ciclos &uarr;'
    }else{
        opcoes.style.display = 'none'
        btn.innerHTML = 'Ciclos &darr;'
    }
}


