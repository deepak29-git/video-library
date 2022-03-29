import { Banner } from "../../components/Banner/Banner"
import { Categories } from "../../components/Categories/Categories"
import { Header } from "../../components/Header/Header"

export const Home=()=>{
    return(
        <div>
            <Header/>
           <Banner/>
            <Categories/>
        </div>
    )
}