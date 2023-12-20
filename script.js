const getDogImages = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

const addDogToDom = (srcUrl) => {
  const dogsDiv = document.querySelector(".dogs");
  const dogImg = document.createElement("img");
  dogImg.src = srcUrl;
  dogImg.alt = "dog";
  dogImg.style.width = "100px";
  dogsDiv.append(dogImg);
};

const getRandomDogImage = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    addDogToDom(data.message);
  } catch (err) {
    console.log("error Askar:", err);
  }
};

// getDogImages();
