import { Toaster } from "react-hot-toast";

export default function AppToaster() {
    return (
        <Toaster
            position="bottom-right"
            containerStyle={{
                bottom: 90,
                right: 20,
            }}
            toastOptions={{
                style: {
                    boxShadow: "none",
                    padding: 0,
                },
            }}
        />
    );
}
