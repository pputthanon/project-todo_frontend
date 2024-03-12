import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="h-12 bg-[#CCD5AE] flex justify-between items-center cursor-pointer">
      <div className="mx-3">Header</div>
      <div
        className="mx-3"
        onClick={() => {
          logout();
          navigate("/register");
        }}
      >
        Log out
      </div>
    </div>
  );
}
