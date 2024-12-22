// async function getRandomDogImage() {
//   const url = "https://random.dog/woof.json";
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   document.querySelector("#dog-img").src = data.url;
// }
function getRandomDogImage() {
  console.log(
    "This function should fetch a random dog image from the Dog CEO API"
  );

  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#dog-img").src = data.url;
    });
}