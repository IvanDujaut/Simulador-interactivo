function mostrarOpciones() {
    console.log(`
    1 - Hacer transaccion
    2 - Mostrar transacciones
    3 - Cerrar programa
    `)
}

function hacerTransaccion(_transacciones) {
    let destino = prompt("Ingrese la direccion de destino: ")
    let monto = prompt("Ingrese el monto a transferir: ")
    let nuevaTransaccion = {
        origen: null, //va a ser la propia
        destino: destino,
        monto: monto
    }
    _transacciones.push(nuevaTransaccion)
    return monto
}

function mostrarTransacciones(_transacciones) {
    console.log('---------------------------------')
    for(let i = 0; i < _transacciones.length; i++) {
        console.log(_transacciones[i])
    }
    console.log('---------------------------------')
}

function main() {
    let opcion  = null
    let transacciones = []
    let saldo = 1000;
    while(opcion != 3) {
        mostrarOpciones()
        opcion = prompt("Ingrese una opcion: ")
        if(opcion == 1) {
            let montoTransferido = hacerTransaccion(transacciones)
            saldo -= montoTransferido
        }
        if(opcion == 2) {
            mostrarTransacciones(transacciones)
        }
    }
}

main()
