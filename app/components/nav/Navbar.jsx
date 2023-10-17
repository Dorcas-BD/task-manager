import React, { useEffect, useState } from "react";
import Link from "next/link";
import { userAuth } from "../context/AuthContext";
import "../../styles/styles.css";

const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const { user, googleSignIn, logOut } = userAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  return (
    <div className="h-20 w-full border-b-2 flex item-center justify-between p-2 shadow-lg">
      <ul className="flex mt-3">
        <li className="p-2 cursor-pointer home">
          <Link href="/">Task Manager</Link>
        </li>
        {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/taskManager">Create Task</Link>
          </li>
        )}
      </ul>
      {loading ? null : !user ? (
        <ul className="flex mt-3 navbar">
          <li onClick={handleSignIn} className="p-2 cursor-pointer ">
            Login
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            SignUp
          </li>
        </ul>
      ) : (
        <div className="mt-3">
          <p>Welcome, {user.displayName}</p>
          <p
            className="cursor-pointer"
            onClick={handleSignOut}
            style={{ color: "#007bff" }}
          >
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
