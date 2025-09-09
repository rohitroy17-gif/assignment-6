
const categoryContainer=document.getElementById('categoryContainer')
const plantsContainer=document.getElementById('plantsContainer')
// All category 
const laodCategory=()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res)=>res.json())
    .then((data)=>{
        const categories=data.categories
        //console.log(data.categories)
        showCategory(categories)
    })
    .catch((err)=>{
        console.log(err);
    })
};   
const showCategory=(categories)=>{
        categories.forEach(cat=>{
            categoryContainer.innerHTML+=`
            <li id="${cat.id}" class="w-[250px]  text-lg font-[inter] ml-2 hover:border-[#15803D] cursor-pointer">${cat.category_name}</li>
            `
        });
        categoryContainer.addEventListener('click',(e)=>{
            const allLi=document.querySelectorAll('li')
            allLi.forEach(li=>{
                li.classList.remove('border-[#15803D]')
            })
            if(e.target.localName==='li'){
                console.log(e.target.id)
                e.target.classList.add('border-[#15803D]')
                laodPlantsByCategory(e.target.id)
            }
        });
};

const laodPlantsByCategory=(categoryId)=>{
    console.log(categoryId)
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then((res)=>res.json())
    .then((data)=>{
        showPlantsByCategory(data.plants)
    })
    .catch((err)=>{
        console.log(err);
    })
}
const showPlantsByCategory=(plants)=>{
    console.log(plants)
    plants.forEach(plant =>{
        plantsContainer.innerHTML +=`
        <div>
               
           <h1>${plant.name}</h1>
           <p>${plant.description}</p>
        </div>
        `
    })
}
laodCategory();

