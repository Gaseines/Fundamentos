function Menu(){
    var casa = document.getElementById('imenu')
    var home = document.getElementById('casa')
    var select = document.getElementById('iselect')
    var main = document.getElementById('imain')
    if(home.style.display == 'block'){
        main.style.float = 'none'
        casa.style.width = '100%'
        casa.style.height = '50px'
        casa.style.float = 'none'
        select.style.display = 'none'
        
        home.style.display = 'none'
    }else{
        main.style.float = 'right'
        home.style.display = 'block'
        select.style.display = 'block'
        casa.style.width = '100px'
        casa.style.height = '91%'
        casa.style.float = 'left'
    }
}