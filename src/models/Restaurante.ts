class Restaurante {
  titulo: string
  tipo: string
  capa: string
  descricao: string
  avaliacao: string
  id: number

  constructor(
    id: number,
    titulo: string,
    tipo: string,
    capa: string,
    descricao: string,
    avaliacao: string
  ) {
    this.id = id
    this.titulo = titulo
    this.tipo = tipo
    this.capa = capa
    this.descricao = descricao
    this.avaliacao = avaliacao
  }
}

export default Restaurante
