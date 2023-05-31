import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("token");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkUserToken();
  }, []);

  return isLoggedIn ? children : null;
};

export default AuthRoute;
