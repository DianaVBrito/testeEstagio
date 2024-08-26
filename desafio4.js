const Itens_Vendidos = [ 
    { sku: 1001, quantidade: 2 }, 
    { sku: 1002, quantidade: 1 }, 
    { sku: 1003, quantidade: 5 } 
];

const Estoque = [ 
    { sku: 1001, quantidade: 5 }, 
    { sku: 1002, quantidade: 2 }, 
    { sku: 1003, quantidade: 5 },
];


//A função abaixo retorna o valor do novo estoque após a venda dos produtos
//A função impede a compra de uma quantidade maior que a presente no estoque
const Novo_Estoque = (Vendas, Estoque) =>{
Vendas.forEach(Venda=> {
    Item_Estoque = Estoque.find(Item => Item.sku === Venda.sku);
    if (Item_Estoque.quantidade-Venda.quantidade>=0){
        //condicional considerando tentativa de compra de uma quantidade maior que a presente no estoque
        Item_Estoque.quantidade=Item_Estoque.quantidade-Venda.quantidade;
    }


 });
 return Estoque;
}