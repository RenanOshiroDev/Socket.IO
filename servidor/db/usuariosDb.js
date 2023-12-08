import criarHashESalsenha from "../utils/criarHashESalsenha.js";
import { usuariosColecao } from "./dbConnect.js";


function encontrarUsuario(nome){
    return usuariosColecao.findOne({nome});
}
function cadastrarUsuario({nome,senha}){
    const {hashSenha, salSenha} = criarHashESalsenha(senha);

    return usuariosColecao.insertOne({nome,hashSenha,salSenha});
}

export{cadastrarUsuario,encontrarUsuario};