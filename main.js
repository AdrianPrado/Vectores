
class Vector{

  constructor(){
    this.v = [2]
  }

  llenar(){
    for (let i = 1; i < 10; i++){
    this.v[i] = this.v[i - 1] + 2
    }
  }

  mostrar(){
    let r = ''

    for (let i = 0; i < 10; i++){
      r += this.v[i] + ' '
    }
    return r
  }

  girarDerecha(){
      let u = this.v[this.v.length - 1]

      for (let i = 9; i >= 0; i--){
          this.v[i] = this.v[i - 1]
      }

      this.v[0] = u
  }

  girarIzquierda(){
      let p = this.v[0]

      for (let i = 0; i < 10; i++){
          this.v[i] = this.v[i + 1]
      }

      this.v[this.v.length - 1] = p
  }

  invertirVector(){
    let t = 0
    let c = this.v.length - 1

    for (let i = 0; i < this.v.length / 2; i++){
      t = this.v[i]
      this.v[i] = this.v[c]
      this.v[c] = t
      c--
    }
  }
}

let nV = new Vector()
nV.llenar()

console.log(nV.mostrar())
nV.invertirVector()
console.log(nV.mostrar())