
import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
};
export const useSuperHeroesData=(onSuccess,onError)=>{
    return useQuery("super-heroes", fetchSuperHeroes, {
        enabled: false,
        onSuccess,
        onError,
        select: (data) => {
            const superheroes = data?.data.map((hero) => {
                return hero.name;
            });
            return superheroes;
        },
    });
}