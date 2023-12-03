import { ChangeEvent } from 'react';
interface InputProps {
  type:
    | 'email'
    | 'text'
    | 'password'
    | 'tel'
    | 'date'
    | 'search'
    | 'datetime-local'
    | 'number'
    | 'time';
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  value?: string;
  onChangeHandler?: (value: string) => void;
}
const Input = ({
  type,
  label,
  name,
  placeholder,
  required = false,
  disabled = false,
  className = '',
  value,
  onChangeHandler,
}: InputProps) => {
  const handleOnChange = (value: string) => {
    if (onChangeHandler) {
      onChangeHandler(value);
    }
  };

  return (
    <label className={`font-openSans text-body text-gray-900`} htmlFor={name}>
      <div className="flex items-center ">
        {required && (
          <span className="mr-2 font-openSans font-bold mt-1">*</span>
        )}
        {label}{' '}
      </div>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleOnChange(e.target.value)
        }
        className={`bg-gray-50 border-gray-900 text-gray-900 outline-blue-400 outline-1 h-[56px] min-w-full px-4 py-3 text-body font-openSans leading-150 rounded-lg border mt-2 ${className}`}
      />
    </label>
  );
};
export default Input;
