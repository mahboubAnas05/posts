import { useSelector } from "react-redux"
import { data } from "react-router-dom"

export default function DetailVelo(){
    
    const velos = useSelector(data=>data.velo)
    

    return(
        <div className="container-fluid row bg-light vh-100">

            <div className="col-3"></div>
            <div className="p-5 col-6">
                <div className="p-4 card">
                    <h1 className="text-primary fw-bold">Velo Details</h1>
                    <p className="text-capitalize"><span className="fw-bold">Matricule:</span> {velos.Matricule/*/velos.velo.Matricule*/}</p>
                    <p className="text-capitalize"><span className="fw-bold">Capacite Batterie actuelle:</span> {velos.BattrieUtilisee.Capacite/*/velos.velo.BattrieUtilisee.Capacite*/} %</p>
                    <p className="text-capitalize"><span className="fw-bold">santé Batterie acttuelle:</span> {velos.BattrieUtilisee.sante_batterie/*/velos.velo.BattrieUtilisee.sante_batterie*/} %</p>
                    <p className="text-capitalize"><span className="fw-bold">date derniere maintenence:</span> {velos.Date_derniere_maintenence/*/velos.velo.Date_derniere_maintenence*/}</p>
                    <p className="text-capitalize"><span className="fw-bold">date prochaine maintenence:</span> {velos.Date_prochaine_maintenence/*/velos.velo.Date_prochaine_maintenence*/}</p>
                </div>
            </div>
            <div className="col-3"></div>


        </div>
        )
}