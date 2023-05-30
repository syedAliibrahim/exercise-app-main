import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Error({errorMsg, setErrorMsg}) {

    if (errorMsg) {
        return (
            <Alert className='' variant="danger" onClose={() => setErrorMsg(null)} dismissible>
                <p>{errorMsg}</p>
            </Alert>
        );
    }
    return "";
}

export default Error;