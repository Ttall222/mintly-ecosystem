
export default function Home() {
    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#0b0b0b" }}>

            {/* SIDEBAR */}
            <aside
                style={{
                    width: "220px",
                    background: "#111",
                    padding: "24px 16px",
                    borderRight: "1px solid #222",
                    color: "#fff"
                }}
            >
                <h2 style={{ marginBottom: "32px", fontSize: "20px" }}>
                    Mintly
                </h2>

                <nav style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <a href="/" style={navItem}>Home</a>
                    <a href="/portfolio" style={navItem}>Portfolio</a>
                    <a href="/create" style={navItem}>Create</a>
                    <a href="/coloring-book" style={navItem}>Coloring Book</a>
                </nav>

            </aside>

            {/* MAIN CONTENT */}
            <main style={{ padding: "40px", color: "#fff", flex: 1 }}>
                <h1 style={{ fontSize: "32px", fontWeight: 700 }}>
                    Mintly NFT Ecosystem
                </h1>

                <section style={{ marginTop: "40px" }}>
                    <h2 style={{ fontSize: "24px", marginBottom: "24px" }}>
                        Founders
                    </h2>

                    {/* STACKED CARDS */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                        {/* Mintly Studio */}
                        <div style={cardStyle}>
                            <div style={avatarStyle}>Mintly<br />Studio</div>
                            <div style={{ fontWeight: 700 }}>Mintly Studio</div>
                            <div style={{ opacity: 0.7 }}>Founder</div>
                        </div>

                        {/* Buddy */}
                        <div style={cardStyle}>
                            <div style={avatarStyle}>Buddy</div>
                            <div style={{ fontWeight: 700 }}>Buddy</div>
                            <div style={{ opacity: 0.7 }}>Co-Founder</div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}

/* ===== STYLES ===== */

const navItem = {
    cursor: "pointer",
    opacity: 0.8,
    transition: "0.2s",
} as const;

const cardStyle = {
    background: "#fff",
    color: "#000",
    padding: "20px",
    borderRadius: "16px",
    maxWidth: "320px",
    boxShadow: "0 0 24px rgba(0, 150, 255, 0.25)",
};

const avatarStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "2px solid #4da3ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "12px",
    fontSize: "12px",
    textAlign: "center",
};


