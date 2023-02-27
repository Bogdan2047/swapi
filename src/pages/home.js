import react, { useContext } from "react"
import { AxiosContext } from "../axios/axiosContext"
import BlockFilm from '../context/blockFilm'

export const Home = () => {

 const data = useContext(AxiosContext)


    return(
        <div>
           <BlockFilm  data={data} />
        </div>
    )
}