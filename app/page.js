'use client' // tem que colocar sempre pra chamar as funçõe do next de variaveis
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  
  // Aqui entra o Javascript normal

  let [ carrinho, alteraCarrinho] = useState(0);  // se for ingles, seria setCarrinho
  let [ precoProduto, alteraPreco] = useState(25);
  let [ valorTotal, alteraValorTotal] = useState(0);

  
  function manipulaCarrinho( adicionar ){ // é aqui que possibilitamos a manipulação do clique, pra fazer clicar e funcionar

    let novoCarrinho = carrinho;

    if(adicionar == true){
      alteraCarrinho( carrinho + 1)
      novoCarrinho++
    }else{
      alteraCarrinho( carrinho - 1)
      novoCarrinho--
    }
    alteraValorTotal (novoCarrinho * precoProduto)
  }
  
  function limpaCarrinho(){
    alteraCarrinho (0)
    alteraValorTotal (0)
  }
  
  function manipulaPreco( ){
    alteraPreco (19)
  }

  return (
    <div className="p-5">
      <h1 className="bg-sky-500 text-white p-3"> Lojinha do Next</h1>
      <p className="p-3 text-lg"> 
      Carrinho: <strong> {carrinho} </strong> Itens 
      </p>
      <button onClick={()=>limpaCarrinho()}  className="mr-2 bg-yellow-400 text-black mt-5 p-3 mb-3"> Limpar </button>
      
      <button onClick={()=>manipulaPreco()}  className="bg-black text-white mt-5 p-3 mb-3"> Adicionar Cupom </button>
      
      <hr/>

      <p className="p-3 text-lg text-red-600"> 
      Valor Total: R$ {valorTotal}  
      </p>
      <hr/>

      <h2>Produtos</h2>

      <div className=" border bg-sky-700 w-fit text-center text-white p-2">
        <img className="" src="https://placehold.co/200/"/>
        <h3 className="text-lime-200 font-bold">Produto modelo </h3>
        <p>
          R$ {precoProduto},00</p>
        <button onClick={()=>manipulaCarrinho(true)} className="bg-lime-400 text-blac mt-5 p-3"> Adicionar ao carrinho </button>
        <br/>
        <button onClick={()=>manipulaCarrinho(false)} className="bg-red-400 text-blac mt-5 p-3"> Remover do Carrinho</button>
      </div>
    </div>
  );
}
