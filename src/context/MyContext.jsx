import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const NewContext = createContext();
export default function MyContextProvider({ children }) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [token, setToken] = useState("");

  // const getAllNews = async () => {
  //   try {
  //     const response = await axios.get(`${BACKEND_URL}/api/news`);
  //     setNews(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const getAllNews = async ({
    category,
    tag,
    search,
    page = 1,
    limit = 10,
  } = {}) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/news`, {
        params: {
          category, // id OR name
          tag, // id OR name
          search,
          page,
          limit,
        },
      });

      setNews(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (logindata) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/users/login`, logindata);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        navigate("/");
        // toast.success("User Login Sucessfully");
        // window.location.reload();
      }
    } catch (error) {
      console.error(error.response?.data?.message || "Something Went Wrong");
      toast.error(error.response?.data?.message);
    }
  };

  const userRegister = async (registerdata) => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/users/register`,
        registerdata,
      );
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        navigate("/");
        // toast.success("User Registered Sucessfully");
        // window.location.reload();
      }
    } catch (error) {
      console.error(error.response?.data?.message || "Something Went Wrong");
      toast.error(error.response?.data?.message || "Something Went Wrong");
    }
  };

  useEffect(() => {
    //when the token is exist but validity of token is expired and checks validity of token
    const verifyUser = async () => {
      const savedToken = localStorage.getItem("token");
      if (!savedToken) {
        return;
      }
      try {
        await axios.get(`${BACKEND_URL}/api/users/me`, {
          headers: { Authorization: `Bearer ${savedToken}` },
        });
        setToken(savedToken);
        localStorage.setItem("token", savedToken);
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          setToken("");
        }
      }
    };
    verifyUser();
  }, []);

  useEffect(() => {
    //
    if (!token && localStorage.getItem("token")) {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <NewContext.Provider
      value={{ news,setNews, token, setToken, getAllNews, userLogin, userRegister }}
    >
      {children}
    </NewContext.Provider>
  );
}
