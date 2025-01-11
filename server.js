const express = require('express');
const app = express();

// Mapping of status codes to their messages
const statusCodes = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: A resource has been successfully created.",
    204: "No Content: The request was successfully processed, but no content is returned.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: Authentication is required to access the resource.",
    403: "Forbidden: Server refuses to authorize the request.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The HTTP method is not supported for this resource.",
    429: "Too Many Requests: The user has exceeded the rate limit for the API.",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is temporarily overloaded or under maintenance.",
    504: "Gateway Timeout: The server did not receive a timely response from the upstream server."
};

// Route for handling status-info requests
app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code, 10); // Parse the code parameter as an integer
    
    if (!code || !statusCodes[code]) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request: The status code is invalid or missing."
        });
    }

    // Return the status code and its message
    res.json({
        status: code,
        message: statusCodes[code]
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
