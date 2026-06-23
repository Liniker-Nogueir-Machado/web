import "../styles/Nubank.css";

import { useState } from "react";
import { SiNubank } from "react-icons/si";
import {
  FaArrowLeft,
  FaBell,
  FaEye,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaGavel
} from "react-icons/fa";

export default function Nubank({ goBack }) {
  const [screen, setScreen] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const [playerId, setPlayerId] = useState("");
  const [amount, setAmount] = useState("");

  const onlyNumbers = (value) => {
    return value.replace(/\D/g, "");
  };

  const formatMoney = (value) => {
    const digits = value.replace(/\D/g, "");

    if (!digits) return "";

    const number = Number(digits) / 100;

    return number.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  if (screen === "transfer") {
    return (
      <div className={`nubank-page ${darkMode ? "dark" : ""}`}>
        <div className="nubank-page-header">
          <button
            className="nubank-back"
            onClick={() => setScreen("home")}
          >
            <FaArrowLeft />
          </button>

          <h2>Transferir</h2>

          <div
            className={`toggle-switch ${darkMode ? "active" : ""
              }`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="toggle-ball" />
          </div>
        </div>

        <div className="nubank-content">
          <input
            placeholder="ID do jogador"
            value={playerId}
            inputMode="numeric"
            onChange={(e) =>
              setPlayerId(
                onlyNumbers(e.target.value)
              )
            }
          />

          <input
            placeholder="Valor"
            value={amount}
            inputMode="numeric"
            onChange={(e) =>
              setAmount(
                formatMoney(e.target.value)
              )
            }
          />

          <button>Transferir</button>
        </div>
      </div>
    );
  }

  if (screen === "charge") {
    return (
      <div className={`nubank-page ${darkMode ? "dark" : ""}`}>
        <div className="nubank-page-header">
          <button
            className="nubank-back"
            onClick={() => setScreen("home")}
          >
            <FaArrowLeft />
          </button>

          <h2>Cobrar</h2>

          <div
            className={`toggle-switch ${darkMode ? "active" : ""
              }`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="toggle-ball" />
          </div>
        </div>

        <div className="nubank-content">
          <input
            placeholder="ID do jogador"
            value={playerId}
            inputMode="numeric"
            onChange={(e) =>
              setPlayerId(
                onlyNumbers(e.target.value)
              )
            }
          />

          <input
            placeholder="Valor"
            value={amount}
            inputMode="numeric"
            onChange={(e) =>
              setAmount(
                formatMoney(e.target.value)
              )
            }
          />

          <button>Gerar Cobrança</button>
        </div>
      </div>
    );
  }

  if (screen === "statement") {
    return (
      <div className={`nubank-page ${darkMode ? "dark" : ""}`}>
        <div className="nubank-page-header">
          <button
            className="nubank-back"
            onClick={() => setScreen("home")}
          >
            <FaArrowLeft />
          </button>

          <h2>Extrato</h2>

          <div
            className={`toggle-switch ${darkMode ? "active" : ""
              }`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="toggle-ball" />
          </div>
        </div>

        <div className="nubank-content">
          <div className="history-item">
            PIX recebido +R$ 50.000
          </div>

          <div className="history-item">
            Salário +R$ 2.000
          </div>

          <div className="history-item">
            Compra -R$ 500
          </div>
        </div>
      </div>
    );
  }

  if (screen === "invoices") {
    return (
      <div className={`nubank-page ${darkMode ? "dark" : ""}`}>
        <div className="nubank-page-header">
          <button
            className="nubank-back"
            onClick={() => setScreen("home")}
          >
            <FaArrowLeft />
          </button>

          <h2>Faturas</h2>

          <div
            className={`toggle-switch ${darkMode ? "active" : ""
              }`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="toggle-ball" />
          </div>
        </div>

        <div className="nubank-content">
          <div className="history-item">
            Nenhuma fatura pendente
          </div>
        </div>
      </div>
    );
  }

  if (screen === "fines") {
    return (
      <div className={`nubank-page ${darkMode ? "dark" : ""}`}>
        <div className="nubank-page-header">
          <button
            className="nubank-back"
            onClick={() => setScreen("home")}
          >
            <FaArrowLeft />
          </button>

          <h2>Multas</h2>

          <div
            className={`toggle-switch ${darkMode ? "active" : ""
              }`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="toggle-ball" />
          </div>
        </div>

        <div className="nubank-content">
          <div className="history-item">
            Nenhuma multa pendente
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`nubank-screen ${darkMode ? "dark" : ""}`}>
      <div className="nubank-top">

        <div className="nubank-header">

          <button
            className="nubank-back"
            onClick={goBack}
          >
            <FaArrowLeft />
          </button>

          <div className="nubank-logo">
            <SiNubank size={90} />
          </div>

          <div className="nubank-actions">

            <FaBell />
            <FaEye />

            <div
              className={`toggle-switch ${darkMode ? "active" : ""
                }`}
              onClick={() =>
                setDarkMode(!darkMode)
              }
            >
              <div className="toggle-ball" />
            </div>

          </div>

        </div>

        <div className="nubank-user">
          Olá, CEO
        </div>

      </div>

      <div className="nubank-card">
        <div className="nubank-card-title">
          <FaMoneyBillWave />
          <span>Conta</span>
        </div>

        <p>Saldo disponível</p>

        <h1>R$ 1.000.866.874</h1>
      </div>

      <div className="nubank-card">
        <div className="nubank-card-title">
          <FaFileInvoiceDollar />
          <span>Faturas</span>
        </div>

        <p>Fatura atual</p>

        <h2 className="danger">R$ 0</h2>
      </div>

      <div className="nubank-card">
        <div className="nubank-card-title">
          <FaGavel />
          <span>Multas</span>
        </div>

        <p>Multa atual</p>

        <h2 className="danger">R$ 0</h2>
      </div>

      <div className="nubank-tabs">

        <button
          onClick={() =>
            setScreen("transfer")
          }
        >
          Transferir
        </button>

        <button
          onClick={() =>
            setScreen("statement")
          }
        >
          Extrato
        </button>

        <button
          onClick={() =>
            setScreen("charge")
          }
        >
          Cobrar
        </button>

        <button
          onClick={() =>
            setScreen("invoices")
          }
        >
          Faturas
        </button>

        <button
          onClick={() =>
            setScreen("fines")
          }
        >
          Multas
        </button>

      </div>

    </div>
  );
}