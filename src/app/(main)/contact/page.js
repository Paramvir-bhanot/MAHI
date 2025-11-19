export const metadata = {
    title: "Contact",
};

export default function ContactPage() {
    return (
        <main style={{ maxWidth: 720, margin: "2rem auto", padding: "0 1rem" }}>
            <h1>Contact</h1>
            <p>If you'd like to get in touch, send a message below.</p>

            <form
                action="#"
                method="post"
                style={{
                    display: "grid",
                    gap: "0.75rem",
                    marginTop: "1rem",
                }}
            >
                <label style={{ display: "block" }}>
                    Name
                    <input
                        name="name"
                        type="text"
                        required
                        style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
                    />
                </label>

                <label style={{ display: "block" }}>
                    Email
                    <input
                        name="email"
                        type="email"
                        required
                        style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
                    />
                </label>

                <label style={{ display: "block" }}>
                    Message
                    <textarea
                        name="message"
                        rows="6"
                        required
                        style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
                    />
                </label>

                <button
                    type="submit"
                    style={{
                        padding: "0.6rem 1rem",
                        background: "#0366d6",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer",
                        width: 120,
                    }}
                >
                    Send
                </button>
            </form>
        </main>
    );
}