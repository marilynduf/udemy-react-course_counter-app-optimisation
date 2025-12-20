import { log } from "../../log.js";
import { memo } from "react";

const IconButtonMemo = memo(function IconButton({ children, icon, ...props }) {
    log("<IconButtonMemo /> rendered", 2);

    const Icon = icon;
    return (
        <button {...props} className="button">
            <Icon className="button-icon" />
            <span className="button-text">{children}</span>
        </button>
    );
});

export default IconButtonMemo;
