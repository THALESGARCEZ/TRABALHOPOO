class Pessoas {
   
    constructor(
        private _nome: string, 
        private _sexo: string, 
        private _idade: number
        ){ }


        get Nome () {
            return this._nome();
        }

        set Nome (nome: string) {
            this._nome = nome;
        }

        get Sexo(){
            return this._sexo();
        }

        set Sexo(sexo: string) {
            this._sexo = sexo;
        }
        get Idade(){
            return this._idade ();
        }

        set Idade(idade: number) {
            this._idade = idade;
        }
    
}

const pessoas = new Pessoas ('thales', 'Masculino', 31);
console.log(pessoas)

