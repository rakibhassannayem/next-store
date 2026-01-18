"use client";

import React from "react";
import { useAuth } from "@/context/authContext";

const Page = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="avatar placeholder mb-4">
            <div className="bg-primary text-primary-content rounded-full w-24">
              <span className="text-3xl uppercase">{user?.name?.charAt(0)}</span>
            </div>
          </div>
          <h2 className="card-title text-2xl">Welcome to the protected page</h2>
          <p className="text-lg font-semibold text-primary">{user?.name}</p>
          <div className="badge badge-outline mt-2 italic uppercase text-xs">
            {user?.role}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            This is a protected area. You have successfully authenticated.
          </p>
          <div className="card-actions mt-6">
            <button
              onClick={logout}
              className="btn btn-error btn-outline rounded-full px-8"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;