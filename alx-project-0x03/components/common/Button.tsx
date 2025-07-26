interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
  action: () => void;
}

const Button = ({ buttonLabel, buttonBackgroundColor, action }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`px-6 py-2 rounded text-white bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 transition`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;