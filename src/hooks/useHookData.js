
import { useQuery,useMutation ,useQueryClient} from "react-query";
import axios from "axios";
const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
};
const addSuperHeroes=(hero)=>{
    return axios.post("http://localhost:4000/superheroes",hero);
}
const deleteSuperHeroes=(id)=>{
    return axios.delete(`http://localhost:4000/superheroes/${id}`);
}
const updateSuperHeroes=(hero)=>{
    console.log("hero",hero)
    return axios.put(`http://localhost:4000/superheroes/${hero?.id}`,hero?.updatedHero);
}
export const useHookData=(onSuccess,onError)=>{
    return useQuery("super-heroes", fetchSuperHeroes, {
        enabled: false,
        onSuccess,
        onError
    });
}
export const useAddData=()=>{
    const queryClient=useQueryClient()
   return useMutation(addSuperHeroes,{
    onSuccess:()=>{
      queryClient.invalidateQueries('super-heroes')
    }
   })
}
export const useDeleteData=()=>{
    const queryClient=useQueryClient()
   return useMutation(deleteSuperHeroes,{
    onSuccess:()=>{
      queryClient.invalidateQueries('super-heroes')
    }
   })
}
export const useUpdateData=()=>{
    const queryClient=useQueryClient()
   return useMutation(updateSuperHeroes,{
    onSuccess:()=>{
      queryClient.invalidateQueries('super-heroes')
    }
   })
}