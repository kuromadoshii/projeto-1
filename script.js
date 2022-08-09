//usar variavel com um for tipo: var = getelementbyid(res{"numero"})
// https://www.w3schools.com/jsref/event_target.asp
// https://www.w3schools.com/jsref/met_element_getattribute.asp

let res = document.getElementById("seta")

function clicou(event){
    let at = event.target.getAttribute("id")
    if(at == "t1"){
        res.style.paddingLeft = "180px"
    } 
    if(at == "t2"){
        res.style.paddingLeft = "220px"
    }
}

/* deixar o objeto transparente caso for colocar a seta ao lado, e ativar com o
o mouse ao passar*/