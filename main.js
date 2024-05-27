  function fetchDataAndStore() {
  fetch("https://fakestoreapi.com/products").then(
    response => response.json()
  ).then(
    data => {console.log(data);
      localStorage.setItem("dta", JSON.stringify(data));
    
      data.forEach((data) => {
        createCard(data);
      });
  });
};
 
 function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");

  // Image of the card 
  const img = document.createElement("img");
  img.src = data.image;
  img.alt = data.category;
  img.classList.add("image_style");

  // description
  const desc = document.createElement("p");
  desc.textContent = data.description;
 
  const price = document.createElement("p");
  price.textContent = data.price;

  const rating = document.createElement("p");
  rating.textContent = data.rating.rate;

  const title = document.createElement("p");
  title.textContent = data.title;

  const userId = document.createElement("p");
  userId.textContent = data.userId;

 card.appendChild(img); 
 card.appendChild(desc);
 card.appendChild(price);
 card.appendChild(rating);
 card.appendChild(title);
 card.appendChild(userId);

 document.body.appendChild(card);
 }

 fetchDataAndStore();
