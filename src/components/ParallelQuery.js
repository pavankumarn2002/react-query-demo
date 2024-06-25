import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends");
};
export default function ParallelQuery() {
    const {data:superHeroes}=useQuery("super-heroes",fetchSuperHeroes)
    const {data:friends}=useQuery("friends",fetchFriends)
  return (
    <div>
        <h1>Super Heroes</h1>
        {superHeroes?.data.map((hero) => {
                return <div key={hero.name}>{hero.name}</div>;
            })}
            <h1>Friends</h1>
        {friends?.data.map((friend) => {
                return <div key={friend.name}>{friend.name}</div>;
            })}
    </div>
  )
}
