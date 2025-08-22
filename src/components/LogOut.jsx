'use client'
import { signOut } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
const LogOut = () => {
    const handleLogOut = ()=>{
        signOut()
    }
  return (
    <button
      type="button"
      onClick={handleLogOut}
      className="button"
    >
      Sign out
    </button>
  );
};

export default LogOut;
