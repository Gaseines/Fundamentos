function Menu(){
    var casa = document.getElementById('imenu')
    var home = document.getElementById('casa')
    var select = document.getElementById('iselect')
    var main = document.getElementById('imain')
    var menu = document.getElementById('imenu')
    var sectionRedes = document.getElementById('home')
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
        sectionRedes.style.width = '80%'
        
    }else{
        menu.style.display = 'block'
        sectionRedes.style.width = '90%'
    }
}