import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div>
            <h1 className="text-center">404 – Not found</h1>
            <Link to="/">
            <h4 className="text-center">На главную</h4>
            </Link>
        </div>

    )
}

export default Error;