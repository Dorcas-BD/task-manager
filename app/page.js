"use client";

import React from "react";
import "./styles/styles.css";
import { userAuth } from "./components/context/AuthContext";
import Link from "next/link";

export default function Home() {
  const { user, googleSignIn } = userAuth();

  const handleLogin = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleAddTasks = (task) => {

  // };

  return (
    <main className="hero-container">
      {!user ? (
        <div className="hero-content">
          <h2>We help you manage your tasks</h2>
          <p>Please login or sign up to manage your tasks</p>
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        <div className="home-hero-content">
          <h2>Welcome, {user.displayName}</h2>
          <p>Keep track of your tasks by adding tasks</p>
          <Link href="/taskManager" className="add-home-btn">
            Add Tasks
          </Link>
        </div>
      )}
    </main>
  );
}
