import Carousel from "../carousel/Carousel";
import Category from "../category/category";
import Navbar from "../navigation/navbar";
import { fetchCategory } from "../../redux-Config/Index/categorySlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Home(){
 
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchCategory());
    },[])

    return <>
     <Navbar/>
     <Carousel/>
     <Category/>
    </>
           
    

}
export default Home