'use strict'
function pesquisacep() {               //Função criada
    let cepfinal = document.getElementById('cep').value                        // var  cep no método let
    let validarcep = /^[0-9]{8}$/                             // Validação de cep ((regexr))
    if (cepfinal != "") {                                     //if se cepfinal for difefrente ou igual monstrar nulo
        if (validarcep.test(cepfinal)) {
            let script = document.createElement('script')                                                 //Chamada Api viacep / json
            script.src = 'https://viacep.com.br/ws/' + cepfinal + '/json/?callback=callback_name'         //Chamada Api viacep / json
            document.body.appendChild(script)
        }                                                        //Chamada Api viacep / json / mostrar no body
        else {
            alert('Cep - Deve conter 8 números - Cep invalído')                               // alerta, em seguida com a função para limpar todos os campos
            limparcampos()
        }
    }
}
function callback_name(objetocep) {
    if (!("error" in objetocep)) {                            //se a chamada API no modo erro que retornar de todos  vai para else com a função e alerta
        document.getElementById('rua').value = (objetocep.logradouro)
        document.getElementById('bairro').value = (objetocep.bairro)
        document.getElementById('cidade').value = (objetocep.localidade)
        document.getElementById('uf').value = (objetocep.uf)
    }
    else {
        limparcampos()
        alert('Cep não Encontrado')
    }
}
function limparcampos() {
    document.getElementById('rua').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('uf').value = ""
    document.getElementById('cep').value = ""

}
function incluirRegistro() {
    let nomeUsuario = document.getElementById('nome').value
    let dataUsuario = document.getElementById('data').value
    let telefoneUsuario = document.getElementById('telefone').value
    if (nomeUsuario != "") {
        let tabela = document.getElementById('tabelaUsuarios')
        let numeroLinhas = tabela.rows.length
        let linha = tabela.insertRow(numeroLinhas)
        let campo1 = linha.insertCell(0)
        let campo2 = linha.insertCell(1)
        let campo3 = linha.insertCell(2)
        let campo4 = linha.insertCell(3)
        campo1.innerHTML = nomeUsuario
        campo2.innerHTML = dataUsuario
        campo3.innerHTML = telefoneUsuario
        campo4.innerHTML = "<button class= 'btn btn-danger' onclick='removerLinha(this)'>Remover</button>"
        document.getElementById('nome').value = ""
    }
    else {
        alert('Nome invalido')
    }
}
function removerLinha(linha) {
    let i = linha.parentNode.parentNode.rowIndex
    document.getElementById('tabelaUsuarios').deleteRow(i)
}
function resultado(cadastroSucesso, cadastrofalse) {

    if (confirm('Deseja Cadastrar?')) {
        document.getElementById('btbrasil').innerHTML = cadastroSucesso;
    } else {
        alert('Não desejo Cadastrar')
        document.getElementById('btbrasil').innerHTML = cadastrofalse;
    }
}
function uploadfoto(fotoSucesso, fotofalse) {
    if (confirm('Selecione Foto RG:')) {
        document.getElementById('btrg').innerHTML = fotoSucesso;
    } else {
        alert('Não desejo Selecionar')
        document.getElementById('btrg').innerHTML = fotofalse;
        confirm('Rg não selecionado').innerHTML = false
    }
}

