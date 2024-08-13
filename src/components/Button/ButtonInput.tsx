import React from "react";
import "./Button.scss";

interface ButtonProps {
  className?: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode; 
}

const ButtonInput: React.FC<ButtonProps> = ({
  className = '',
  title,
  onClick,
  type = 'button',
  isLoading = false,
  disabled = false,
  icon
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${className} ${disabled ? "button-disabled" : ""}`}
      onClick={onClick}
    >
      {!isLoading ? (
        <>
          {icon && <span className="icon">{icon}</span>}
          <span>{title}</span>
        </>
      ) : (
        <div className="spinner"></div>
      )}
    </button>
  );
};

export default ButtonInput;
