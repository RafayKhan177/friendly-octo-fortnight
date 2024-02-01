import React from "react";
import AuthForm from "./components/AuthForm";

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-white mb-8">
        Welcome to Watch List
      </h1>

      <p className="text-lg text-center text-white mb-8">
        Your personal space to create, view, delete, modify, and manage your
        watches from your website.
      </p>

      <AuthForm />
    </div>
  );
}
