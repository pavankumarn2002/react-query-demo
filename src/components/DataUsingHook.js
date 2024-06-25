import React from "react";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
export default function DataUsingHook() {
    const onSuccess = (data) => {
        console.log("success", data);
    };
    const onError = (error) => {
        console.log("Error", error);
    };
    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess,onError)
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
