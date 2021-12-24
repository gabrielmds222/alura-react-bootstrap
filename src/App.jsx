import React from 'react';
// import Cadastro from './components/Formulario/Cadastro';
import Formulario from './components/Formulario'
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <h2> Formulário de Cadastro </h2>
        {/* <Cadastro/> */}
        <div className="row">
          <Formulario validarCPF={validarCPF}/>
        </div>
      </div>
    </>
  );
}

// function aoEnviarForm(dados){
//   console.log(dados);
// }

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
