const categoryList = document.getElementById("category-list")
const allCardContainer = document.getElementById("plant-card-container")
const modalContainer = document.getElementById("modal-container")
const plantDetailsModal = document.getElementById('plant-details-modal')


// show loading 
const showLoading = () => {
    allCardContainer.innerHTML = `
     <div class="flex justify-center ">
            <span class="loading loading-spinner loading-xs"></span>
            <span class="loading loading-spinner loading-sm"></span>
            <span class="loading loading-spinner loading-md"></span>
            <span class="loading loading-spinner loading-lg"></span>
            <span class="loading loading-spinner loading-xl"></span>
        </div>
    `
}

// loading all category list

fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => showCategories(data.categories))

const showCategories = (categories) => {
    // console.log(categories)
    categories.forEach((category) => {
        // console.log(category.category_name)
        categoryList.innerHTML += `
        <button id="${category.id}" class="btn lg:btn-wide  hover:bg-green-700 text-lg">${category.category_name}</button>
        `
    });
    categoryList.addEventListener('click', (e) => {
        const allBtn = document.querySelectorAll('button')
        // console.log(allBtn)
        allBtn.forEach((btn) => {
            btn.classList.remove("bg-green-700");
        });

        if (e.target.localName === "button") {
            showLoading();
            // console.log(e.target.id);
            e.target.classList.add('bg-green-700')
            const categoryId = e.target.id;
            loadNewsByCategory(categoryId)
        }
    })
}
// loading main news functionality
const loadNewsByCategory = (categoryId) => {
    // console.log(categoryId)
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
        .then((res) => res.json())
        .then((data) => showAllCard(data.plants)) // 
}

const showAllCard = (plants) => {

    allCardContainer.innerHTML = ""
    plants.forEach(plant => {
        // console.log(plant.id)
        allCardContainer.innerHTML += `
          <div class="border  border-gray-300 rounded-lg p-2 space-y-3">
                <img class="w-full h-[350px] lg:h-[250px] rounded-lg" src="${plant.image}"/>
                <h3 class="px-2 font-bold text-lg">${plant.name}</h3>
                <p class="px-2 text-gray-700 lg:h-[120px]">${plant.description}</p>
                <div class="flex justify-between p-3 items-center">
                    <button onclick="showModal('${plant.id}')"  id="plant-${plant.id}" class="btn p-4 text-green-700 bg-green-300 rounded-[999px]">${plant.category}</button>
                    <p><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${plant.price}</span></p>
                </div>
                <button class="btn text-white bg-green-700 rounded-[999px] btn-block">Add to Cart</button>
            
            </div>
        `;
        // const plantID = `${plant.id}`
        // // console.log(plantID)
        // showPlantDetails(plantID);


    })
 
}


const showModal = (plantId) => {
    // console.log(plantId)
    fetch(`https://openapi.programming-hero.com/api/plant/${plantId}`)
        .then(res => res.json())
        .then(data => {
            const info = data.plants;
            // console.log(info.name)
            document.getElementById("modal-title").innerText = info.name;
            document.getElementById("modal-image").src = info.image;
            document.getElementById("modal-category").innerText = info.category;
            document.getElementById("modal-description").innerText = info.description;
            document.getElementById("modal-price").innerText = info.price + " ৳";

            document.getElementById("modal-container").classList.remove("hidden");
        });
};

// close modal
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal-container").classList.add("hidden");
});



// load all plants by default
fetch("https://openapi.programming-hero.com/api/plants")
  .then(res => res.json())
  .then(data => showAllCard(data.plants));
