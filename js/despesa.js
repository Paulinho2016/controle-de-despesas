class Despesa{
    constructor(id, ano, mes, dia, categoria, descricao, valor){
        this._id = id;
        this._ano = ano;
        this._mes = mes;
        this._dia = dia;
        this._categoria = categoria;
        this._descricao = descricao;
        this._valor = valor;
    }
    
    get id(){ return this._id; }    
    set id(id){ this._id = id; }
    
    get ano(){ return this._ano; }
    set ano(ano){ this._ano = ano }

    get mes(){ return this._mes; }
    set mes(mes){ this._mes = mes }

    get dia(){ return this._dia; }
    set dia(dia){ this._dia = dia }

    get categoria(){ return this._categoria; }
    set categoria(categoria){ this._categoria = categoria }

    get descricao(){ return this._descricao; }
    set descricao(descricao){ this._descricao = descricao }

    get valor(){ return this._valor; }
    set valor(valor){ this._valor = valor }


    validarDados(){
        for(let v in this){
            if(v == null || v === ''){
               return false;
            }
        }
    }
}