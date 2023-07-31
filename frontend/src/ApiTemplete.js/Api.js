export const PostApi  = (url, packet) => {
  console.log("reached", packet);
  fetch(url, {
    method: "POST",

    body: JSON.stringify(packet),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())

    .then((json) => console.log(json));
};
