 export const products = [
    {
      id: 'TC20-01',
      name: 'Techno Camon 20',
      price: '46,499',
      image: 'mobilepics/tecno-camon-20-pakistan-priceoye-w3bfd-270x270.jpg',
    },
    {
      id: 'DS2P-02',
      name: 'Dcode Sygnal 2 pro',
      price: '18,999',
      image: 'mobilepics/dcode signal 2 pro.jpg',
    },
    {
      id: 'IN30-03',
      name: 'Infinix Note 30',
      price: '45,199',
      image: 'mobilepics/infinix note 30.jpg',
    },
    {
      id: 'SGA04-04',
      name: 'Samsung Galaxy A04',
      price: '27,199',
      image: 'mobilepics/samsung a04.jpg',
    },
    {
      id: 'SGZF5-05',
      name: 'Samsung Galaxy Z Flip 5',
      price: '349,999',
      image: 'mobilepics/samsung z flip 5.jpg',
    },
    {
      id: 'TS10P-06',
      name: 'Techno Spark 10 pro',
      price: '36,499',
      image: 'mobilepics/techno spart 10 pro.jpg',
    },
    {
      id: 'TS10-07',
      name: 'Techno Spark 10',
      price: '30,999',
      image: 'mobilepics/techno spark 10.jpg',
    },
    {
      id: 'XR10c-08',
      name: 'Xiaomi Redmi 10c',
      price: '726.99',
      image: 'mobilepics/xiaomi red mi 10c.jpg',
    },
  ];
  





const mobileproductsection=document.getElementById("latest-mobiles")

let producthtml;
products.forEach((product)=>{
producthtml+=
`
<div class="Single-mobile-container">
<img src="${product.image}" width="100px" height= "100px">
<p>${product.name}</p>
<h>Price: <span>${product.price}</span></h>
<div class="addtocartbutton">
<button class="addtocartbtn">Add To Cart</button>
</div>
</div>
`
})


mobileproductsection.innerHTML=producthtml

const addtocartEl=document.querySelectorAll('.addtocartbtn');
addtocartEl.forEach((addtocartsingleproduct)=>{
addtocartsingleproduct.addEventListener('click',()=>{
    console.log('hi')
})

})