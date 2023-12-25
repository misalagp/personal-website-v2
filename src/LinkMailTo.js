import React from "react";

const LinkMailTo = ({ mailto, label }) => {
    return (
        <a
            href={mailto}
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </a>
    );
};

export default LinkMailTo;
