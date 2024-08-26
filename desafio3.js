const Tabela_Precos = { 
    '0-1,0-5': 10.0,    // Até 1 kg e até 5 km: R$ 10.00 
    '0-1,6-10': 15.0,   // Até 1 kg e 6-10 km: R$ 15.00 
    '1-5,0-5': 20.0,    // 1-5 kg e até 5 km: R$ 20.00 
    '1-5,6-10': 25.0,   // 1-5 kg e 6-10 km: R$ 25.00 
    '5-10,0-5': 30.0,   // 5-10 kg e até 5 km: R$ 30.00 
    '5-10,6-10': 35.0   // 5-10 kg e 6-10 km: R$ 35.00 
};


//A função abaixo gera strings referentes ao intervalo de peso e distância e as concatena após sua geração para servir de key
const frete = (peso, distancia, tabela) =>{
    if (peso<1){
        pesostr='0-1'
    }
    else if (peso<5){
        pesostr='1-5'
    }
    else if (peso<10){
        pesostr='5-10'
    };

    if (distancia<5){
        distanciastr='0-5'
    }
    else if(distancia<10){
        distanciastr='6-10'
    };

    //concatenação das strings para geração da chave
    chavestr = `${pesostr}${','}${distanciastr}`;

    //uso da chave gerada para buscar o valor referente ao frete
    const frete=tabela[chavestr];
    return frete;
}