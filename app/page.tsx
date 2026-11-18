
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#eaf2ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#2563eb", fontSize: "40px" }}>
        My First Next.js App
      </h1>

      <h2 style={{ color: "#7c3aed", fontSize: "28px" }}>
        My name is Jovan Pangan
      </h2>

      <p style={{ color: "#374151", fontSize: "18px" }}>
        Welcome to my first Next.js application!
      </p>
    </main>
  );
}
