const produtos = [
    {sku: 1001, nome: 'Camiseta', quantidade: 5},
    {sku: 1002, nome: 'Calça', quantidade: 10},
    {sku: 1003, nome: 'Vestido', quantidade: 3}
];

//A função abaixo retorna o resultado booleano da existência de um produto em estoque

//A função leva em conta tanto a existência do código sku quanto a quantidade do produto
const Em_Estoque = (sku, Lista) =>{
    let x=0
    Lista.forEach(element => {
        Item_Estoque=Lista.find(item=>sku===element.sku)
        if(Item_Estoque!==undefined && element.quantidade>0){
            x=1
        }
    });
    return Boolean(x);
};
