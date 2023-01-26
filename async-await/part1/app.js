let favNum = 2;
let baseURL = "http://numbersapi.com";

// 1
async function onefact() {
  let data = await $.getJSON(`${baseURL}/${favNum}?json`);
  console.log(data);
}
onefact();


// 2
const favNums = [4, 16, 256];
async function manynums() {
  let data = await $.getJSON(`${baseURL}/${favNums}?json`);
  console.log(data);
}
manynums();


// 3
async function fourfacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNum}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
fourfacts();