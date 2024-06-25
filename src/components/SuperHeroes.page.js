import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SuperHeroesPage() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const[error,setError]=useState("")
    const fetchData = async () => {
        axios.get("http://localhost:4000/superheroes").then((res) => {
            setData(res.data);
            setIsLoading(false);
        }).catch((error)=>{
            setError(error.message)
            setIsLoading(false)
        });
    };
    useEffect(()=>{
        fetchData()
    },[])
    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
    return <div>
        {
            data?.map((hero)=>{
                return <div key={hero.name}>{hero.name}</div>
            })
        }
    </div>;
}
