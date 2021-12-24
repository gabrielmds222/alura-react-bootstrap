import React, {useState} from 'react';
// import Button from "@material-ui/core/Button";

const Cadastro = () => {
    const [nome, setNome] = useState("Gabriel");
    return ( 
      <>
        <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label"> Nome </label>
                <input 
                type="text" 
                class="form-control" 
                id="formGroupExampleInput"
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                    if ( nome.length >= 3 ) {
                        setNome(nome.substring(0, 3));
                    }
                }} 
            />
            </div>

            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"> Sobrenome </label>
                <input 
                type="text" 
                class="form-control" 
                id="formGroupExampleInput2" 
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
      </>
     );
}
 
export default Cadastro;