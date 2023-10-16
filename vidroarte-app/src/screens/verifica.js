async function verificaUsuario() {
    const res = await fetch("usuarios.json");
    const contato = await res.json();
    usuarioSistema = document.getElementById('usuario')
    senhaSistema = document.getElementById('senha')
  
    var user = contato.find((item) => { return item.usuario == usuarioSistema.value })
    if (user) {
      if (user.senha == senhaSistema.value) {
        navigation.home 
      }
      else {
        alert("Senha invalida")
      }
    } 
    else { 
      alert("Usuário não encontrado") 
    }
  }