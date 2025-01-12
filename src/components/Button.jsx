import "./Button.css";
function ContinueButton({ text, handleClick, type }) {
  return (
    <button onClick={handleClick} type={type} className="CustomButtonContinue">
      {text}
    </button>
  );
}

function BackButton({ text, handleClick, type }) {
  return (
    <button onClick={handleClick} type={type} className="CustomButtonBack">
      {text}
    </button>
  );
}

export const Buttons = {
  ContinueButton,
  BackButton,
};
