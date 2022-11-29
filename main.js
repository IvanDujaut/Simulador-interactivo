/*function verifyAcces(_username, _pass) {
    let 

}

function login() {
    let login = prompt("Ya posee una cuenta en SAMPLE?");
    if (login == 'si') {
        let username = prompt("Ingrese su nombre de usuario");
        let pass = prompt("Ingrese su contrase;a");
        //validar con el objeto de informacion
    }
}*/

function mostrarOpciones() {
    console.log(`
    1 - Hacer transaccion
    2 - Mostrar transacciones
    3 - Cerrar programa
    `)
}

function hacerTransaccion(transacciones) {
    let destino = prompt("Ingrese la direccion de destino: ")
    let monto = prompt("Ingrese el monto a transferir: ")
    let nuevaTransaccion = {
        origen: null, //va a ser la propia
        destino: destino,
        monto: monto
    }
    transacciones.push(nuevaTransaccion)
    return monto
}

function mostrarTransacciones(transacciones) {
    console.log('---------------------------------')
    for(let i = 0; i < transacciones.length; i++) {
        console.log(transacciones[i])
    }
    console.log('---------------------------------')
}

function main() {
    let opcion  = null
    let transacciones = []
    let saldo = 1000;
    while(opcion != 3) {
        mostrarOpciones()
        opcion = prompt("Ingrese un valor: ")
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

/*let nombre = prompt("Cual es tu nombre?");
alert(`Bienvenido, ${nombre}`);
*/
