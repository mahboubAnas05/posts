import { Link } from "react-router-dom";

export default function Student(student){
    return(
        <Link to={"#"} className="w-100 text-decoration-none text-dark">
            <article className="d-flex justify-content-between">

                <p>{student.CEF}</p>
                <p>{student.Nom}</p>
                <p>{student.Prenom}</p>
                <p>{student.Group}</p>

            </article>
            <hr />
        </Link>
    )
}