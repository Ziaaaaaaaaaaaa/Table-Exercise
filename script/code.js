
    let products = [
        {
            name: "Marlboro",
            price: "R45",
            img: ""
        },
        {
            name: "Stuyvesant",
            price: "R50",
            img: ""
        },
        {
            name: "Rothmans",
            price: "R45",
            img: ""
        },
    ]

//     const displayElement = document.querySelector('#content');
// content.forEach(content => {
//    console.log(displayElement); displayElement.innerHTML+=`
// <tr>
// <td>${content.name}  </td>
// <td> ${content.price} </td>
// <td><img src="${content.img}">  </td>
// <td><button>add</button></td>
// <td><button>Delete</button></td>
// </tr> 
// `
// });


function createProductHTML(products) {
    return `
    <tr>
<td>${content.name}  </td>
<td> ${content.price} </td>
<td><img src="${content.img}">  </td>
<td><button>add</button></td>
<td><button>Delete</button></td>
</tr> 
      
    `;
  }
  // Function to render product list on the page
  function renderProductList() {
    const productContainer = document.getElementById("#output");
    let productHTML = "";
    products.forEach((products) => {
      productHTML += createProductHTML(products);
    });
    productContainer.innerHTML = productHTML;
  }
  // Call the function to render the product list
  renderProductList();