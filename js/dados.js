class Dados{
    constructor(){
        let id = localStorage.getItem('id');
        if (id === null || id === undefined || id === 'NaN'){
            localStorage.setItem('id', '0');
        }
    }

    getProximoID(){
        return parseInt(localStorage.getItem('id')) + 1;
    }

    gravarDados(dado){
        localStorage.setItem(this.getProximoID(), JSON.stringify(dado));
        localStorage.setItem('id', this.getProximoID());
    }
}