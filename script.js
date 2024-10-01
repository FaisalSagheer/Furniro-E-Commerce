



const content = [
    {
        src: "images/image1.png",
        heading: "Syltherine",
        heading_shadow: "Stylish cafe chair",
        price: "Rp 2.500.000",
        price_cross: "Rp 3.500.000",
        alt:"Img"
    },
]

const content1 = document.querySelector('.content')


const cards = content.map(card => {
    return `
    
                 <div class="col">
                      <div class="card">
                        <img src=${card.src} class="card-img-top" alt=${card.alt}>
                        <div class="card-body bg-card-body">
                          <h5 class="card-title fw-semibold fs-4">${card.heading}</h5>
                        <div class="card-text mb">
                        <p class="text-body-tertiary fw-medium fs-6">${card.heading_shadow}</p>
                        </div>
                          <div class="d-flex justify-content-between align-items-baseline my">
                          <p class="card-text fw-semibold fs-5">${card.price}</p>
                          <p class="card-text text-body-tertiary text-decoration-line-through fs-6">${card.price_cross}</p>
                          </div>
                        </div>
                      </div>
                    </div>                        
                        `
}).join('')

content1.innerHTML = cards
