import React, {useState} from 'react';
// import Cadastro from './Cadastro';

import '../App.css';

const Teste = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    return ( 
        <form onSubmit={(event) => { 
            event.preventDefault()
            console.log(nome, sobrenome)}}>

<div class="mb-3">
                <label for="formGroupExampleInput" class="form-label"> Nome </label>
                <input 
                type="text" 
                class="form-control" 
                id="formGroupExampleInput"
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }} 
            />
            </div>

            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"> Sobrenome </label>
                <input 
                type="text" 
                class="form-control" 
                id="formGroupExampleInput2"
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }} 
                />
            </div>
            
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"> CPF </label>
                <input 
                type="text" 
                class="form-control" 
                id="formGroupExampleInput2" 
                />
            </div>

            <div className="row-switches">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Promoções</label>
                </div>

                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Novidades</label>
                </div>
                </div>
                <button class="btn btn-primary" type="submit">Cadastrar</button>
        </form>
    );
};
 
export default Teste;