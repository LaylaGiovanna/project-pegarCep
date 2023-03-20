'use strict'

export const pesquisarCepPost = async(cep) => {
    const url = `https://api.postmon.com.br/v1/cep/${cep}`

    const response = await fetch(url)
    const dados = await response.json()

    return {
        municipio: dados.cidade,
        estado: dados.estado,
        bairro: dados.bairro,
        logradouro: dados.logradouro
    }
}