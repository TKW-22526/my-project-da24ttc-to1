//Khai báo mảng đối tượng để lưu dữ liệu sản phẩm
const productList = [
    {id: "01", name: "Cua biển Trà Vinh", price: 250000, image: "../assets/images/cua-bien.jpg", productLink: "product-detail.html"},
    {id: "02", name: "Tôm hùm xanh", price: 850000, image: "../assets/images/tom-hum.webp", productLink: "product-detail.html"},
    {id: "03", name: "Mực lá đại dương", price: 320000, image: "../assets/images/muc-la.jpg", productLink: "product-detail.html"},
    {id: "04", name: "Bào ngư Hàn Quốc", price: 950000, image: "../assets/images/bao-ngu.webp", productLink: "product-detail.html"},
    {id: "05", name: "Cá hồi Sapa", price: 400000, image: "../assets/images/ca-sapa.jpg", productLink: "product-detail.html"},
    {id: "06", name: "Sò dương tươi", price: 150000, image: "../assets/images/so-duong.webp", productLink: "product-detail.html"},
    {id: "07", name: "Ghẹ xanh Phan Thiết", price: 450000, image: "../assets/images/ghe-xanh.jpg", productLink: "product-detail.html"},
    {id: "08", name: "Ốc hương loại 1", price: 380000, image: "../assets/images/oc-huong.jpg", productLink: "product-detail.html"},
    {id: "09", name: "Tôm sú tự nhiên", price: 550000, image: "../assets/images/tom-su.jpg", productLink: "product-detail.html"},
    {id: "10", name: "Cua hoàng đế (King Crab)", price: 1500000, image: "../assets/images/cua-hoang-de.png", productLink: "product-detail.html"}
];

function addProduct(id, name, price, image, hyperLink)
{
    //Tạo một product item
    //1. Tao khung chua 1 item
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col-md-3 col-sm-6");

    //2. Tạo khung chứa hình
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image ratio ratio-1x1 overflow-hidden");

    //3. Tạo đối tượng hình ảnh
    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    Image.setAttribute("class", "img-fluid object-fit-cover h-100");
    //4. Gán hình vào khung
    productImage.appendChild(Image);

    //5. Tạo khung chứa thông tin
     const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info text-center text-truncate");
    //Tạo paragraph 1
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);
  
    //Tạo paragraph 2
    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price);
    productPrice.appendChild(productPriceText);

    
    //Tạo hyperLink
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", hyperLink);
    productLink.setAttribute("class", "btn btn-outline-info btn-sm mt-auto");

    //gán paragraph 1, 2 và Link vào khung
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    //6. Gán khung hình và khung thông tin vào product item
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    //Gắn product item vào product list
    document.getElementById("product-list").appendChild(productItem);
}

function showProduct(products)
{
    const container = document.getElementById('product-list');
    
    container.innerHTML = "";

    products.forEach(item => {
        // Tạo element cha bằng createElement 
        const productItem = document.createElement('div');
        productItem.className = 'product-item col-md-3 col-sm-6';

        // Sử dụng Template Literal nạp dữ liệu vào
        productItem.innerHTML = `
            <div class="product-image ratio ratio-1x1 overflow-hidden">
                <img src="${item.image}" alt="${item.name}" class="img-fluid object-fit-cover">
            </div>
            <div class="product-info p-2 text-center">
                <p class="product-name mb-1">${item.name}</p>
                <p class="product-price text-danger fw-bold mb-2">
                    ${item.price.toLocaleString('vi-VN')} đ
                </p>
                <a href="${item.productLink}" class="btn btn-sm btn-outline-primary w-100">
                    Xem chi tiết
                </a>
            </div>
        `;

        container.appendChild(productItem);
    });
}