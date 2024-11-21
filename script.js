
    // Import the Supabase library
    import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

    // Supabase credentials
    const SUPABASE_URL = "https://ljhjflxyxyshthyrfszb.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqaGpmbHh5eHlzaHRoeXJmc3piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyMTk3MjIsImV4cCI6MjA0Nzc5NTcyMn0.zVx8wubAxqWlu0DwpdsjViel26A0vhcNjcGK-RHol9g";

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Get DOM elements
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");
    const messageDiv = document.getElementById("message");
    const startMessage = document.getElementById("start");
    const finalMessage = document.getElementById("final");

    // Login button event listener
    loginButton.addEventListener("click", async () => {
      const email = emailInput.value;
      const password = passwordInput.value;

      try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
          messageDiv.textContent = `Error: ${error.message}`;
          messageDiv.style.color = "red";
        } else {
          messageDiv.textContent = "Login successful!";
          messageDiv.style.color = "green";
          console.log("User:", data.user);
          startMessage.style.display = "none";
          finalMessage.style.display = "block";
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        messageDiv.textContent = "An unexpected error occurred.";
        messageDiv.style.color = "red";
      }
    });
 