// Forms:
// We can create forms in React using built in HTML form properties.

// JSON Web Tokens(JWT's) are a compact means to securely transmit information between a client and server.
// Sending tokens with fetch()
const response = await fetch (`$BASE_URL}/users/me`,{
    headers:{
        "Content-type":"application/json",
        Authorization:`Bearer ${token}`,
    },
});