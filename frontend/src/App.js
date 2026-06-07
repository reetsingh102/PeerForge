import { useState } from "react";

const C = {
  bg: "#1B0E20",
  accent: "#44334A",
  mid: "#8D77A8",
  soft: "#D1C0EC",
  pale: "#C4ADDD",
  white: "#FFFFFF",
  lightBg: "#F0EAF9",
  cardBg: "#FFFFFF",
  muted: "#C4ADDD",
  border: "#44334A",
  lightBorder: "#D1C0EC",
  textDark: "#1B0E20",
  textMid: "#44334A",
};

const students = [
  { id: 1, name: "Reet Singh", role: "CSE, 3rd year", skills: ["Python", "Backend", "SQL"], av: "RS", tokens: 240, rating: 4.8 },
  { id: 2, name: "Abhinav Prem Singh", role: "ECE, 2nd year", skills: ["UI/UX", "Figma"], av: "APS", tokens: 180, rating: 4.6 },
  { id: 3, name: "Tanmay Saraf", role: "COE, 1st year", skills: ["React", "Frontend"], av: "TS", tokens: 90, rating: 4.2 },
  { id: 4, name: "Nirmesh Yadav", role: "CSE, 4th year", skills: ["Backend", "Flask"], av: "NY", tokens: 310, rating: 4.9 },
  { id: 5, name: "Angad Singh", role: "CSE, 2nd year", skills: ["LLM", "Python"], av: "AS", tokens: 150, rating: 4.5 },
];

const requests = [
  { skill: "Need help with React hooks", by: "Reet Singh", tokens: 30, urgency: "High" },
  { skill: "Video editing for project demo", by: "Abhinav Prem Singh", tokens: 50, urgency: "Medium" },
  { skill: "Need help with Flask", by: "Angad Singh", tokens: 80, urgency: "High" },
  { skill: "ML model for hackathon", by: "Team Buildathon", tokens: 100, urgency: "Low" },
];


