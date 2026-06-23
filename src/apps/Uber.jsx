export default function Uber({ goHome }) {
  return (
    <div className="app-screen">

      <div className="app-header">

        <button onClick={goHome}>
          ←
        </button>

        <span>Uber</span>

      </div>

      <div className="app-content">

        <button>
          Solicitar Corrida
        </button>

        <button>
          Trabalhar como Motorista
        </button>

      </div>

    </div>
  );
}