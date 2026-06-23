import "../styles/Settings.css";

export default function Settings({
  goBack,
  phoneScale,
  setPhoneScale
}) {

  return (
    <div className="app-screen">

      <div className="app-navbar">

        <button
          className="back-btn"
          onClick={goBack}
        >
          ←
        </button>

        <h2>Ajustes</h2>

      </div>

      <h3>Tamanho do Celular</h3>

      <div className="scale-options">
        <label className="scale-option">
          <input
            type="radio"
            name="phoneScale"
            checked={phoneScale === 0.5}
            onChange={() => setPhoneScale(0.5)}
          />
          <span>50%</span>
        </label>

        <label className="scale-option">
          <input
            type="radio"
            name="phoneScale"
            checked={phoneScale === 0.6}
            onChange={() => setPhoneScale(0.6)}
          />
          <span>60%</span>
        </label>

        <label className="scale-option">
          <input
            type="radio"
            name="phoneScale"
            checked={phoneScale === 0.7}
            onChange={() => setPhoneScale(0.7)}
          />
          <span>70%</span>
        </label>

        <label className="scale-option">
          <input
            type="radio"
            name="phoneScale"
            checked={phoneScale === 0.8}
            onChange={() => setPhoneScale(0.8)}
          />
          <span>80%</span>
        </label>

        <label className="scale-option">
          <input
            type="radio"
            name="phoneScale"
            checked={phoneScale === 0.9}
            onChange={() => setPhoneScale(0.9)}
          />
          <span>90%</span>
        </label>

        <label className="scale-option">
          <input
            type="radio"
            name="phoneScale"
            checked={phoneScale === 1}
            onChange={() => setPhoneScale(1)}
          />
          <span>100%</span>
        </label>
      </div>

      <p>{Math.round(phoneScale * 100)}%</p>

    </div>

  );
}