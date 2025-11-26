/* function entrarnosite() {
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value

    if(login == "admin" && senha == "admin"){
       window.location.href = '2dashboard.html'
            }else{
         alert('Login inválido')        
    }
} */

    function entrarnosite() {
    let loginDigitado = document.getElementById('login').value.trim(); // .trim() para remover espaços
    let senhaDigitada = document.getElementById('senha').value.trim();

    // 1. Tenta carregar o array de cadastros do localStorage
    const cadastroJSON = localStorage.getItem("cadastro");
    const cadastro = cadastroJSON ? JSON.parse(cadastroJSON) : [];

    // 2. Verifica se o usuário é o admin fixo (opcional)
    if (loginDigitado === "admin" && senhaDigitada === "admin") {
        alert('Login Admin bem-sucedido!');
        window.location.href = '2dashboard.html';
        return; 
    }

    // 3. Procura no array de cadastros
    const usuarioEncontrado = cadastro.find(user => 
        user.usuarioNome === loginDigitado && user.senha === senhaDigitada
    );

    if (usuarioEncontrado) {
        alert('Seja bem-Vindo o LiftSenai!');
        
        // 💡 SALVA O USUÁRIO ATUAL: É útil salvar o usuário logado separadamente
        // Assim, o dashboard pode saber qual usuário buscar, e não apenas o último.
        localStorage.setItem("usuarioAtual", JSON.stringify(usuarioEncontrado));
        
        window.location.href = '2dashboard.html';
    } else {
        alert('Login Inválido!');
    }
}