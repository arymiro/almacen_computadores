const PRECIO_COMPUTADOR = 820000;
const CIEN_PORCIENTO= 100;

function procesarCompra(){
    var cantidadComputadores = document.getElementById('cantidad_computadores').value;
    var valorCompra = cantidadComputadores * PRECIO_COMPUTADOR;
    var porcentajeDescuento = calcularPorcentajeDescuento(valorCompra);
    var valorDescuento = (valorCompra * porcentajeDescuento) / CIEN_PORCIENTO;
    var valorTotal = valorCompra - valorDescuento;
    
    document.getElementById("input_valor_compra").value = valorCompra;
    document.getElementById("input_valor_descuento").value = valorDescuento;
    document.getElementById("input_valor_total").value = valorTotal;
    document.getElementById("informacion_descuento").innerHTML = "Su descuento fue del " + porcentajeDescuento + "%";
}

function calcularPorcentajeDescuento(valorCompra){ 
    if(valorCompra >= 1640000 && valorCompra <= 3280000){
        return 15;
    }
    
    if(valorCompra > 3280000 && valorCompra <= 6560000){
        return 25;
    }
    
    if(valorCompra > 6560000 && valorCompra <= 9840000){
        return 35;
    } 
    
    return 0;
}
