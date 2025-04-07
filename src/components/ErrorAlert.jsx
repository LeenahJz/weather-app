const ErrorAlert = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="pixel-error">
      {message}
      <button className="pixel-close-button" onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default ErrorAlert;