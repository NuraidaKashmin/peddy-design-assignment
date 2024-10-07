
const loadAllPets = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    const data = await response.json();
    displayAllPets(data.pets)
}

const displayAllPets = (allPet) => {
    const cardContainer = document.getElementById('cardContainer');

    allPet.forEach(pet => {
        const div = document.createElement('div');
        div.setAttribute("data-price", `${pet.price ? pet.price : 0}`);
        div.classList.add(`category-${pet.category}`);

        document.getElementById('cardContainer').classList.remove("hidden");

        document.getElementById('birdsContainer').classList.remove('hidden');
        document.getElementById('birdsContainer').classList.add('hidden');

        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl border">
                    <figure class="px-10 pt-10">
                        <img src=${pet.image}
                            alt="pet image" class="rounded-xl" />
                    </figure>
                    <div class="card-body text-primary">
                        <h2 class="card-title text-black font-bold">${pet.pet_name}</h2>
                        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
 Breed: ${pet.breed ? pet.breed : "N/A"}</p>
                        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>
 Birth: ${pet.date_of_birth ? pet.date_of_birth : "N/A"}</p>
                        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
</svg>
 Gender: ${pet.gender ? pet.gender : "N/A"}</p>
                        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 Price: ${pet.price ? pet.price : "N/A"}$</p>
                        <hr>
                        <div class="card-actions place-content-evenly">
                            <button onclick="addBeside('${pet.image}')" class="btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                </svg>
                            </button>
                            <button class="btn bg-white text-secondary  border border-secondary" onclick="displayAdopt(event)">Adopt</button>
                            <button class="btn bg-white text-secondary  border border-secondary" onclick= "petDetails('${pet.petId}')">Details</button>
                        </div>
                    </div>
                </div>
        `

        cardContainer.appendChild(div);

    });
}



document.getElementById('dogId').addEventListener('click', function () {
    document.getElementById('cardContainer').classList.add("hidden")
    document.getElementById('addBesideContainer').classList.add("hidden")

    document.getElementById('spinner').style.display = 'block';
    
    setTimeout(function () {
        loadPetsByCategory('Dog')
        document.getElementById("spinner").style.display = "none";
        document.getElementById('addBesideContainer').classList.remove("hidden")     
    },3000)


})
document.getElementById('catId').addEventListener('click', function () {
    document.getElementById('cardContainer').classList.add("hidden")
    document.getElementById('addBesideContainer').classList.add("hidden")

    document.getElementById('spinner').style.display = 'block';
    
    setTimeout(function () {
        loadPetsByCategory('Cat')
        document.getElementById("spinner").style.display = "none";
        document.getElementById('addBesideContainer').classList.remove("hidden")     
    },3000)

})
document.getElementById('rabbitId').addEventListener('click', function () {
    document.getElementById('cardContainer').classList.add("hidden")
    document.getElementById('addBesideContainer').classList.add("hidden")

    document.getElementById('spinner').style.display = 'block';
    
    setTimeout(function () {
        loadPetsByCategory('Rabbit')
        document.getElementById("spinner").style.display = "none";
        document.getElementById('addBesideContainer').classList.remove("hidden")     
    },3000)


})
document.getElementById('birdsId').addEventListener('click', function () {
    document.getElementById('cardContainer').classList.add("hidden")
    document.getElementById('addBesideContainer').classList.add("hidden")

    document.getElementById('spinner').style.display = 'block';
    
    setTimeout(function () {
        loadPetsByCategory('Birds')
        document.getElementById("spinner").style.display = "none";
        document.getElementById('addBesideContainer').classList.remove("hidden")
             
    },3000)
    

})

const loadPetsByCategory = async (categoryName) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    const data = await response.json();
    console.log(data);
    displayPetsByCategory(data.data)
}

const displayPetsByCategory = (allPet) => {
    console.log(allPet);

    if (allPet.length === 0) {
        document.getElementById('cardContainer').classList.remove("hidden");
        document.getElementById('cardContainer').classList.add("hidden");

        document.getElementById('birdsContainer').classList.remove('hidden');
    } else {
        document.getElementById('cardContainer').classList.remove("hidden");

        document.getElementById('birdsContainer').classList.remove('hidden');
        document.getElementById('birdsContainer').classList.add('hidden');
    }
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    
    allPet.forEach(pet => {
        const div = document.createElement('div');
        div.setAttribute("data-price", `${pet.price ? pet.price : 0}`);
        div.classList.add(`category-${pet.category}`)
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl border">
                    <figure class="px-10 pt-10">
                        <img src=${pet.image}
                            alt="pet image" class="rounded-xl" />
                    </figure>
                    <div class="card-body text-primary">
                        <h2 class="card-title text-black font-bold">${pet.pet_name}</h2>
                        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg> Breed: ${pet.breed ? pet.breed : "N/A"}</p>
                        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg> Birth: ${pet.date_of_birth ? pet.date_of_birth : "N/A"}</p>
                        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
</svg> Gender: ${pet.gender ? pet.gender : "N/A"}</p>
                        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> Price: ${pet.price ? pet.price : "N/A"}$</p>
                        <hr>
                        <div class="card-actions place-content-evenly">
                            <button onclick="addBeside('${pet.image}')" class="btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                </svg>
                            </button>
                            <button class="btn bg-white text-secondary  border border-secondary" onclick="displayAdopt(event)">Adopt</button>
                            <button class="btn bg-white text-secondary  border border-secondary" onclick= "petDetails('${pet.petId}')">Details</button>
                        </div>
                    </div>
                </div>
        `

        cardContainer.appendChild(div);

    });
}

