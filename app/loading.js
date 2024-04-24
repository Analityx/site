"use client";
import React from "react";
import "@/app/globals.css";

export default function Loading() {
  return (
    <section className="bg-white w-full h-screen flex justify-center items-center z-[99] absolute top-0">
      <div className="w-full flex flex-wrap justify-center">
        <div className="w-full flex items-center justify-center">
          <img
            src="/assets/img/analityx-logo-color.png"
            alt="Logo analityx"
            className="w-[20%] h-auto"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="preloader-container w-[200px]">
            <div className="preloader"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
