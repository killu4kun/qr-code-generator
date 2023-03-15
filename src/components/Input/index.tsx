import { InputProps } from "./interface";

export default function Input({
  label,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="w-full px-3 sm:w-1/2">
      <div className="mb-5">
        <label
          htmlFor="fName"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          {label}
        </label>
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder={placeholder}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:border-pink-500 invalid:text-pink-600"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
