const resultado = (valor, quant, taxa) => {return valor/quant*((((1+taxa)**quant)-1)/taxa);}
//tendo em vista que P é o valor da parcela e não o valor total, o resultado da equação fornece o valor total por parcela
