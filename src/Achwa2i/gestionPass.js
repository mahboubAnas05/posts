import { useState } from "react"

function GestionPassword(){

//password avoir au moins 4 caractéres

    const [password, setPassword] = useState("")

    const [errorPassword, setErrorPassword] = useState("")

    const ChangePassword = event => {
        setPassword(event.target.value)
    }
    
    function handelSubmit(event){
        event.preventDefault();

        let isValid = true

        if(!password){
            setErrorPassword("veuillez remplir le champs")
            isValid = false
        }
        else if(password.length < 4) {
            setErrorPassword("password avoir au moins 4 caractéres")
            isValid = false
        }
        else if(password.length > 20) {
            setErrorPassword("password faloire de 20 caractéres en limite")
            isValid = false
        }
        else{
            setErrorPassword("")
        }

        if(!isValid){
            return
        }
    }


    return(
        <form className="row" onSubmit={handelSubmit}>

            <div className="col-4"></div>

            <div className="col-4 mt-5">
                <label>Entrer votre password : </label>
                <input onInput={ChangePassword} value={password} type="password" placeholder="Entrer votre mot de passe" className="form-control"/>
                <p className="text-danger">{errorPassword}</p>

                <input type="submit" className="btn btn-primary"/>
            </div>

            <div className="col-4"></div>

        </form>
    )
}

export default GestionPassword