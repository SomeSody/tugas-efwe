import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${username || "traveler"}! 🌴`);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Account created for ${signupName || "traveler"}! 🌴`);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/img/beach-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.28)",
          zIndex: 0,
        }}
      />

      {/* Glass wrapper — fills entire screen */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        {/* ── Navbar ── */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 32px",
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <NavButton label="Home" />
            <NavButton label="About" />
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <NavButton label="Log in" active />
            <NavButton label="Contact us" />
          </div>
        </nav>

        {/* ── Body ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "0 48px 40px",
            gap: 40,
          }}
        >
          {/* Left: Branding */}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontSize: "clamp(48px, 6vw, 80px)",
                color: "#fff",
                lineHeight: 1.05,
                fontWeight: 700,
                textShadow: "0 4px 24px rgba(0,0,0,0.25)",
                margin: 0,
              }}
            >
              Dream
              <br />
              Destination
            </h1>
            <p
              style={{
                fontFamily: "'Dancing Script', cursive, serif",
                fontSize: "clamp(18px, 2.5vw, 26px)",
                color: "rgba(255,255,255,0.80)",
                marginTop: 10,
                textShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              Travel with the best
            </p>
          </div>

          {/* Right: Form card */}
          <div
            style={{
              width: "clamp(280px, 28vw, 340px)",
              flexShrink: 0,
              borderRadius: 20,
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              border: "1.5px solid rgba(255,255,255,0.40)",
              boxShadow: "0 6px 32px rgba(0,0,0,0.18)",
              overflow: "hidden",
            }}
          >
            {/* Tabs */}
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid rgba(255,255,255,0.20)",
              }}
            >
              <TabButton
                label="Log in"
                active={activeTab === "login"}
                onClick={() => setActiveTab("login")}
              />
              <TabButton
                label="Sign up"
                active={activeTab === "signup"}
                onClick={() => setActiveTab("signup")}
              />
            </div>

            {/* Form area */}
            <div
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {activeTab === "login" ? (
                <form
                  onSubmit={handleLogin}
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div>
                    <p style={labelStyle}>Username</p>
                    <InputRow>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        style={inputStyle}
                      />
                      <UserIcon />
                    </InputRow>
                  </div>

                  <div>
                    <p style={labelStyle}>Password</p>
                    <InputRow>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        style={inputStyle}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      >
                        <LockIcon />
                      </button>
                    </InputRow>
                  </div>

                  <button type="submit" style={submitBtnStyle}>
                    Log in
                  </button>

                  <p style={footLinkStyle}>
                    <a
                      href="#"
                      style={{ color: "#fff", textDecorationOffset: 2 }}
                    >
                      Forgot password?
                    </a>
                  </p>
                </form>
              ) : (
                <form
                  onSubmit={handleSignup}
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <InputRow>
                    <input
                      type="text"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      placeholder="Enter full name"
                      style={inputStyle}
                    />
                    <UserIcon />
                  </InputRow>

                  <InputRow>
                    <input
                      type="email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      placeholder="Enter email"
                      style={inputStyle}
                    />
                    <MailIcon />
                  </InputRow>

                  <InputRow>
                    <input
                      type="password"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      placeholder="Create password"
                      style={inputStyle}
                    />
                    <LockIcon />
                  </InputRow>

                  <button type="submit" style={submitBtnStyle}>
                    Sign up
                  </button>

                  <p style={footLinkStyle}>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("login")}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                        textDecoration: "underline",
                        textDecorationOffset: 2,
                        fontSize: 12,
                        padding: 0,
                      }}
                    >
                      Log in
                    </button>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}

/* ── Shared styles ── */

const labelStyle = {
  fontSize: 11,
  color: "rgba(255,255,255,0.50)",
  marginBottom: 5,
  paddingLeft: 4,
};

const inputStyle = {
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#fff",
  fontSize: 14,
  caretColor: "#fff",
  width: "100%",
};

const submitBtnStyle = {
  width: "100%",
  padding: "13px",
  borderRadius: 999,
  border: "none",
  background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
  color: "#fff",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  boxShadow: "0 4px 16px rgba(34,197,94,0.38)",
};

const footLinkStyle = {
  textAlign: "center",
  fontSize: 12,
  color: "rgba(255,255,255,0.60)",
  marginTop: -4,
};

/* ── Sub-components ── */

function InputRow({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "rgba(255,255,255,0.14)",
        border: "1px solid rgba(255,255,255,0.30)",
        borderRadius: 14,
        padding: "12px 16px",
        gap: 10,
      }}
    >
      {children}
    </div>
  );
}

function NavButton({ label, active = false }) {
  return (
    <button
      style={{
        padding: "8px 20px",
        borderRadius: 999,
        border: `1px solid ${active ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.35)"}`,
        background: active ? "rgba(255,255,255,0.18)" : "transparent",
        color: active ? "#fff" : "rgba(255,255,255,0.85)",
        fontSize: 14,
        fontWeight: active ? 600 : 400,
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: "18px 0",
        background: "transparent",
        border: "none",
        color: active ? "#fff" : "rgba(255,255,255,0.55)",
        fontSize: 15,
        fontWeight: 600,
        cursor: "pointer",
        position: "relative",
      }}
    >
      {label}
      {active && (
        <span
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 2.5,
            background: "#fff",
            borderRadius: 2,
            display: "block",
          }}
        />
      )}
    </button>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="rgba(255,255,255,0.70)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="rgba(255,255,255,0.70)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7.125a4.5 4.5 0 10-9 0V10.5m-1.875 0h12.75A1.875 1.875 0 0119.5 12.375v7.5A1.875 1.875 0 0117.625 21.75H6.375A1.875 1.875 0 014.5 19.875v-7.5A1.875 1.875 0 016.375 10.5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="rgba(255,255,255,0.70)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}