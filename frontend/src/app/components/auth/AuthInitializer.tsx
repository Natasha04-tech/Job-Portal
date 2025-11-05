"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getToken } from "@/app/utility/storage";
import { clearUser, setUser } from "@/app/redux/userSlice";
import { useGetMe } from "@/app/customHooks/useApi";
import { AppDispatch } from "@/app/redux/store";

export default function AuthInitializer() {
  const dispatch = useDispatch<AppDispatch>();
  const token = getToken();
  const { data, isSuccess, isError } = useGetMe();

  useEffect(() => {
    if (!token) {
      dispatch(clearUser());
      return;
    }
    if (isSuccess && data) dispatch(setUser(data));
    if (isError) dispatch(clearUser());
  }, [token, isSuccess, isError, data, dispatch]);

  return null;
}
