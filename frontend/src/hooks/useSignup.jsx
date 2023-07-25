/* eslint-disable no-unused-vars */
import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      // fetch data from backend
      const response = await fetch("http://localhost:3000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(json.error || "Something went wrong!");
        // setError(json.error);

      }

      if (response.ok) {
        // save user data in local storage
        localStorage.setItem("user", JSON.stringify(json));

        // update the auth context
        dispatch({
          type: "LOGIN",
          payload: json,
        });
      }

      return json;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signup,
    error,
    isLoading,
  };
};

export default useSignup;
