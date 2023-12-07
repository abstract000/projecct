let cards = document.querySelector(".collections__row_mixs_contain");

let massiv = [
  {
    id: 0,
    rasm: "img/4.webp",
    price: "$67.24",
  },
  {
    id: 1,
    rasm: "img/5.webp",
    price: "$43.48",
  },
  {
    id: 2,
    rasm: "img/6.webp",
    price: "$60.9",
  },
  {
    id: 3,
    rasm: "img/7.webp",
    price: "$60.9",
  },
  {
    id: 4,
    rasm: "img/8.webp",
    price: "$31.37",
  },
  {
    id: 5,
    rasm: "img/9.webp",
    price: "$98.49",
  },
  {
    id: 6,
    rasm: "img/10.webp",
    price: "$49.66",
  },
  {
    id: 7,
    rasm: "img/11.webp",
    price: "$26.28",
  },
];
let modal = document.querySelector(".modal");
massiv.map((val) => {
  cards.innerHTML += `
	<div onclick=activeFunc(${val.id}) class="collections__row_mixs_item">
								<div class="collections__row_mixs_item_images">
									<img src=${val.rasm} alt="img">
									<ul class="product_hover">
										<li><a href="#"><i class="far fa-heart"></i></a></li>
										<li><a href="#"><i class="far fa-exchange-alt"></i></a></li>
										<li><a href="#"><i class="far fa-search"></i></a></li>
									</ul>
								</div>
								<div class="collections__row_mixs_item_text">
									<p>Piqué Biker Jacket</p>
									<a href="#" class="cart">+ Add To Cart</a>
									<div class="mixs_icons">
										<i class="far fa-star"></i>
										<i class="far fa-star"></i>
										<i class="far fa-star"></i>
										<i class="far fa-star"></i>
										<i class="far fa-star"></i>
									</div>
									<h5>${val.price}</h5>
									<div class="product_color">
										<label for="pc-1">
											<input type="radio" id="pc-1">
										</label>
										<label class="black" for="pc-1">
											<input type="radio" id="pc-1">
										</label>
										<label class="grey" for="pc-1">
											<input type="radio" id="pc-1">
										</label>
									</div>
								</div>
							</div>
	`;
});

function activeFunc(id) {
  modal.classList.add("active");
  modal.innerHTML = `		
  					
	<div class="item_cont">
	<button onclick=closeModal() class="close_brn">Close</button>
  <div class="container">
  <div class="item_row">
    <div class="item_left">
      <img src=${massiv[id].rasm} alt="">
    </div>
    <div class="item_right">
      <h3>AMIRI CRACKED DYE HOODIE "BLACK"</h3>
      
      <div class="size_con">
        <span>Size</span>
        <select name="size" id="size">
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="2XL">2XL</option>
        </select>
      </div>
      <div class="colors">
        <button>Black</button>
        <button>White</button>
        <button>Grey</button>
      </div>
      <div class="item_money">
        <div class="miqdor">
          <span>Miqdor</span>
          <div class="plus_minus">
            <button class="minus">-</button>
            <h1 class="count">1</h1>
            <button class="plus">+</button>
          </div>
        </div>
        <h4>${massiv[id].price}</h4>
      </div>
      <button class="add_button">Savatga qo'shish</button>
    </div>
  </div>
</div>
    </div>
	`;
}
function closeModal() {
  modal.classList.remove("active");
}
