"use client";

function getAuthUser() {
  return localStorage.getItem("authToken");
}

export function getUserFromToken() {
  const token = getAuthUser();

  if (!token) return;

  const arrayToken = token?.split(".");

  const tokenPayload = JSON.parse(atob(arrayToken[1]));

  return tokenPayload;
}

export default getAuthUser;