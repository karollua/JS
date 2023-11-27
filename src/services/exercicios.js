import RepositorioExercicio from "../repositories/exercicios.js"
 
const repositorio = new RepositorioExercicio()
export default class ServicoExercicio {
 
    PegarUm(index){
        return repositorio.PegarUm(index - 1);
    }
 
    PegarTodos(){ //Erro de português
        return repositorio.PegarTodos();
    }
 
    Adicionar(nome){
        if(!nome) { //logica estava errada, adicionei o -!- para tornar ela certa
          throw new Error("Favor preencher o nome.");
        }
        repositorio.Adicionar(nome);
    }
 
    Alterar(index, nome){
      if(!nome) {
        throw new Error("Favor preencher o nome."); //Erro de português
      } else if(!index || isNaN(index)) {
        throw new Error("Favor preencher corretamente o index.");
      }
 
      repositorio.Alterar(index -1,nome); //Alterei o Adicionar, pois ele está fazendo uma alteração e não adicionar, além do parametro está errado
    }
 
    Deletar(index){
      if(!index || isNaN(index)) {
        throw new Error("Favor preencher corretamente o index.");
      }
 
      repositorio.Deletar(index-1)
    }
 
}