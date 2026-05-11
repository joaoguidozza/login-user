        const form = document.getElementById("formCadastro");
        const mensagem = document.getElementById("mensagemSucesso");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); // impede recarregar a página

            const senha = document.getElementById('senha');
            const confirmarSenha = document.getElementById('confirmar-senha');

            // Verifica se a senha tem pelo menos 6 dígitos e se coincide com a confirmação
            if (senha.value.length >= 6 && senha.value === confirmarSenha.value) {
                senha.style.borderColor = 'green';
                confirmarSenha.style.borderColor = 'green';
            
                mensagem.style.display = "block";
                // opcional: limpar formulário
                form.reset();
            } else {
                senha.style.borderColor = 'red';
                confirmarSenha.style.borderColor = 'red';
                alert('Senha inválida: deve ter pelo menos 6 dígitos e coincidir com a confirmação.');
                mensagem.style.display = "none"; // Esconde a mensagem de sucesso se inválido
            }
        });