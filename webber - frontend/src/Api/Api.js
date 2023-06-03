export async function setMsj(mensaje) {
    if (mensaje.contacto.length >= 256 || mensaje.cuerpo.length > 1000) {
        alert("Escriba un contacto o cuerpo válido!");
    } else {
        let url = "https://webber.com.ar:9001/api/mensajes";
        console.log(mensaje);
        console.log(JSON.stringify(mensaje));
        await fetch(url, {
            "method" : "POST",
            "body" : JSON.stringify(mensaje),
            "headers" : {
                "Content-Type" : "application/json"
            }
        });
    }
}