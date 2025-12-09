import { useDispatch, useSelector } from "react-redux"
import { data } from "react-router-dom"
import { decre, divi, incre, prod, rest, setNum1, setNum2 } from "../STORE/action2"
import { useState } from "react"

export default function Clac(){
    
    const {num1, num2, result} = useSelector(state => state)

    function handelChangeNum1(event){
        dispatcher(setNum1(event.target.value))
    }

    function handelChangeNum2(event){
        dispatcher(setNum2(event.target.value
        ))
    }

    const dispatcher = useDispatch()

    return(
        <div className="container-fluid row">
            <div className="col-2"></div>
            <div className="col-8">
               <h1 className="mt-3 text-center fw-bold">Calcule Usuelle</h1>

                <input onChange={handelChangeNum1} type="text" className="form-control mt-3" value={num1} placeholder="entrer le premier nombre..."/>
                <input onChange={handelChangeNum2} type="text" className="form-control mt-3" value={num2} placeholder="entrer le deuxieme nombre..."/>

                <div className="d-flex gap-2 mt-3">
                    <button onClick={()=>dispatcher(incre())} className="btn btn-primary">incrementer</button>
                    <button onClick={()=>dispatcher(decre())} className="btn btn-danger">decrementer</button>
                    <button onClick={()=>dispatcher(prod())} className="btn btn-success">produit</button>
                    <button onClick={()=>dispatcher(divi())} className="btn btn-warning">division</button>
                    <button onClick={()=>dispatcher(rest())} className="btn btn-secondary">restart</button>
                </div>

                <h1 className="text-center fw-bold mt-4">{result}</h1>

            </div>
            <div className="col-2"></div>
        </div>
    )
}