import React from "react";

function NotFound() {
  return (
    <>
      <div className="flex justify-center items-center dynamic-card">
        <div className="text-slate-200 bg-slate-800 sm:max-w-xl px-16">
          <h1 className="flex uppercase font-black text-3xl pb-3">Not Found</h1>
          <p> The page you were looking for was not found.</p>
        </div>
      </div>

      <div className="flex justify-center items-center dynamic-card pt-5">
        <a href="/">
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Return to home
          </button>
        </a>
      </div>
    </>
  );
}

export default NotFound;
