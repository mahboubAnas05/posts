import { useSelector } from "react-redux"

export default function AddChange(){

    const velos = useSelector(data => data)

    return(
        <div className="container-fluid row bg-light vh-100">

            <div className="col-3"></div>
            <div className="col-6">
                <div className="card p-3">
                    <h1 className="text-primary fw-bold text-center">changement de Batterie</h1>

                    <div className="d-flex gap-3 mt-2">
                        <p className="fw-bold">Velo:</p>
                        <p className="fw-bold">{velos.velo.Matricule}</p>
                    </div>

                    <div className="d-flex gap-3 mt-2">
                        <p className="fw-bold">Ancienne Batterie:</p>
                        <p className="fw-bold">{velos.velo.BattrieUtilisee.Numero_serie}</p>
                    </div>
                    
                    <div className="d-flex gap-3 mt-2">
                        <p className="fw-bold">Nouvelle Batterie:</p>
                        <select className="form-select">
                            <option value="">-- Choisir une batterie --</option>
                        </select>
                    </div>
                    
                    <div className="d-flex gap-3 mt-2">
                        <p className="fw-bold">Date de Changement:</p>
                        <input type="date" className="form-control"/>
                    </div>

                    <div className="d-flex gap-3 mt-2">
                        <p className="fw-bold">Technicien:</p>
                        <select className="form-select">
                            <option value="">-- Choisir une technicien --</option>
                        </select>
                    </div>

                    <div className="d-flex gap-3 mt-2">
                        <p className="fw-bold">Raison:</p>
                        <textarea className="form-control"></textarea>
                    </div>

                    <input type="button" value="Ajouter" className="btn btn-primary w-100 mt-3" />
                    
                    
                </div>
            </div>
            <div className="col-3"></div>

        </div>
    )
}