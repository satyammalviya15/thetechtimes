import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NewContext } from "../context/MyContext";

export default function AuthSuccess() {
  const {setToken} =useContext(NewContext);
  const navigate = useNavigate();
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      setToken(token);
      navigate("/", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  return <p>Signing you in…</p>;
}
