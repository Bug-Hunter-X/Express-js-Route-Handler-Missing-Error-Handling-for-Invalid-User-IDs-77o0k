# Express.js Route Handler Missing Error Handling for Invalid User IDs

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling when dealing with user input.

The `bug.js` file contains the buggy code. It attempts to fetch a user from an array based on their ID, but it fails to handle cases where the ID is not a valid integer.

The `bugSolution.js` file provides a corrected version with robust error handling to prevent unexpected crashes or behavior.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Send a GET request to `/users/abc` (or any non-numeric ID).  The server will crash or return an unexpected result.

## How to use the solution

1. Replace `bug.js` with `bugSolution.js`.
2. Run `node bugSolution.js`.
3. Send a GET request to `/users/abc`. The server will now gracefully respond with a 404 error, indicating that the user was not found.  This is much more resilient than the original implementation.