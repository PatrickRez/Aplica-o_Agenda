const form = document.getElementById("form-atividade");
const contato = [];

let linha = "";

form.addEventListener('submit', (e) => {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function atualizaTabela() {
    const inputNovoName = document.getElementById('Nome-contato');
    const inputNovoNumber = document.getElementById('Numero-contato');
    
    if (name.includes(inputNovoName.value)) {
        alert(`Este numero ja foi inserido ${inputNovoName} já foi inserida!`.innerHTML)
    } else {
        contato.push(inputNovoName.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNovoName.value} </td> `;
        linha += `<td>${inputNovoNumber.value}</td>`;
        linha += '</tr>';

        linha += linha;

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linha;
    }

    inputNovoName.value = '';
    inputNovoNumber.value = '';
}
function adicionaLinha() {
    
}



