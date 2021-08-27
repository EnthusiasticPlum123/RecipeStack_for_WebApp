// JAVASCRIPT CODE


// const form = document.querySelector('#searchForm');
// form.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const res = await axios.get('https://api.edamam.com/search?app_id=590ab81f&app_key=52e768cf3a25f76cd4cd63e24f852483&q=' + searchTerm);
//     form.elements.query.value = '';

// })

// const dispImages = (hits) => { // you expect an array of hits
//     for (let result of hits) {
//         console.log("inside loop");
//         //if (result.recipe.image) {
//         const img = document.createElement('IMG');
//         img.src = res.data.result.recipe.image;
//         document.body.append(img);
//         console.log("loop done");
//         //}

//     }
// }

// const img = document.createElement('IMG');
// img.src = res.data.hits[0].recipe.image;
// document.body.append(img);

//10.58  9.20

// const fetchQuery = async () => {
//     try {
//         const res = await fetch('https://api.edamam.com/search?app_id=fe3fdc46&app_key=1000e1ecdac75f004873cf6bfacb27e7&q=chicken');
//         const data = await res.json();
//         console.log(data.hits);
//     } catch (e) {
//         console.log("SOMETHING WENT WRONG", e);
//     }
// }

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.edamam.com/search?app_id=fe3fdc46&app_key=1000e1ecdac75f004873cf6bfacb27e7&q=${searchTerm}`);
    //console.log(res.data.hits[0].recipe.dishType);
    console.log(res.data.hits[0].recipe.image);
    const img = document.createElement('img');
    img.scr = res.data.hits[0].recipe.image;
    document.body.append(img);
    console.log("end");
})