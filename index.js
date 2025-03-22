function submitData(name, email) {
  const data = {
    name: name,
    email: email,
  };

  const configOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch("http://localhost:3000/users", configOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed, try again.");
      }
      return response.json();
    })
    .then((data) => {
      const newUserId = data.id;
      const userIdElem = document.createElement("div");
      userIdElem.textContent = `New User Id: ${newUserId}`;
      document.body.appendChild(userIdElem);
      return data;
    })
    .catch((error) => {
      const errorElem = document.createElement("div");
      errorElem.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElem);
      return error;
    });
}

submitData();
