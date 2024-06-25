import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroeData } from '../hooks/useSuperHeroData'
import { useUpdateData } from '../hooks/useHookData'

export default function SuperHeroDetails() {
  const [name,setName]=useState()
    const [alterEgo,setAlterEgo]=useState()
    const {heroId}=useParams()
    const { isLoading, data, isError, error }=useSuperHeroeData(heroId)
    const {mutate:updateHero}=useUpdateData()
    const handleSubmit=()=>{
      const updatedHero = { id: heroId, updatedHero: { name, alterEgo } }
      updateHero(updatedHero);  
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>{error.message}</div>;
    }
  return (
    <div>
        <h1>{data?.data.name} - {data?.data.alterEgo}</h1>
        <div>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="text"
                    name="alterEgo"
                    id="alterEgo"
                    onChange={(e) => setAlterEgo(e.target.value)}
                    value={alterEgo}
                />
                <button type="submit" onClick={handleSubmit}>Update</button>
            </div>
    </div>
  )
}
