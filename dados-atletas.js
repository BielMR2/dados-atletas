class Atleta{
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
  }
  calculaCategoria(){
    if(this.idade >= 9 && this.idade <= 11){
      return "Infantil"
    }
    else if(this.idade === 12 || this.idade === 13){
      return "Juvenil"
    } 
    else if(this.idade === 14 || this.idade === 15){
      return "Intermediário"
    }
    else if(this.idade >= 16 && this.idade <= 30){
      return "Adulto"
    }
    else return "Sem categoria"
  }
  calcularIMC(){
    return this.peso / (this.altura * this.altura)
  }
  calculaMediaValida(){
    this.notas.sort((a,b)=>a-b)
    let notasComputadas = this.notas.slice(1, this.notas.length-1)
    return notasComputadas.reduce((a, b) => a + b, 0) / notasComputadas.length
  }
  obtemNomeAtleta(){
    return this.nome
  }
  obtemIdadeAtleta(){
    return this.idade
  }
  obtemPesoAtleta(){
    return this.peso
  }
  obtemNotasAtleta(){
    return this.notas.toString()
  }
  obtemAlturaAtleta(){
    return this.altura
  }
  obtemCategoria(){
    return this.calculaCategoria()
  }
  obtemIMC(){
    return this.calcularIMC()
  }
  obtemMediaValida(){
    return this.calculaMediaValida()
  }
}

let atletas = []
atletas.push(new Atleta("Cesar Abascal",30, 80, 1.70,[10, 9.34, 8.42, 10, 7.88]))

// adicione aqui um novo atleta (retire o "//") ->
// atletas.push(new Atleta("nome",idade,peso,altura,[notas]))




atletas.forEach((atleta)=>  console.log(
`Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()}
Altura: ${atleta.obtemAlturaAtleta()}
Notas: ${atleta.obtemNotasAtleta()}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC()}
Média válida: ${atleta.obtemMediaValida()}

`))

