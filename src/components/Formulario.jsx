import React, {useState} from 'react';
// import Cadastro from './Cadastro';

import '../App.css';

const Formulario = ({ validarCPF }) => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
    
    return ( 
        <form onSubmit={(event) => { 
            event.preventDefault()
            console.log(nome, sobrenome, cpf, promocoes, novidades)}}>

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
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}

                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }} 

                onBlur={(event)=>{
                    const ehValido = validarCPF(cpf);
                    setErros({cpf:ehValido})
                  }}
                />
            </div>

            <div className="row-switches">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }}/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Promoções</label>
                </div>

                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Novidades</label>
                </div>
                </div>
                <button class="btn btn-primary" type="submit">Cadastrar</button>
        </form>
    );
};
 
export default Formulario;