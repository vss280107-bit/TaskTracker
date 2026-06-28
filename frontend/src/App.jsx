import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1a1a24",
            color: "#fff",
            border: "1px solid #2e2e42",
            borderRadius: "10px",
            fontSize: "14px",
          },
          success: { iconTheme: { primary: "#34d399", secondary: "#1a1a24" } },
          error: { iconTheme: { primary: "#f87171", secondary: "#1a1a24" } },
        }}
      />
    </BrowserRouter>
  );
}
