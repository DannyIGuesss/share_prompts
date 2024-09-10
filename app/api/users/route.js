// Next.js supports the following HTTP methods:

//1. **GET**: Retrieves data or resources from the server.
//2. **POST**: Submits data to the server to create a new resource
//3. **PUT**: Updates or replaces an existing resource on the server.
//4. **PATCH**: Partially updates an existing resource on ther server.
//5. **DELETE**: Removes a specific resource from the server.
//6. **HEAD**: Retrieves the headers of a resource without fetching its body.
//7. **OPTIONS**: Retrieves the supported HTTP methods and other communication options for a resource

// this would be the express way of doing it. you would do this with all CRUD operations
export async function GET(request) {
  return new Response("Hello, Next.js!");
}

// for next you would do something like this
// endpoint would look like http://localhost:3000/api/users
export async function GET(request) {
  // Handle GET request for /api/users
  // Retrieve users from the database or any data source
  const users = [
    { id: 1, name: "Nancy" },
    { id: 2, name: "Emily" },
    { id: 2, name: "Danny" },
  ];

  // Send the users as a response
  return new Response(JSON.stringify(users));
}
