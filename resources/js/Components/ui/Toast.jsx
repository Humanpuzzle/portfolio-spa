import { CheckCircle2, XCircle } from "lucide-react";

export default function Toast({ message, type = "success", onClose, progress = 100 }) {
    const isSuccess = type === "success";

    return (
        <div className="relative flex items-center w-full max-w-sm p-4 bg-secondary border border-default rounded-base shadow-lg overflow-hidden">

            {/* ICON */}
            <div
                className={`flex items-center justify-center w-8 h-8 rounded ${
                    isSuccess ? "text-green-600" : "text-red-600"
                }`}
            >
                {isSuccess ? (
                    <CheckCircle2 className="w-5 h-5" />
                ) : (
                    <XCircle className="w-5 h-5" />
                )}
            </div>

            {/* TEXT */}
            <div className="ml-3 text-sm text-body flex-1">
                {message}
            </div>

            {/* CLOSE */}
            <button
                onClick={onClose}
                className="ml-2 text-xs opacity-60 hover:opacity-100"
            >
                ✕
            </button>

            {/* PROGRESS BAR */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