const addBeside = (imagePet) => {
    const addBesideContainer = document.getElementById('addBesideContainer')
    const div = document.createElement('div')
    div.innerHTML = `
        <img src=${imagePet}
            alt="pet image" class="rounded-xl" />
    `
    addBesideContainer.appendChild(div);
}



const petDetails = async (petId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    const dataTwo = await response.json();
    displayPetDetails(dataTwo.petData)

}

const displayPetDetails = (petData) => {
    document.getElementById("modalContainer").innerHTML = "";
    const modalContainer = document.getElementById('modalContainer')

    const div = document.createElement('div')
    div.innerHTML = `
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box items-center">
    <img class="w-full rounded-xl mb-2" src=${petData.image}
        alt="pet image" class="rounded-xl" />
    <h3 class="text-lg font-bold mb-2">${petData.pet_name}</h3>
    <div class= "grid grid-cols-2 mb-2 gap-2 text-primary">
        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg> Breed: ${petData.breed ? petData.breed : "N/A"}</p>
        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg> Birth: ${petData.date_of_birth ? petData.date_of_birth : "N/A"}</p>
        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
</svg> Gender: ${petData.gender ? petData.gender : "N/A"}</p>
        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> Price: ${petData.price ? petData.price : "N/A"}$</p>
        <p class= "flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
 Vaccinated status: ${petData.vaccinated_status ? petData.vaccinated_status : "N/A"}</p>
    </div>
    <hr>
    <h3 class="text-lg font-bold mt-2 mb-1">Details Information</h3>
    <p class="py-4 text-primary">${petData.pet_details}</p>
    <div class="justify-center">
      <form method="dialog">
        <button class="btn w-full bg-teal-50 border-secondary text-secondary">Close</button>
      </form>
    </div>
  </div>
</dialog>
    `
    modalContainer.appendChild(div);
    my_modal_5.showModal()

}


const displayAdopt = (event) => {
    event.target.onclick = null;
    event.target.innerHTML = `Adopted`
    event.target.classList = "btn text-white bg-gray-300 rounded focus:outline-none disabled"

    document.getElementById("modalContainerTwo").innerHTML = "";
    const modalContainerTwo = document.getElementById('modalContainerTwo');

    let counter = 3;

    const div = document.createElement('div')
    div.innerHTML = `
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box text-center">
            <h3 class="text-3xl font-bold">Congratulation</h3>
            <p class="py-4">The Adoption Process Starts Here!</p>
            <span id="countdown" class="text-6xl font-bold">${counter}</span>
        </div>
    </dialog>
    
    `
    modalContainerTwo.appendChild(div);
    my_modal_1.showModal();

    window.setTimeout(function () {
        counter--;
        document.getElementById("countdown").innerText = counter;

        window.setTimeout(function () {
            counter--;
            document.getElementById("countdown").innerText = counter;

            window.setTimeout(function () {
                my_modal_1.close();
            }, 1000)

        }, 1000)

    }, 1000)


}

function removeCommonBtnHighlight() {
    document.querySelectorAll('.commonBtnHighlight').forEach(function (element) {
        element.classList.remove("btn", "bg-teal-50", "rounded-full", "border-secondary", "border-2", "h-20", "gap-6")
        element.classList.add("btn", "bg-white", "border-2", "h-20", "gap-6")

    })
}

document.querySelectorAll('.commonBtnHighlight').forEach(function (element) {
    element.addEventListener('click', function () {
        removeCommonBtnHighlight()

        element.classList.remove("btn", "bg-white", "border-2", "h-20", "gap-6")
        element.classList.add("btn", "bg-teal-50", "rounded-full", "border-secondary", "border-2", "h-20", "gap-6")
    })

})




loadAllPets()


// reference - https://stackoverflow.com/questions/282670/easiest-way-to-sort-dom-nodes
const list = document.querySelector('#cardContainer');

function sortCards() {
    [...list.children]
  .sort((a, b) => parseInt(a.getAttribute("data-price")) < parseInt(b.getAttribute("data-price")) ? 1 : -1)
  .forEach(node => list.appendChild(node));
}