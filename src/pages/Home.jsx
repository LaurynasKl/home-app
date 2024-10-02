import { BusinessCards } from "../components/common/category/BusinessCards";
import CategoryList from "../components/common/category/CategoryList";
import Hero from "../components/common/category/Hero";

function Home(){
    return(
        <>
        <Hero />
        <CategoryList />
        <BusinessCards />
        </>
    )
};

export default Home;