
class Estudante {
    // atributos
  private _matricula: string
  private _nome: string;
  private _nP: number[];
  private _nT: number[];

    // métodos
    // constructor(name: string) {
    
    //     this.nome = name;
    // }

    somaDasNotas() {
        return [...this._nP, ...this._nT].reduce((np, nt) => {
            return np + nt;
        }, 0)
    }
    mediaDaSoma() {
        
        const sum = this.somaDasNotas();
        
        return Math.round(sum / (this._nP.length + this._nT.length))
    }
}


