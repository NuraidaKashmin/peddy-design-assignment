
const loadAllPets = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    const data = await response.json();
    displayAllPets(data.pets)
}

const displayAllPets = (allPet) => {
    const cardContainer = document.getElementById('cardContainer');

    allPet.forEach(pet => {
        const div = document.createElement('div');
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
                        <p>Breed: ${pet.breed ? pet.breed : "N/A"}</p>
                        <p>Birth: ${pet.date_of_birth ? pet.date_of_birth : "N/A"}</p>
                        <p>Gender: ${pet.gender ? pet.gender : "N/A"}</p>
                        <p>Price: ${pet.price ? pet.price : "N/A"}$</p>
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

    // loadPetsByCategory('Cat')
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


    // loadPetsByCategory('Rabbit')
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

    // loadPetsByCategory('Birds')
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
        div.classList.add(`category-${pet.category}`)
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl border">
                    <figure class="px-10 pt-10">
                        <img src=${pet.image}
                            alt="pet image" class="rounded-xl" />
                    </figure>
                    <div class="card-body text-primary">
                        <h2 class="card-title text-black font-bold">${pet.pet_name}</h2>
                        <p>Breed: ${pet.breed ? pet.breed : "N/A"}</p>
                        <p>Birth: ${pet.date_of_birth ? pet.date_of_birth : "N/A"}</p>
                        <p>Gender: ${pet.gender ? pet.gender : "N/A"}</p>
                        <p>Price: ${pet.price ? pet.price : "N/A"}$</p>
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
    <div class= "grid grid-cols-2 mb-2 gap-2 ">
        <p>Breed: ${petData.breed ? petData.breed : "N/A"}</p>
        <p>Birth: ${petData.date_of_birth ? petData.date_of_birth : "N/A"}</p>
        <p>Gender: ${petData.gender ? petData.gender : "N/A"}</p>
        <p>Price: ${petData.price ? petData.price : "N/A"}$</p>
        <p>Vaccinated status: ${petData.vaccinated_status ? petData.vaccinated_status : "N/A"}</p>
    </div>
    <hr>
    <h3 class="text-lg font-bold mt-2 mb-1">Details Information</h3>
    <p class="py-4">${petData.pet_details}</p>
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



// const spinnerShow = () => {
//     document.getElementById('spinner').style.display = 'block';
//     setTimeout(function(){
//         loadPetsByCategory('Dog')

//     }, 3000)
// }




loadAllPets()

