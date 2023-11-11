import { products } from "../mobileproductsjsfile/mobileproducts.js";
console.log(products)
const cartproductdata = document.querySelector('.thecarttabledata');
let cartproductdatahtml=''

  cartproductdatahtml += `
    <tr>
      <td><a href="#"><i class="fa-regular fa-circle-xmark"></i></a></td>
      <td><img src="mobilepics/dcode signal 2 pro.jpg" width="70px"></td>
      <td>Techno Camon 20</td>
      <td>34,999</td>
      <td><input type="number" value="1"></td>
      <td>118.19$</td>
    </tr>
  `;


cartproductdata.innerHTML = cartproductdatahtml;
