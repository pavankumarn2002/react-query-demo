
import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperHeroes = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export const useSuperHeroeData=(heroId)=>{
    return useQuery(["super-heroes",heroId], ()=>fetchSuperHeroes(heroId));
}