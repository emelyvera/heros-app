import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {

    const { heroeId } = useParams();

    const navigate = useNavigate();
    /**
     * el segundo parametro es la ependencia qyue hace que use Memo se dispare 
     * esto por si es muy grande la db 
     */

    const hero = useMemo (()=> getHeroById(heroeId), [ heroeId ]);

    const handleReturn = () => {
        /**
         * el -1 me dice que vuelva a la pagina naterior
         */
        navigate(-1)
    };

    if (!hero) {
        return <Navigate to='/' />
    };

    const { id, superHero, publisher, alter_ego, first_appearance, characters } = hero;

    const imagePath = `/assets/${id}.jpg`;


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={imagePath}
                    alt={superHero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item"> <b>Alter Ego: </b> {alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher: </b> {publisher}</li>
                    <li className="list-group-item"> <b>First Appearance: </b> {first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}

                >
                    Regresar
                </button>
            </div>

        </div>
    )
};