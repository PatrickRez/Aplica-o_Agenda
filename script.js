const form = document.getElementById("formAtividade");

let linha = " ";
const nomeContato = [];
const numeroContato = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
});

function atualizaTabela() {
    const inputNovoName = document.getElementById('NomeContato');
    const inputNovoNumber = document.getElementById('NumeroContato');
    
    if (nomeContato.includes(inputNovoName.value)) {
        alert(`Este contato ja foi inserido ${inputNovoName.value} já foi inserida!`)

        
    } else {
        contato.push(inputNovoName.value);
        
        
        let linha = '<tr>';
        linha += `<td>${inputNovoName.value} </td> `;
        linha += `<td>${inputNovoNumber.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        function atualizaTabela() {

            const corpoTabela = document.querySelector('tbody');
        
            corpoTabela.innerHTML = linhas;
        }
    }
    function adicionaLinha() {
        nomeContato.push(inputNovoName.value);
        numeroContato.push(parseInt(inputNovoNumber.value));
    }
}