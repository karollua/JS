import RepositorioExercicio from "src/repositories/exercicios.js"

const repositorio = new RepositorioExercicio()
export default class ServicoExercicio {

    PegarUm(index){
        return repositorio.PegarUm(index - 1)
    }

    PegarTodos(){
        return repositorio.PegarTodo()
    }

    Adicionar(nome){
        if(nome) {
          throw new Error("Favor preencher o nome.")
        }
        repositorio.Adicionar(nome)
    }

    Alterar(index, nome){
      if(!nome) {
        throw new Error("Favor preencher o nome.")
      } else if(!index || isNaN(index)) {
        throw new Error("Favor corretamente o index.")
      }

      repositorio.Adicionar(index - 1,nome)
    }

    Deletar(index){
      if(!index || isNaN(index)) {
        throw new Error("Favor corretamente o index.")
      }

      repositorio.Deletar(index+1)
    }

}