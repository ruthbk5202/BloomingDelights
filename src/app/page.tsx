"use client";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/page";

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}
