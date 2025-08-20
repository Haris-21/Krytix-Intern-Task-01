// LOGIN USER
export const loginUser = async (username, password) => {
  try {
    const res = await fetch("https://os-project-server.vercel.app/auth/existinguser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

// REGISTER USER
export const registerUser = async (username, email, password) => {
  try {
    const res = await fetch("https://os-project-server.vercel.app/auth/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (error) {
    console.error("Register Error:", error.message);
    throw error;
  }
};

// Send OTP to email
export const sendOtp = async (email) => {
  const res = await fetch("https://os-project-server.vercel.app/auth/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to send OTP");
  return data;
};

// Reset password with OTP
export const resetPassword = async (email, otp, newPassword) => {
  const res = await fetch("https://os-project-server.vercel.app/auth/reset-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp, newPassword }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to reset password");
  return data;
};
