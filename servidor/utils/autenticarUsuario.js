import {scryptSync, timingSafeEqual} from "crypto";

function autenticarUsuario(senha,usuario){
    const hashTeste = scryptSync(senha,usuario.salSenha,64);

    const hashReal = Buffer.from(usuario.hashSenha,"hex");

    const autenticado = timingSafeEqual(hashReal,hashTeste);

    return autenticado;
}

export default autenticarUsuario;