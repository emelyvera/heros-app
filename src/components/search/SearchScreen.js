import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    /**
     * el parse para que lo separe 
     */
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;
    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Search </h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <div className='card'>
                        <h4>Buscar</h4>
                        <hr />

                        <form onSubmit={handleSearch}>
                            <input
                                type='text'
                                placeholder='Burscar un Héroe'
                                className='form-control'
                                name='searchText'
                                autoComplete='off'
                                value={searchText}
                                onChange={handleInputChange}
                            />
                            <button
                                type='submit'
                                className='btn btn-outline-primary mt-1'
                            >
                                Buscar ...
                            </button>
                        </form>

                    </div>
                </div>
                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className='alert alert-info'>Buscar un Heroe</div>
                            : (heroesFilter.length === 0)
                            && <div className='alert alert-danger'>No hay Resultados: {q}</div>
                    }

                    {
                        heroesFilter.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
};
