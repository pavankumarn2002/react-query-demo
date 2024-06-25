import React from "react";
import axios from "axios";
import { useQueries } from "react-query";
const fetchSuperHeroes = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export default function DynamicQuery({heroIds}) {
    const queryResult=useQueries(
        heroIds.map((id)=>{
           return{
            queryKey:["super-hero",id],
            queryFn:()=>{
                fetchSuperHeroes(id)
            }
           }
        })
    )
    console.log("queryResult",{queryResult})
  return (
    <div>DynamicQuery</div>
  )
}
