import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiclient = new APIClient<Game>('/games')

const useGame =(slug:string)=> useQuery({

    queryKey: [ 'game' ,slug ] ,

    queryFn: ()=> apiclient.getGame(slug)

})

export default useGame