import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAddData, useDeleteData, useHookData } from "../hooks/useHookData";
const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
};
export default function DataById() {
    const [name,setName]=useState(" ")
    const [alterEgo,setAlterEgo]=useState(" ")
  const onSuccess=(data)=>{
    console.log("success",data)
  }
  const onError=(error)=>{
    console.log("Error",error)
  }
    const { isLoading, data, isError, error, isFetching, refetch } = useHookData(onSuccess,onError)
    const {mutate:addHero,isLoading:addIsLoading,isError:addIsError,error:addError}=useAddData()
    const {mutate:deleteHero}=useDeleteData()
    const handleSubmit=()=>{
         const hero={name,alterEgo}
         addHero(hero)
    }
    const handleDelete=(id)=>{
        deleteHero(id)
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>{error.message}</div>;
    }
    return (
        <div>
            <div>
            <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" name="alterEgo" id="alterEgo" onChange={(e)=>setAlterEgo(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
            <button className="" onClick={refetch}>
                Fetch Heroes
            </button>
            {data?.data.map((hero) => {
                return <div key={hero.name}>
                    <Link to={`/data-by-id/${hero.id}`}>{hero.name}</Link>
                    <button onClick={()=>handleDelete(hero.id)}>Delete</button>
                    </div>;
            })}
        </div>
    );
}
