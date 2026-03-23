import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/ai-generate-8392");
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="p-6 border border-gray-800 rounded-xl">
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 bg-gray-900 border border-gray-700 rounded"
        />

        <button
          onClick={handleLogin}
          className="ml-3 px-4 py-2 bg-white text-black rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;