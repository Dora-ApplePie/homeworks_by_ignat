import React from 'react';
import s from "./Error404.module.css";

function Error404() {
    return (
            <div id="error-page">
                <div className={s.content}>
                    <h2 className={s.header} data-text="404">
                        404
                    </h2>
                    <h4 data-text="Opps! Page not found">
                        Opps! Page not found
                    </h4>
                </div>
            </div>
    )
}

export default Error404
