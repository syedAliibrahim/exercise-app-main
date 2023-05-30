import React from 'react';
import Alert from 'react-bootstrap/Alert';

function ErrorFlag({ error, setError }) {

    const errorMsg = error.msg;
    const flagColor = error.color;

    if (errorMsg) {
        setTimeout(
            () => {
                setError(false)
            }, 10000
        );
        return (
            <Alert className='' variant={flagColor} onClose={() => { setError(false) }} dismissible>
                <p>{errorMsg}</p>
            </Alert>
        );
    }
    return "";
}

export default ErrorFlag;