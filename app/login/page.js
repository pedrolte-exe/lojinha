'use client'

import { useState } from "react";

function Login() {
    const [ admin, alteraAdmin ] = useState(false); // sempre use const, para não poder ser alterado, por questões de segurança
    


    function manipulaAdmin(){

        if (admin == true){
            alteraAdmin(false)
        }else{
            alteraAdmin(true)
        }
    }

    return ( 
        <div className="p-5">
            <h1 className="text-lg text-blue-500 mb-2"> Pagina de Login</h1>
            <p> Você está logado como <strong> {admin == true ? <span> Administador </span> : <span> Usuário </span>} </strong> </p>
            <button onClick={()=>manipulaAdmin()} className={`mt-3 ${admin == true ? `bg-sky-500 `: `bg-red-500`} text-white p-2`}> {admin == false ? <span> Entrar como administrador</span> : <span> Voltar para usuário</span>} </button>
            {/* <button onClick={()=>manipulaAdmin()} className={"mt-3"+ (admin == true ? "bg-sky-500" : "bg-red-500")+" text-white p-2"}> {admin == false ? <span> Entrar como administrador</span> : <span> Voltar para usuário</span>} </button> */}
        <hr/>


            {
                admin == true ? 
                    <div>
                        <h2 className="text-lg text-lime-800 mt-10"> Ola administrador</h2>
                        <p> Seja bem-vindo</p>

                    <button className="bg-black text white p-3 mt-5"> Cadastrar usuário</button>
                    <p>Digite o nome:</p>
                    <input className="border-2"/>
                    </div>
                :
                    <div></div>
            }



        </div>


     );
}

export default Login;