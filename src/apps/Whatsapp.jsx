export default function WhatsApp({ goHome }) {
  return (
    <div className="app-screen">

      <div className="app-header">

        <button onClick={goHome}>
          ←
        </button>

        <span>WhatsApp</span>

      </div>

      <div className="app-content">

        <h2>Conversas</h2>

        <div className="chat-item">
          João
        </div>

        <div className="chat-item">
          Polícia
        </div>

        <div className="chat-item">
          Mecânico
        </div>

      </div>

    </div>
  );
}