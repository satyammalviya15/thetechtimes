import axios from "axios";
import {createContext, useEffect, useState } from "react";
export const NewContext = createContext();
export default function MyContextProvider({children}){

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [news, setNews] = useState([]);
    const [token,setToken]=useState("");

    const getAllNews = async()=>{
        try {
            const response = await axios.get(`${BACKEND_URL}/api/news`);
            setNews(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

    useEffect(()=>{
        getAllNews();
    },[]);

    return(
        <NewContext.Provider value={{news,getAllNews}}>
        {children}
        </NewContext.Provider>
    )
}