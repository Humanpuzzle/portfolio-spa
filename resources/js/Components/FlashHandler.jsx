import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { notify } from "@/lib/notify";


export default function FlashHandler() {
    const { props } = usePage();

    useEffect(() => {
        if (props.flash?.success) {
            notify.success(props.flash.success);
        }

        if (props.flash?.error) {
            notify.error(props.flash.error);
        }
    }, [props.flash]);

    return null;
}
