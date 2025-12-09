import { createSlice } from "@reduxjs/toolkit";

const initialeState = {
    velo : {
        id : 14, 
        Matricule : "1 A 4321",
        Date_derniere_maintenence : "01/06/2025",
        Date_prochaine_maintenence : "01/08/2025",
        BattrieUtilisee : {
            Id : 135, 
            Capacite : 73,
            Numero_serie : "BAT-202",
            sante_batterie : 95,
            nombre_cycles : 2127,
            statut : "En Utilisation"
        }, 
        Techniciens : [{id : "", Nom : ""}] // dynamique
        ,Batteries : [{id : "", Numero_serie : ""}] // dynamique
        ,StatutBatteries : ["en Stock", "En Utilisation", "Retiré"] // on va prendre une de ces trois valeurs
    }
}

const velos = []

const veloSlice = createSlice({
    name : "velos",
    initialState : initialeState, 
    reducers : {
        addVelo : (state, action) => {
            velos.push()
        }
    }
})

export default veloSlice.reducer