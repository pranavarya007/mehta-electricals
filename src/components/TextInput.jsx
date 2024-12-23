import React, { useId } from "react";

const TextInput = ({ label, error, ...props }) => {
  const id = useId();
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className={`peer block w-full border bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:outline-none group-first:rounded-t-2xl group-last:rounded-b-2xl ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/5"
            : "border-neutral-300 focus:border-neutral-950 focus:ring-neutral-950/5"
        }`}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold ${
          error
            ? "text-red-500 peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:text-red-500"
            : "text-neutral-500 peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:text-neutral-950"
        }`}
      >
        {label}
        {props.required && "*"}
      </label>
      {error && (
        <span className="absolute -bottom-6 left-0 text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextInput;
