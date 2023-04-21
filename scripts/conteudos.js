function pdf1Um(){
    var sectionPri = document.getElementById('pri')
    var pdfUmUm = document.getElementById('oConselhoCapa')

    sectionPri.style.display = 'none'
    pdfUmUm.style.display = 'block'
    pdfs.style.display = 'block'
}

                    /*NAVEGAÇÃO ENTRE PAGINAS PDF O CONSELHO DE DEUS*/

var capa = document.getElementById('oConselhoCapa')
var pag01 = document.getElementById('oConselhoPagUm') 
var pag02 = document.getElementById('oConselhoPagDois')
var pag03 = document.getElementById('oConselhoPagTres')
var pag04 = document.getElementById('oConselhoPagQuatro')
var pag05 = document.getElementById('oConselhoPagCinco')
var pag06 = document.getElementById('oConselhoPagSeis')
var pag07 = document.getElementById('oConselhoPagSete')
var pag08 = document.getElementById('oConselhoPagOito')


function oConselhoVoltCapa(){

    pag01.style.display = 'none'
    capa.style.display = 'block'

}
function oConselhoVoltPagUm(){

    pag02.style.display = 'none'
    pag01.style.display = 'block'

}
function oConselhoVoltPagDois(){

    pag03.style.display = 'none'
    pag02.style.display = 'block'

}
function oConselhoVoltPagTres(){

    pag04.style.display = 'none'
    pag03.style.display = 'block'

}
function oConselhoVoltPagQuatro(){

    pag05.style.display = 'none'
    pag04.style.display = 'block'

}
function oConselhoVoltPagCinco(){

    pag06.style.display = 'none'
    pag05.style.display = 'block'

}
function oConselhoVoltPagSeis(){

    pag07.style.display = 'none'
    pag06.style.display = 'block'

}
function oConselhoVoltPagSete(){

    pag08.style.display = 'none'
    pag07.style.display = 'block'

}





function oConselhoPagUm(){

    pag01.style.display = 'block'
    capa.style.display = 'none'

}
function oConselhoPagDois(){

    pag01.style.display = 'none'
    pag02.style.display = 'block'

}
function oConselhoPagTres(){
    
    pag02.style.display = 'none'
    pag03.style.display = 'block'

}
function oConselhoPagQuatro(){
    
    pag03.style.display = 'none'
    pag04.style.display = 'block'
    
}
function oConselhoPagCinco(){
    
    pag04.style.display = 'none'
    pag05.style.display = 'block'
    
}
function oConselhoPagSeis(){
    
    pag05.style.display = 'none'
    pag06.style.display = 'block'
    
}
function oConselhoPagSete(){
    
    pag06.style.display = 'none'
    pag07.style.display = 'block'
    
}
function oConselhoPagOito(){
    
    pag07.style.display = 'none'
    pag08.style.display = 'block'
    
}