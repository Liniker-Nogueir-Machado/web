export default function StatusBar() {
  return (
    <div className="status-bar">
      <span>
        {new Date().toLocaleTimeString(
          "pt-BR",
          {
            hour: "2-digit",
            minute: "2-digit"
          }
        )}
      </span>

      <span>
        📩📶📡🔋100%
      </span>
    </div>
  );
}