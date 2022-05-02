function logar() {

    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    console.log('usuario');
    if( usuario == 'admin' && senha == 'admin'){
        location.href = "pagina-principal.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
}
        
