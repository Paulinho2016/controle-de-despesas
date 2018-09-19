var campoano = document.getElementById('ano');
var campomes = document.getElementById('mes');
var campodia = document.getElementById('dia');
var campocategoria = document.getElementById('categoria');
var campodescricao = document.getElementById('descricao');
var campovalor = document.getElementById('valor');

var anos = Array();
var meses = Array();
var categoria = Array();


function AlimetarArrays() {
    this.anos.push("");
    this.anos.push(2018);
    this.anos.push(2019);
    this.anos.push(2020);

    this.meses.push("");
    this.meses.push('Janeiro');
    this.meses.push("Fevereiro");
    this.meses.push("Março");
    this.meses.push("Abril");
    this.meses.push("Maio");
    this.meses.push("Junho");
    this.meses.push("Julho");
    this.meses.push("Agosto");
    this.meses.push("Setembro");
    this.meses.push("Outubro");
    this.meses.push("Novembro");
    this.meses.push("Dezembro");

    this.categoria.push("");
    this.categoria.push("Combustivel");
    this.categoria.push("Alimentação");
    this.categoria.push("Roupas e Calçados");
    this.categoria.push("Luz");
    this.categoria.push("Água");
}

function CarregarDados(){

    AlimetarArrays();

    this.anos.forEach(function (valor, indice, array) {
        let opt = document.createElement('option');
        opt.value = indice;
        opt.text = valor;
        this.campoano.add(opt, this.campoano.options[indice]);
    });

    this.meses.forEach(function (valor, indice, array) {
        let opt = document.createElement('option');
        opt.value = indice;
        opt.text = valor;
        this.campomes.add(opt, this.campomes.options[indice]);
    });

    this.categoria.forEach(function (valor, indice, array) {
        let opt = document.createElement('option');
        opt.value = indice;
        opt.text = valor;
        this.campocategoria.add(opt, this.campocategoria.options[indice]);
    });
}

function ColetarDados(){
    let dados = new Dados();
    let despesa = new Despesa(dados.getProximoID(), campoano.value, campomes.value, campodia.value, campocategoria.value, campodescricao.value, campovalor.value);
    LimparCampos();

    if (despesa.validarDados()){
        dados.gravarDados(despesa);
        console.log(`Despesa: ${d.descricao} Valor: ${despesa.valor}`);
    }
    else{
        /*let errorspan = document.createElement('span');
        errorspan.className = 'error';
        errorspan.id = 'error_span';
        errorspan.innerText = 'Error: Ocorreu um erro na tentativa de gravação de dados!\nVerifique os campos e tente novamente.';

        let errordiv = document.createElement('div');
        errordiv.className = 'col-md-5 mt-5';
        errordiv.id = 'error_div';
        errordiv.appendChild(errorspan);

        document.getElementById('form').appendChild(errordiv);*/
        $("#msgModal").showModal();
    }


}




function LimparCampos(){
    campoano.selectedIndex = -1;
    campomes.selectedIndex = -1;
    campodia.value = null;
    campocategoria.selectedIndex = -1;
    campodescricao.value = "";
    campovalor.value = "";
}

CarregarDados();