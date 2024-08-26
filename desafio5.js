const vendas = [ 
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' }, 
    
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' }, 
    
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },

    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' } 
];

//A função abaixo gera um Map que tem como key o sku e uma string representando o valor total para o intervalo de tempo
//Os valores do Map são a quantidade de itens vendidos para cada sku e o valor total para o intervalo de tempo dado
const relatorio = (Vendas, data1, data2) => {
    const sku_Quant = new Map();
    const String_Array = new Map();
    const relatorio = new Map();
    const data1split =data1.split('-')
    const data2split =data2.split('-')
    
    
    Vendas.forEach(Element=> {
        //separação das strings de tempo, somando o valor total para cada data única
        if(String_Array.has(Element.data)){
            let x = String_Array.get(Element.data)
            String_Array.set(Element.data, Element.valorTotal+x)
        }
        else{
            String_Array.set(Element.data, Element.valorTotal)
        }

        //Separação de cada sku, somando a quantidade total vendida por código
        if(sku_Quant.has('sku = ' + Element.sku)){
            let x=sku_Quant.get('sku = ' + Element.sku)
            sku_Quant.set('sku = '+Element.sku, Element.quantidade+x)
        }

        else{
            sku_Quant.set('sku = ' + Element.sku, Element.quantidade)
        }
     });

//quebra das strings de tempo em 3 strings separadas para ano, mês e dia
let Array_Reserva = []
for (const x of String_Array.keys()) {
  Array_Reserva.push(x.split('-'))
}

//verificação e somatório do valor das datas, adicionando ao total somente as datas dentro do intervalo desejado
Array_Reserva.forEach(element => {
    if(element[0]>=data1split[0] && element[0]<=data2split[0]){
        if(element[1]>=data1split[1] && element[1]<=data2split[1]){
            if(element[2]>=data1split[2] && element[2]<=data2split[2]){
                if(relatorio.has('valor total')){
                    let x = Number(relatorio.get('valor total'))
                    relatorio.set('valor total', temp=Number(String_Array.get(`${element[0]}${'-'}${element[1]}${'-'}${element[2]}`)+x))
                }
                else{
                    relatorio.set('valor total', String_Array.get(`${element[0]}${'-'}${element[1]}${'-'}${element[2]}`))
                }
                }
            }
        }
});

//união dos maps de quantidade por sku e valor por tempo
sku_Quant.set('valor total para intervalo de tempo', relatorio.get('valor total'))
return sku_Quant
}