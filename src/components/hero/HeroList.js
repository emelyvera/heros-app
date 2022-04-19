
import { useMemo } from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [ publisher ]);

    return (
        <div className='row rows-cols-1 row-cols-md-3 g3 animate__animated animate__fadeInDown'>

            {
                heroes.map(hero => (
                    <HeroCard
                    /**de esta manera le estpoy enviado las prop y en lugar de 
                     * id={id} ey asi una a una se pone como lo que sigue {...hero}
                     */
                        {...hero}
                        key={hero.id}
                    />
                ))
            }

        </div>
    )
};
