import { heroes } from "../data/heroes";


export const getHeroByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is noy a valid publisher`);
    }

    return heroes.filter(hero => hero.publisher === publisher)
};
