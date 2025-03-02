import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
};
export default function DataTransfering() {
    const onSuccess = (data) => {
        console.log("success", data);
    };
    const onError = (error) => {
        console.log("Error", error);
    };
    const { isLoading, data, isError, error, isFetching, refetch } = useQuery("super-heroes", fetchSuperHeroes, {
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
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>{error.message}</div>;
    }
    return (
        <div>
            <button className="" onClick={refetch}>
                Fetch Heroes
            </button>
            {data?.map((heroName) => {
                return <div key={heroName}>{heroName}</div>;
            })}
        </div>
    );
}
