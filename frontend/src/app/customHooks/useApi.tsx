"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { setToken } from "../utility/storage";
import { getMe, loginUser, signupUser } from "../utility/axiosApi";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";




export const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setToken(data.token);
      dispatch(setUser(data.user));
    },
  });
};

export const useSignup = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      setToken(data.token);
      dispatch(setUser(data.user));
    },
  });
};
export const useGetMe = () =>
  useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
  });
