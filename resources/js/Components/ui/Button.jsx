export default function Button({
    children,
    onClick,
    className = "",
    variant = "default",
    size = "default",
    ...props
}) {
    const base =
        "inline-flex items-center justify-center rounded-md font-medium transition";

    const variants = {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        outline: "border border-gray-300 hover:bg-gray-100",
        ghost: "hover:bg-gray-100",
    };

    const sizes = {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-lg",
    };

    return (
        <button
            onClick={onClick}
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
