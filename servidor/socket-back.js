import "dotenv/config";
import registrarCadastro from "./registrarEventos/cadastro.js";
import registrarDocumentos from "./registrarEventos/documentos.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registarLogin from "./registrarEventos/login.js";

import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection",(socket)=>{
  registrarEventosInicio(socket,nspUsuarios);
  registrarDocumentos(socket,nspUsuarios);
})

io.of("/").on("connection", (socket) => {
  registrarCadastro(socket,io);
  registarLogin(socket,io)
});
