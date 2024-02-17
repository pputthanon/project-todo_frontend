export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`block w-full border rounded-md outline-none px-2 py-2 text-sm 
          focus:ring
          ${
            hasError
              ? "border-red-500 focus:ring-red-300"
              : "border-t-amber-200 focus:ring-offset-amber-400"
          }
          `}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}
