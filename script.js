



const content = [
  {
    src: "images/image1.png",
    heading: "Syltherine",
    text:"-30%",
    heading_shadow: "Stylish cafe chair",
    price: "Rp 2.500.000",
    price_cross: "Rp 3.500.000",
    alt: "Img",
    href:"singleproduct.html"
  },
  {
    src: "images/image2.png",
    heading: "Leviosa",
    text:"",
    heading_shadow: "Stylish cafe chair",
    price: "Rp 2.500.000",
    price_cross: "",
    alt: "Img",
    href:"singleproduct.html"
  },
  {
    src: "images/image3.png",
    heading: "Lolito",
    text:"-50%",
    heading_shadow: "Luxury big sofa",
    price: "Rp 7.000.000",
    price_cross: "Rp 14.000.000",
    alt: "Img",
    href:"singleproduct.html"
  },
  {
    src: "images/image4.png",
    heading: "Respira",
    text:"new",
    heading_shadow: "Outdoor bar table and stool",
    price: "Rp 500.000",
    price_cross: "",
    alt: "Img",
    href:"singleproduct.html"
  },
  {
    src: "images/image5.png",
    heading: "Grifo",
    heading_shadow: "Night lamp",
    text:'',
    price: "Rp 15.000.000",
    price_cross: "",
    alt: "Img",
    href:"singleproduct.html"
  },
  {
    src: "images/image6.png",
    heading: "Muggo",
    text:"new",
    heading_shadow: "Small mug",
    price: "Rp 150.000",
    price_cross: "",
    alt: "Img",
    href:"singleproduct.html"

  },
  {
    src: "images/image7.png",
    heading: "Pingky",
    text:"-50%",
    heading_shadow: "Cute bed set",
    price: "Rp 7.000.000",
    price_cross: "Rp 14.000.000",
    alt: "Img",
    href:"singleproduct.html"
  },
  {
    src: "images/image8.png",
    heading: "Potty",
    text:"new",
    heading_shadow: "Minimalist flower pot",
    price: "Rp 500.000",
    price_cross: "",
    alt: "Img",
    href:"singleproduct.html"

  },
]

const content1 = document.querySelector('.content')


const cards = content.map(card => {
  return `
    
                 <div class="col">
                      <div class="card">
                          <span class="position-absolute top-0 end-0 text-light py-3 px-2 mt-4 me-4 rounded-circle bg-green">
                            ${card.text}
                          </span>
                        <img src=${card.src} class="card-img-top" alt=${card.alt}>
                        <div class="overlay d-flex align-items-center">
                        <a href=${card.href} class="bgBtn">Add to cart</a>
                        </div>
                        <div class="card-body bg-card-body">
                          <h5 class="card-title fw-semibold fs-4">${card.heading}</h5>
                        <div class="card-text mb">
                        <p class="text-body-tertiary fw-medium fs-6">${card.heading_shadow}</p>
                        </div>
                          <div class="d-flex justify-content-between align-items-baseline my">
                          <p class="card-text fw-semibold fs-5 fs-6">${card.price}</p>
                          <p class="card-text text-body-tertiary text-decoration-line-through fs-6">${card.price_cross}</p>
                          </div>
                        </div>
                      </div>
                    </div>                        
                        `
}).join('')

content1.innerHTML = cards

