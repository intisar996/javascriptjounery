const productCartWrap = document.querySelector('.product-card');
const products = [
  {
    id: 1,
    name: "Apple iPad (7th Generation)",
    price: 38.45,
    stock:20,
    image: "static/images/pro1-1.jpg",

  },
  {
    id: 2,
    name: "Apple Smart Keyboard Folio",
    price: 100,
    image: "static/images/lap.webp",
  },
  {
    id: 3,
    name: "Apple iPad (10th Generation)",
    price: 250,
    image: "static/images/prod-2.jpg",
  },
  {
    id: 4,
    name: "Apple iPhone 13 ",
    price: 350,
    image: "static/images/iphone.webp",
  },
  {
    id: 5,
    name: "Mac Book (10th Generation)",
    price: 500,
    image: "static/images/mac.jpg",
  },
  {
    id: 6,
    name: " MacBookProLaptop",
    price: 650,
    image: "static/images/lap2.webp",
  },
 


];

for (const product of products) {
  const productCard = productCartWrap.cloneNode(true);

  const defaultImg = productCard.querySelector('.default-img');
  const hoverImg = productCard.querySelector('.hover-img');
  const saleBadge = productCard.querySelector('.sale');
  const productCategory = productCard.querySelector('.product-category a');
  const productID = productCard.querySelector('h1');
  const productName = productCard.querySelector('h2');
  const productPrice = productCard.querySelector('.product-price span');

  defaultImg.src = product.image;
  hoverImg.src = product.image2;
  saleBadge.innerText = product.isSale ? 'Sale' : 'New';
  productCategory.innerText = product.category;
  productName.innerText = product.name;
  productID.innerText = product.id;
  productPrice.innerText = `${product.price.toFixed(2)}.OMR`;

  const cart = productCard.querySelector('.action-btn');
  cart.addEventListener('click', function(e) {
    e.preventDefault();

    const quantityInput = productCard.querySelector('.qtyi');
    const quantityValue = Number(quantityInput.value);

    console.log(quantityValue);

    if (quantityValue !== "") {
      const list = document.querySelector("ul");
      // create li
      const li = document.createElement("li");
      // copy id
      const copyID = productID.cloneNode(true);
      const spanID = document.createElement("span");
      spanID.className = "productID";
      li.appendChild(spanID);
      spanID.appendChild(copyID);
      // copy product name
      const copyName = productName.cloneNode(true);
      list.appendChild(li);
      // add product name
      const spanPname = document.createElement("span");
      spanPname.className = "productName";
      li.appendChild(spanPname);
      spanPname.appendChild(copyName);
     // save product name To local storage
     
    





     // add product image
      // 1-copy product image
      const CopyImage = defaultImg.cloneNode(true);
     // 2- create span for product image
     const SpanImage = document.createElement("span");
     // get class name for product image
     SpanImage.className = "productImage";
     li.appendChild(SpanImage);
     SpanImage.appendChild(CopyImage);
    
     // add Quantity
     const SpanQuantity = document.createElement("span");
     SpanQuantity.className = "Quantity";
     li.appendChild(SpanQuantity);
     SpanQuantity.appendChild(quantityInput);
     quantityInput.readOnly = true;



     // cal total price
     let BillTotalPrice = 0;
     let productPrices = Number(`${product.price.toFixed(2)}`);
     let TotalPrice = productPrices * quantityValue;
     BillTotalPrice +=productPrices;
     
    
     console.log("Total Price Product:" + (BillTotalPrice));


    //  console.log(typeof quantityValue)
     console.log("--------------------");
    


     const spanPrice = document.createElement("span");
     spanPrice.className = "productPrice";	
     li.appendChild(spanPrice);
     const totalPriceText = document.createTextNode(TotalPrice);
     spanPrice.appendChild(totalPriceText);




     let DeleteCart = document.createElement("input");
     DeleteCart.type = "submit";
     DeleteCart.value = "Delete";

     DeleteCart.className = "DeleteCart";
     li.appendChild(DeleteCart);

    }
     


    const lists = document.querySelector("ul");


    // delete product from cart
    lists.addEventListener("click",function(e) {

      if(e.target.className == "DeleteCart") {
       let listParent = e.target.parentElement;
       lists.removeChild(listParent);

      }
    


    });
    
      // add Place Order
      let PlaceOrder = document.querySelector(".PlaceOrder");
      let bill = document.querySelector(".bill");
      let ulList = document.querySelector("ul");
      let spanPnames = document.querySelector(".spanPname");
      
      PlaceOrder.addEventListener("click", function(e) {
      let linkExists = bill.querySelector(".BillLink");
      
        if (!linkExists) {
          let link = document.createElement("a");
          link.className = "BillLink";
          link.textContent = "Bill";
      
          let productIDs = "";
          let liList = ulList.querySelectorAll(".productID");
          let quantityInputs = ulList.querySelectorAll(".quantityInput");

          for (let i = 0; i < liList.length; i++) {
            productIDs += liList[i].textContent.trim() + ",";
            quantityInputs += liList[i].textContent.trim() + ",";
          }
    
      
          link.href = `Bill.html?ids=${productIDs}`;
      
          bill.appendChild(link);
        }

        ulList.remove();
      });




  });

  productCartWrap.parentNode.insertBefore(productCard, productCartWrap.nextSibling);
}















