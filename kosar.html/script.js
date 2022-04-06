var cipo1= 10000
var cipo2= 10000
var cipo3= 10000


function kosarba(termek){
    db = Number(prompt('hány darab fjam?'))
    localStorage.setItem(termek,db)
}

function torlos() {
    localStorage.clear()
}
function kosar () {
    var lista = ""
    lista += "<tr> <th>név</th> <th>darab</th> <th>ár</th> </tr>"
    document.getElementById('table').innerHTML=lista
}