function Landing({ setPage }) {
  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "sans-serif" }}>

      {/* Navbar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "18px 48px", borderBottom: `1px solid ${C.border}` }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: C.mid }}>
          Peer<span style={{ color: C.white }}>Forge</span>
        </h1>
        <div style={{ display: "flex", gap: 6 }}>
          {[["home","Home"],["marketplace","Marketplace"],["aimatch","AI Match"],["profile","Profile"],["dashboard","Dashboard"]].map(([id, label]) => (
            <button key={id} onClick={() => setPage(id)}
              style={{ padding: "8px 18px", borderRadius: 8, border: "none",
                background: id === "home" ? C.accent : "transparent",
                color: id === "home" ? C.white : C.muted,
                cursor: "pointer", fontSize: 14, fontWeight: id === "home" ? 600 : 400 }}>
              {label}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ background: C.accent, color: C.white, padding: "8px 16px",
            borderRadius: 99, fontSize: 13, border: `1px solid ${C.mid}` }}>
            340 tokens
          </span>
          <button onClick={() => setPage("marketplace")}
            style={{ background: C.mid, color: C.white, padding: "9px 20px",
              borderRadius: 8, border: "none", cursor: "pointer",
              fontWeight: 700, fontSize: 14 }}>
            + Offer Skill
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "100px 48px 60px" }}>
        <div style={{ display: "inline-block", background: C.accent, border: `1px solid ${C.mid}`,
          borderRadius: 99, padding: "6px 16px", marginBottom: 32 }}>
          <span style={{ color: C.pale, fontSize: 13 }}> AI-Powered Campus Network</span>
        </div>
        <h2 style={{ fontSize: 90, fontWeight: 900, lineHeight: 1.05,
          color: C.white, margin: 0, letterSpacing: -2 }}>
          Trade Skills,
        </h2>
        <h2 style={{ fontSize: 90, fontWeight: 900, lineHeight: 1.05,
          color: C.soft, margin: 0, letterSpacing: -2 }}>
          Build Reputation.
        </h2>

        <p style={{ color: C.muted, fontSize: 18, maxWidth: 500, lineHeight: 1.7, marginBottom: 40 }}>
          The campus exchange platform where your skills become currency.
          Learn, teach, collaborate — and earn tokens doing it.
        </p>
        <div style={{ display: "flex", gap: 16 }}>
          <button onClick={() => setPage("marketplace")}
            style={{ background: C.mid, color: C.white, padding: "16px 32px",
              borderRadius: 10, border: "none", cursor: "pointer",
              fontWeight: 700, fontSize: 16 }}>
            Explore Skills
          </button>
          <button onClick={() => setPage("discover")}
            style={{ background: "transparent", color: C.white, padding: "16px 32px",
              borderRadius: 10, border: `1.5px solid ${C.mid}`,
              cursor: "pointer", fontWeight: 600, fontSize: 16 }}>
            Find Teammates -
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 0, borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`, margin: "0 48px" }}>
        {[["248+","Students active"],["64","Skills listed"],["31","Open requests"],["12","Hackathon teams"]].map(([n,l],i) => (
          <div key={l} style={{ flex: 1, padding: "28px 24px",
            borderRight: i < 3 ? `1px solid ${C.border}` : "none" }}>
            <p style={{ fontSize: 32, fontWeight: 800, color: C.white, margin: 0 }}>{n}</p>
            <p style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


function Navbar({ page, setPage }) {
  const links = [["home","Home"],["marketplace","Marketplace"],["aimatch","AI Match"],["profile","Profile"],["dashboard","Dashboard"]];
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "14px 28px", background: C.bg, borderBottom: `1px solid ${C.border}` }}>
      <h1 style={{ fontSize: 20, fontWeight: 800, color: C.mid, cursor: "pointer" }}
        onClick={() => setPage("home")}>
        Peer<span style={{ color: C.white }}>Forge</span>
      </h1>
      <div style={{ display: "flex", gap: 6 }}>
        {links.map(([id, label]) => (
          <button key={id} onClick={() => setPage(id)}
            style={{ padding: "7px 16px", borderRadius: 8, border: "none",
              background: page === id ? C.accent : "transparent",
              color: page === id ? C.white : C.muted,
              cursor: "pointer", fontSize: 13, fontWeight: page === id ? 600 : 400 }}>
            {label}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span style={{ background: C.accent, color: C.white, padding: "5px 14px",
          borderRadius: 99, fontSize: 13, border: `1px solid ${C.mid}` }}>
           120 tokens
        </span>
        <button onClick={() => setPage("marketplace")}
          style={{ background: C.mid, color: C.white, padding: "7px 16px",
            borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
          + Offer Skill
        </button>
      </div>
    </div>
  );
}


function Dashboard({ setPage }) {
  return (
    <div style={{ padding: 28, background: C.lightBg, minHeight: "100vh" }}>
      <div style={{ background: C.bg, borderRadius: 14, padding: "22px 24px",
        marginBottom: 24, border: `1px solid ${C.border}` }}>
        <p style={{ color: C.white, fontSize: 18, fontWeight: 600 }}>Welcome back, Saanvi </p>
        <p style={{ color: C.muted, fontSize: 13, marginTop: 6 }}>
          3 new match suggestions and 2 pending requests today.
        </p>
      </div>
      <div style={{ display: "flex", gap: 14, marginBottom: 28 }}>
        {[["248","Students"],["64","Skills"],["31","Requests"],["12","Teams"]].map(([n,l]) => (
          <div key={l} style={{ flex: 1, background: C.accent, borderRadius: 12,
            padding: 18, border: `1px solid ${C.mid}` }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: C.white, marginTop: 6 }}>{n}</div>
            <div style={{ fontSize: 12, color: C.pale }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ background: C.cardBg, border: `1px solid ${C.lightBorder}`,
        borderRadius: 14, padding: 18, marginBottom: 24,
        borderLeft: `4px solid ${C.mid}` }}>
        <p style={{ color: C.textDark, fontWeight: 600, marginBottom: 8 }}> AI Match Recommendation</p>
        <p style={{ color: C.textMid, fontSize: 13, lineHeight: 1.7 }}>
          Based on your Python & React skills, <b>Reet Singh</b> is looking for exactly what you offer.
          You'd also make a strong team for Buildathon 2025 with Nirmesh Yadav.
        </p>
        <button onClick={() => setPage("aimatch")}
          style={{ marginTop: 12, padding: "7px 18px", borderRadius: 8,
            background: C.mid, color: C.white, border: "none", cursor: "pointer", fontWeight: 500 }}>
          View AI Matches →
        </button>
      </div>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: C.textDark, marginBottom: 12 }}>Recent requests</h3>
      {requests.slice(0, 3).map((r, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between",
          alignItems: "center", background: C.cardBg, border: `1px solid ${C.lightBorder}`,
          borderRadius: 10, padding: "12px 16px", marginBottom: 8 }}>
          <div>
            <p style={{ fontWeight: 500, color: C.textDark, fontSize: 14 }}>{r.skill}</p>
            <p style={{ fontSize: 12, color: C.textMid, marginTop: 2 }}>by {r.by}</p>
          </div>
          <span style={{ background: C.bg, color: C.white,
            padding: "4px 12px", borderRadius: 99, fontSize: 12, fontWeight: 600 }}>
            {r.tokens} tokens
          </span>
        </div>
      ))}
    </div>
  );
}


function Discover({ setPage }) {
  const [connected, setConnected] = useState([]);
  return (
    <div style={{ padding: 28, background: C.lightBg, minHeight: "100vh" }}>
      <div style={{ background: C.bg, borderRadius: 14, padding: 18,
        marginBottom: 24, border: `1px solid ${C.border}` }}>
        <p style={{ color: C.white, fontWeight: 600, fontSize: 15 }}> AI-Powered Matching</p>
        <p style={{ color: C.muted, fontSize: 13, marginTop: 6, lineHeight: 1.6 }}>
          These students are your best matches based on complementary skills and goals.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
        {students.map(s => (
          <div key={s.id} style={{ background: C.cardBg, border: `1px solid ${C.lightBorder}`,
            borderRadius: 14, padding: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%",
                background: C.accent, color: C.white, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 700, fontSize: 13 }}>{s.av}</div>
              <div>
                <p style={{ fontWeight: 600, color: C.textDark }}>{s.name}</p>
                <p style={{ fontSize: 12, color: C.textMid }}>{s.role}</p>
              </div>
              <span style={{ marginLeft: "auto", fontSize: 12, color: C.mid, fontWeight: 600 }}>
                 {s.rating}
              </span>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
              {s.skills.map(sk => (
                <span key={sk} style={{ background: C.soft, color: C.textDark,
                  fontSize: 11, padding: "3px 10px", borderRadius: 99, fontWeight: 500 }}>{sk}</span>
              ))}
            </div>
            <p style={{ fontSize: 12, color: C.textMid, marginBottom: 12 }}>{s.tokens} tokens earned</p>
            <button onClick={() => setConnected(p => [...p, s.name])}
              style={{ width: "100%", padding: 9, borderRadius: 8,
                border: `1.5px solid ${connected.includes(s.name) ? C.lightBorder : C.mid}`,
                background: connected.includes(s.name) ? C.pale : C.mid,
                color: connected.includes(s.name) ? C.textDark : C.white,
                cursor: "pointer", fontWeight: 500 }}>
              {connected.includes(s.name) ? "Requested" : "Connect:"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


function Marketplace() {
  const [offered, setOffered] = useState([]);
  return (
    <div style={{ padding: 28, background: C.lightBg, minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: 20 }}>
        <p style={{ color: C.textMid, fontSize: 14 }}>{requests.length} open requests</p>
        <button onClick={() => alert("Your skill has been posted!")}
          style={{ padding: "9px 20px", borderRadius: 8, background: C.mid,
            color: C.white, border: "none", cursor: "pointer", fontWeight: 600 }}>
          + Post a Request
        </button>
      </div>
      {requests.map((r, i) => (
        <div key={i} style={{ background: C.cardBg, border: `1px solid ${C.lightBorder}`,
          borderRadius: 12, padding: 18, marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <p style={{ fontWeight: 600, color: C.textDark, fontSize: 15 }}>{r.skill}</p>
            <span style={{ background: C.bg, color: C.white,
              padding: "5px 14px", borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
              {r.tokens} tokens
            </span>
          </div>
          <p style={{ fontSize: 13, color: C.textMid, marginBottom: 12 }}>Requested by {r.by}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 99, fontWeight: 500,
              background: r.urgency === "High" ? "#fde8e8" : r.urgency === "Medium" ? "#fef3cd" : "#e8f5ee",
              color: r.urgency === "High" ? "#a33" : r.urgency === "Medium" ? "#854" : "#085041" }}>
              {r.urgency} priority
            </span>
            <button onClick={() => setOffered(p => [...p, i])}
              style={{ padding: "7px 18px", borderRadius: 8,
                border: `1.5px solid ${offered.includes(i) ? C.lightBorder : C.accent}`,
                background: offered.includes(i) ? C.pale : C.accent,
                color: offered.includes(i) ? C.textDark : C.white,
                cursor: "pointer", fontWeight: 500, fontSize: 13 }}>
              {offered.includes(i) ? "✓ Offered" : "Offer Help"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


function Profile() {
  return (
    <div style={{ padding: 28, background: C.lightBg, minHeight: "100vh" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24,
        background: C.bg, padding: 24, borderRadius: 16, border: `1px solid ${C.border}` }}>
        <div style={{ width: 70, height: 70, borderRadius: "50%",
          background: C.mid, color: C.white, border: `3px solid ${C.soft}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, fontWeight: 700 }}>SM</div>
        <div>
          <p style={{ fontSize: 20, fontWeight: 700, color: C.white }}>Saanvi</p>
          <p style={{ fontSize: 13, color: C.muted }}>CSE, 1st year</p>
          <p style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>🪙 120 tokens earned</p>
        </div>
      </div>
      <div style={{ background: C.cardBg, borderRadius: 14, padding: 20,
        border: `1px solid ${C.lightBorder}`, marginBottom: 16 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: C.textDark, marginBottom: 12 }}>Your skills</h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Python", "React", "HTML", "CSS", "JavaScript"].map(sk => (
            <span key={sk} style={{ background: C.soft, color: C.textDark,
              padding: "6px 14px", borderRadius: 99, fontSize: 13, fontWeight: 500 }}>{sk}</span>
          ))}
        </div>
      </div>
      <div style={{ background: C.cardBg, borderRadius: 14, padding: 20,
        border: `1px solid ${C.lightBorder}` }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: C.textDark, marginBottom: 16 }}>Reputation score</h3>
        {[["Reliability", 88], ["Teaching quality", 74], ["Collaboration", 91]].map(([l, v]) => (
          <div key={l} style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between",
              fontSize: 13, color: C.textMid, marginBottom: 5 }}>
              <span>{l}</span>
              <span style={{ color: C.mid, fontWeight: 600 }}>{v}%</span>
            </div>
            <div style={{ background: C.soft, borderRadius: 99, height: 8 }}>
              <div style={{ width: `${v}%`, background: C.mid, height: 8, borderRadius: 99 }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" ? (
        <Landing setPage={setPage} />
      ) : (
        <div>
          <Navbar page={page} setPage={setPage} />
          {page === "dashboard"   && <Dashboard setPage={setPage} />}
          {page === "discover"    && <Discover setPage={setPage} />}
          {page === "marketplace" && <Marketplace />}
          {page === "aimatch"     && <Discover setPage={setPage} />}
          {page === "profile"     && <Profile />}
        </div>
      )}
    </div>
  );
}
