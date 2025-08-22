import { FC } from "react";
import { PropertyInputProps } from "@/types/editor";

const PropertyInput: FC<PropertyInputProps> = ({ label, name, value, onChange, type = 'text', onFocus, onKeyDown, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="block w-full border min-h-24 max-h-40 border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder={placeholder}
      ></textarea>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus as any} // Cast to any because onFocus expects React.FocusEvent<HTMLInputElement>
        onKeyDown={onKeyDown as any} // Cast to any because onKeyDown expects React.KeyboardEvent<HTMLInputElement>
        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder={placeholder}
      />
    )}
  </div>
);

export default PropertyInput