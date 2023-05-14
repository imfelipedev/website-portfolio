"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export function Toastify() {
    return <ToastContainer theme="light" position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} rtl={false} closeOnClick draggable />;
}
