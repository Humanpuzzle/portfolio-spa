import toast from "react-hot-toast";
import Toast from "@/Components/ui/Toast";

const runToast = (type, message) => {
    const duration = 4000;
    const step = 100;
    let progress = 100;

    const id = toast.custom((t) => (
        <Toast
            message={message}
            type={type}
            progress={progress}
            onClose={() => toast.dismiss(t.id)}
        />
    ), {
        duration,
    });

    const interval = setInterval(() => {
        progress -= step / (duration / 100);
        if (progress <= 0) {
            clearInterval(interval);
        }

        toast.custom((t) => (
            <Toast
                message={message}
                type={type}
                progress={progress}
                onClose={() => toast.dismiss(t.id)}
            />
        ), { id });
    }, step);
};

export const notify = {
    success: (msg) => runToast("success", msg),
    error: (msg) => runToast("error", msg),
};
