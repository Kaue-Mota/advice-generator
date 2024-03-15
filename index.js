const numeroConselho = document.getElementById('number')

document.getElementById('btn_atualizar_conselho').addEventListener ('click', () =>{
    tirarConselhoAleatorio()
})

async function criarTodosOsConselhos(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
   
}



async function tirarConselhoAleatorio(){
    const conselhos = await criarTodosOsConselhos()
    const conselho = (`"${conselhos.slip.advice}"`)
    const numeroConselho = (`Advice #${conselhos.slip.id}`)
    console.log(conselho)
    document.getElementById('advice').textContent = conselho
    document.getElementById('number').textContent = numeroConselho
   
    
}

tirarConselhoAleatorio()