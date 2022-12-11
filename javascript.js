function Remove(li){
    let t = li.textContent
    const indice = t.indexOf(":")
    t = t.substring(indice+1,t.indexOf("borrar"))
    if(parseFloat(t)<0){
        g = g + parseFloat(t)
        gastos.innerHTML= `${g} €`
        localStorage.setItem('gasto',g)
    }
    else{
        i = i - parseFloat(t)
        ingresos.innerHTML= `${i} €`
        localStorage.setItem('ingreso',i)
        
    }
    a = i-g
    ahorro.innerHTML= `${a} €`
    localStorage.setItem('ahorro',a)
//elimino la transaccion
    li.remove()
    localStorage.setItem("historial",JSON.stringify(historial.outerHTML))
}

//CUANDO INICIO LA APP INICIALIZO EL STORAGE
if(localStorage.length==0){
    localStorage.setItem('ahorro',0)
    localStorage.setItem('gasto',0)
    localStorage.setItem('ingreso',0)
    localStorage.setItem('historial',0)

}

    
    
    
    

const concepto = document.querySelector("#concepto")
const cantidad = document.querySelector("#cantidad")
const gastos = document.querySelector("#gastos")
const ingresos = document.querySelector("#ingresos")
const historial = document.querySelector("#historico")
const ahorro = document.querySelector("#ahorros")
const f = document.querySelector(".form")
let g = parseInt(localStorage.getItem('gasto'))
let i = parseInt(localStorage.getItem('ingreso'))
let a = parseInt(localStorage.getItem('ahorro'))
ingresos.innerHTML= `${i} €`
gastos.innerHTML= `${g} €`
ahorro.innerHTML= `${a} €`
const ser_obj = localStorage.getItem('historial')
let hist =JSON.parse(ser_obj)
let string = ""
Object.values(hist).forEach(element => {
    string = string + element })
historial.innerHTML =string

f.addEventListener("submit",async (event)=>{event.preventDefault()
    // creo un li con el ingreso o gasto introducido y lo añado al historico.
        const texto = document.createElement("h1")
        const li = document.createElement("li")
        //añado al historial la transaccion
        const operacion = `${concepto.value} : ${cantidad.value}`
        texto.innerText = operacion
        li.appendChild(texto)
        //creo en la lista un boton de borrar para eliminar trasnsaccion
        const borrar = document.createElement("button")
        li.appendChild(borrar)
        borrar.innerHTML="borrar"
        borrar.setAttribute("class","eliminar")
        borrar.addEventListener('click',()=>Remove(borrar.parentElement))
        li.setAttribute ("class","elemento")
        historial.appendChild(li)
        localStorage.setItem("historial",JSON.stringify(historial.outerHTML))
        // a los gatos e ingresos en dependencia del signo le añado  el valor de la transferencia
        if (cantidad.value<0){
            g = (g - parseFloat(cantidad.value))
            gastos.innerHTML= `${g} €`
            localStorage.setItem('gasto',g)
        }
        else{ i = i + parseFloat(cantidad.value)
            ingresos.innerHTML= `${i} €`
            localStorage.setItem('ingreso',i)
    
        }
        a = i-g
        localStorage.setItem('ahorro',a)
        ahorro.innerHTML= `${a} €`
        cantidad.value= ""
        concepto.value = ""
    })
    const b = document.querySelectorAll('.eliminar')
    b.forEach(element=>{
        element.addEventListener('click',()=>{Remove(element.parentElement)})
    
    })


    





