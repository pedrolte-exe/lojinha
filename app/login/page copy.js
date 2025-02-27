'use client'
import Image from "next/image";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { useState } from "react";
import Produtos from "./components/Produtos";

export default function Home() {

  function Login(){

    const [usuario,alteraUsuario] =useState({})

    const [email, alteraEmail] =useState("")
    const [senha, alteraSenha] = useState("")

    function logar(){

      const usuario ={
        id: 3,
        email: "Conradito",
        senha: "123"
      }



      if(email == usuario.email && senha == usuario.senha){
        console.log("Usuario encontrado!")
        usuario.senha = ""
        localStorage.setItem("itemCarrinho",JSON.stringify(usuario))
      }
    }

  }

    
  return (
    <div className="flex ml-4">
      

      <p>Digite o Email</p>
      <input onChange={(e)=> alteraEmail(e.target.value)}/>

      <p> Digite a senha</p>
      <input onChange={(e)=> alteraSenha(e.target.value)} />

      <button onClick={()=>logar()} />

    </div>
  );
}
