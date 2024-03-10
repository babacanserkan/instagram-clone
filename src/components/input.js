import { useEffect, useState } from "react";

export default function Input({ label, type = "text", ...props }) {
    const [show, setShow] = useState(false);
    const [inputType, setType] = useState(type);

    useEffect(() => {
        show ? setType("text") : setType("password");
    }, [show]);

    return (
        <label className="relative flex border bg-zinc-50 rounded-sm focus-within:border-gray-400">
            <input
                type={inputType}
                required={true}
                className="bg-zinc-50 w-full h-[38px] text-xs px-2 outline-none valid:pt-[10px]  peer"
                {...props}
            />
            <small className="absolute top-1/2 left-[9px] transition-all pointer-events-none cursor-text text-xs text-gray-500 -translate-y-1/2 peer-valid:text-[10px] peer-valid:top-2.5">
                {label}
            </small>
            {type === "password" && props?.value && (
                <button
                    type="button"
                    onClick={() => setShow((show) => !show)}
                    className="h-full items-center text-sm font-semibold pr-2">
                    {show ? "Hide" : "Show"}
                </button>
            )}
        </label>
    );
}
