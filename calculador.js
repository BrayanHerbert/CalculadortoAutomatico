function meuEscopo(){


let resultado = document.querySelector('.resultado')
let form = document.querySelector('.form')

form.addEventListener('submit', function calcular(enviar){
    enviar.preventDefault()

    let metro = document.querySelector('#metro').value
    let comprimento = document.querySelector('#comprimento').value
    let largura = document.querySelector('#largura').value

    
    let calculoMetro = comprimento * largura
    let PrecoTotal = metro * calculoMetro
    let PrecoChapa = calculoMetro / 2.16
    let PrecoFerragemParede = (comprimento * 2 + largura  * 2) / 3

   
   

    if (metro <= 0 && comprimento <= 0 && largura <= 0){
        resultado.innerHTML = `<div style=" padding: 10px; background-image: linear-gradient(to right, red, rgb(165, 1, 1)) ; color: white; margin-top: 20px; ">[ERRO]Preencha os dados para calcular!</div>`

    }else if(comprimento <= 0 && largura <= 0){
        resultado.innerHTML = '<div style=" padding: 10px; background-image: linear-gradient(to right, red, rgb(165, 1, 1)) ; color: white; margin-top: 20px; ">[ERRO]Falta preencher o Comprimento e a Largura</div>'

    }
    else if (metro <= 0){
        resultado.innerHTML = `<div style=" padding: 10px; background-image: linear-gradient(to right, red, rgb(165, 1, 1)) ; color: white; margin-top: 20px; ">[ERRO] Falta preencher m²!</div>`

    }
    else if (comprimento <= 0){
        resultado.innerHTML = `<div style=" padding: 10px; background-image: linear-gradient(to right, red, rgb(165, 1, 1)) ; color: white; margin-top: 20px; ">[ERRO] Falta preencher o Comprimento!</div>`

    }
    else if (largura <= 0){
        resultado.innerHTML = `<div style=" padding: 10px; background-image: linear-gradient(to right, red, rgb(165, 1, 1)) ; color: white; margin-top: 20px; ">[ERRO] Falta preencher a Largura!</div>`

    }else {
    
    resultado.innerHTML = `<p>Seu m² Total é: <strong>${calculoMetro.toFixed(1)}</strong></p>`

    resultado.innerHTML += `<p>Preço total ficou: R$<strong>${parseFloat(PrecoTotal.toFixed(2))} </strong></p>`

    resultado.innerHTML += `<p>Você usará um total de <strong>${PrecoChapa.toFixed(4)}</strong> chapas de drywall</p>`
    
    resultado.innerHTML += `<p>Você usará um total de <strong>${PrecoFerragemParede.toFixed(4)} </strong>Tabica/canaletas ou afins</p>`

    }
        let novaDiv = document.createElement("div")
        novaDiv.style.padding = "10px"
        
        let novoInput = document.createElement('input')

        novoInput.type = "text"
        novoInput.placeholder = "blzura?"
        novaDiv.appendChild(nov)

        document.body.appendChild(novaDiv)
        
        
    
       
        
       

        
})
 

}
meuEscopo()