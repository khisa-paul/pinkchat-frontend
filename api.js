import { API_BASE } from "./config";

// General request wrapper
export async function apiRequest(endpoint, method = "GET", body = null) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
    credentials: "include", // include cookies for auth
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE}${endpoint}`, options);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "API request failed");
  }

  return response.json();
}

// ====== AUTH ======
export async function register(username, password) {
  return apiRequest("/api/auth/register", "POST", { username, password });
}

export async function login(username, password) {
  return apiRequest("/api/auth/login", "POST", { username, password });
}

export async function logout() {
  return apiRequest("/api/auth/logout", "POST");
}

// ====== STATUS ======
export async function fetchStatuses() {
  return apiRequest("/api/status", "GET");
}

export async function uploadStatus(user, text) {
  return apiRequest("/api/status", "POST", { user, text });
}
