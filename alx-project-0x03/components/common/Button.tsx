type ButtonProps = {
  buttonLabel: string;
  buttonBackgroundColor: string;
  action: () => void;
};

const Button = ({ buttonLabel, buttonBackgroundColor, action }: ButtonProps) => {
  return (
    <button
      className={`px-6 py-3 text-white font-bold rounded-md bg-${buttonBackgroundColor}-600 hover:bg-${buttonBackgroundColor}-700 transition duration-300`}
      onClick={action}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;