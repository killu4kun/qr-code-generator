import { ButtonProps } from "./interface";

export default function Button({ label, disabled }: ButtonProps) {
  return (
    <div className="flex items-center justify-center">
      <button
        type="submit"
        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
}
