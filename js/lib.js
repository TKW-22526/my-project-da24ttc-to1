//Khai báo mảng đối tượng để lưu dữ liệu sản phẩm
/*
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
*/
const productList = [
    {
        id: "01", 
        name: "Cua biển Trà Vinh", 
        price: 250000, 
        image: "../assets/images/cua-bien.jpg", 
        productLink: "product-detail.html",
        desc: "Cua biển Trà Vinh từ lâu đã nổi tiếng khắp cả nước nhờ chất lượng thịt vượt trội và hương vị thơm ngon đặc trưng không thể trộn lẫn. Được nuôi dưỡng trong môi trường tự nhiên tại các vùng rừng ngập mặn và cửa sông ven biển của tỉnh Trà Vinh, loài cua này sở hữu nguồn thức ăn dồi dào phong phú giúp cho lớp vỏ bên ngoài luôn cứng cáp, khỏe mạnh. Khi thưởng thức, bạn sẽ ngay lập tức cảm nhận được từng thớ thịt cua săn chắc, ngọt thanh tự nhiên và chứa đựng hàm lượng dinh dưỡng cực kỳ cao. Đặc biệt, phần gạch cua béo ngậy, vàng ươm chính là điểm nhấn đắt giá nhất khiến bất kỳ thực khách khó tính nào cũng phải say mê ngay từ lần thử đầu tiên. Sản phẩm cua biển được cửa hàng chúng tôi tuyển chọn vô cùng kỹ lưỡng từng con một, đảm bảo cua luôn còn sống khỏe, dây buộc siêu nhẹ để bảo vệ tối đa quyền lợi của quý khách hàng khi mua sắm. Đây là nguyên liệu tuyệt vời để chế biến thành nhiều món ăn hấp dẫn như cua sốt me, cua hấp nước dừa hay lẩu cua bầu."
    },
    {
        id: "02", 
        name: "Tôm hùm xanh", 
        price: 850000, 
        image: "../assets/images/tom-hum.webp", 
        productLink: "product-detail.html",
        desc: "Tôm hùm xanh được ví như vua của các loại hải sản nhiệt đới nhờ vào vẻ ngoài sang trọng bệ vệ và giá trị dinh dưỡng đỉnh cao mà nó mang lại. Những chú tôm hùm xanh tươi sống được khai thác trực tiếp từ các vùng biển nước sâu hoàn toàn trong lành, nơi có rạn san hô phát triển tự nhiên giúp tôm có môi trường sinh trưởng hoàn hảo nhất. Thân tôm hùm xanh có cấu trúc cơ bắp cực kỳ phát triển, mang lại phần thịt đuôi dày dặn, có độ giòn sần sật vô cùng đã miệng khi nhai và vị ngọt đậm đà khó quên. Không chỉ ngon miệng, tôm hùm xanh còn là nguồn cung cấp protein chất lượng cao, omega ba tốt cho tim mạch và nhiều loại khoáng chất vi lượng thiết yếu cho cơ thể con người. Sản phẩm được vận chuyển nhanh chóng bằng hệ thống xe chuyên dụng có sục oxy liên tục từ biển về cửa hàng, cam kết giữ trọn vẹn độ tươi ngon như vừa mới đánh bắt ngoài khơi xa. Tôm hùm xanh vô cùng thích hợp cho các bữa tiệc nướng BBQ sang trọng, tôm hùm hấp sả hoặc cháy tỏi."
    },
    {
        id: "03", 
        name: "Mực lá đại dương", 
        price: 320000, 
        image: "../assets/images/muc-la.jpg", 
        productLink: "product-detail.html",
        desc: "Mực lá đại dương loại thượng hạng là món quà vô giá mà biển cả bao la đã ưu ái ban tặng cho những tín đồ yêu thích hải sản cao cấp. Với đặc điểm hình thái sở hữu vây mực dày bo tròn chạy dọc suốt chiều dài thân, mực lá được đánh giá là loại mực có phần thịt ngon nhất, dày nhất và ngọt nhất trong họ hàng nhà mực. Sau khi được ngư dân đánh bắt bằng phương pháp câu tay truyền thống ngoài khơi xa, mực sẽ ngay lập tức được cấp đông chuyên sâu ngay trên tàu để khóa chặt độ tươi ngon nguyên bản cũng như giữ cho lớp da mực luôn lấp lánh chân thực. Thịt mực lá đại dương sau khi chế biến có độ dày vượt trội, màu trắng tinh khôi, khi ăn vừa có độ giòn dai sần sật lại vừa mềm mại đầy mọng nước, hoàn toàn không bị teo nhỏ hay ra nước nhiều như các loại mực kém chất lượng khác. Bạn có thể dễ dàng chế biến món mực này thành nhiều món ngon bùng nổ vị giác như mực nướng sa tế, mực xào thập cẩm hoặc làm chả mực giã tay cho gia đình."
    },
    {
        id: "04", 
        name: "Bào ngư Hàn Quốc", 
        price: 950000, 
        image: "../assets/images/bao-ngu.webp", 
        productLink: "product-detail.html",
        desc: "Bào ngư Hàn Quốc nhập khẩu chính ngạch từ vùng đảo xanh Jeju danh tiếng là loại sản phẩm quý hiếm hoàng gia, biểu tượng cho sự xa hoa và đẳng cấp ẩm thực thượng lưu. Sinh trưởng hoàn toàn tự nhiên dưới dòng hải lưu lạnh giá và bám chặt vào các vách đá ngầm sâu thẳm, loài bào ngư này ăn các loại tảo biển sạch nên tích tụ được lượng dưỡng chất vô cùng quý giá cho sức khỏe con người. Thịt bào ngư có cấu trúc cơ săn chắc độc đáo, mang lại cảm giác giòn đanh khi thưởng thức cùng hương vị ngọt hậu sâu lắng, thanh tao lưu luyến mãi nơi đầu lưỡi. Từ ngàn đời xưa, bào ngư đã được xếp vào hàng bát trân của cung đình nhờ công dụng tuyệt vời trong việc bồi bổ thể trạng, tăng cường hệ miễn dịch và kéo dài tuổi thọ một cách tự nhiên. Từng con bào ngư được đóng gói hút chân không kỹ càng và bảo quản nghiêm ngặt ở nhiệt độ tiêu chuẩn quốc tế, đảm bảo giữ nguyên vẹn các amino acid thiết yếu quý báu khi giao đến tận nhà quý khách để nấu súp hoặc hầm thuốc bắc."
    },
    {
        id: "05", 
        name: "Cá hồi Sapa", 
        price: 400000, 
        image: "../assets/images/ca-sapa.jpg", 
        productLink: "product-detail.html",
        desc: "Cá hồi Sapa là một trong những niềm tự hào lớn của ngành nuôi trồng thủy sản nước lạnh tại vùng núi cao Tây Bắc Việt Nam nhờ chất lượng không hề thua kém hàng nhập khẩu. Được nuôi dưỡng trực tiếp trong nguồn nước suối tự nhiên quanh năm mát lạnh và tinh khiết chảy ra từ các khe đá của dãy núi Hoàng Liên Sơn hùng vĩ, cá hồi Sapa phát triển khỏe mạnh với tỷ lệ mỡ thấp. Nhờ đặc điểm khí hậu và thổ nhưỡng đặc biệt này, thịt cá hồi Sapa có màu hồng cam vô cùng bắt mắt, các vân mỡ phân bố đều đặn tơi xốp giúp thịt cá có độ chắc dẻo, ngọt thanh và hoàn toàn không bị ngấy hay có mùi tanh nồng. Đây là nguồn thực phẩm vàng cực kỳ giàu hàm lượng vitamin D, axit béo omega ba và khoáng chất có lợi giúp phát triển trí não toàn diện cho trẻ nhỏ cũng như bảo vệ sức khỏe tim mạch cho người lớn tuổi. Sản phẩm cá hồi luôn được fillet tươi mới mỗi ngày tại cửa hàng để phục vụ cho các món ăn thời thượng như ăn sống sashimi, làm sushi hoặc áp chảo sốt chanh leo."
    },
    {
        id: "06", 
        name: "Sò dương tươi", 
        price: 150000, 
        image: "../assets/images/so-duong.webp", 
        productLink: "product-detail.html",
        desc: "Sò dương tươi sống hay còn gọi là sò mồng, là một loại hải sản thân mềm hai mảnh vỏ rất được ưa chuộng tại các nhà hàng hải sản bờ biển nhờ kích thước lớn và hương vị ngon ngọt độc đáo. Loài sò này thường sinh sống vùi mình sâu dưới các lớp cát mịn hoặc rạn san hô nơi vùng biển nước trong sạch, có nồng độ muối ổn định quanh năm. Điểm đặc trưng nhất của sò dương chính là phần cồi sò cực kỳ lớn, màu trắng ngà, thịt dày dặn và chứa đựng lượng nước ngọt lịm tự nhiên của biển cả sâu thẳm. Khi ăn, bạn sẽ cảm nhận rõ rệt độ giòn ngọt mọng nước, càng nhai kỹ càng thấy bùi béo thơm thoang thoảng vô cùng kích thích vị giác của người thưởng thức. Sò dương tại hệ thống cửa hàng chúng tôi đã được trải qua công đoạn ngâm lọc cát tự nhiên hoàn toàn sạch sẽ, giúp quý khách tiết kiệm tối đa thời gian sơ chế khi mua về nấu nướng. Loại sò này ngon nhất khi mang đi nướng mỡ hành kèm đậu phộng giã nhỏ, nướng phô mai kéo sợi hoặc hấp sả ớt chấm muối ớt xanh cay nồng."
    },
    {
        id: "07", 
        name: "Ghẹ xanh Phan Thiết", 
        price: 450000, 
        image: "../assets/images/ghe-xanh.jpg", 
        productLink: "product-detail.html",
        desc: "Ghẹ xanh Phan Thiết là loại hải sản đặc sản nức tiếng vùng biển duyên hải miền Trung, luôn đứng đầu trong danh sách lựa chọn của những người sành ăn hải sản nhờ chất lượng thịt ngon ngọt bậc nhất. Những con ghẹ xanh có hoa văn chấm trắng liti rực rỡ trên lớp vỏ được đánh bắt từ vùng biển có dải cát đáy sạch và độ mặn cao, giúp thịt ghẹ đạt độ ngon tối ưu khó loại ghẹ nào sánh kịp. Thịt ghẹ xanh Phan Thiết nổi tiếng với cấu trúc từng sớ thịt trắng muốt, mịn màng, có vị ngọt đậm đà tự nhiên tựa như đường phèn và thoang thoảng hương thơm dễ chịu đặc trưng của biển khơi. Cửa hàng chúng tôi chỉ nhập dòng ghẹ đánh bắt trong ngày, thực hiện phân loại nghiêm ngặt để loại bỏ hoàn toàn những con ghẹ ốp hoặc yếu sức, cam kết chỉ giao những con ghẹ chắc nịch, đầy thịt và gạch đến tay người tiêu dùng. Ghẹ xanh hấp bia cùng vài nhánh sả, ghẹ rang muối kéo chỉ hoặc nấu bánh canh ghẹ đậm đà là những món ăn tuyệt hảo giúp bạn gắn kết tình cảm gia đình vào dịp cuối tuần."
    },
    {
        id: "08", 
        name: "Ốc hương loại 1", 
        price: 380000, 
        image: "../assets/images/oc-huong.jpg", 
        productLink: "product-detail.html",
        desc: "Ốc hương loại một luôn xứng danh với tên gọi là nữ hoàng của các loài ốc biển nhờ vào hương thơm quyến rũ tự nhiên phát ra từ thịt ốc ngay cả khi chưa qua chế biến nấu nướng. Kích thước của dòng ốc hương loại một này vô cùng lớn, phom ốc đều đặn, vỏ ốc sạch sẽ có hoa văn màu nâu trắng nổi bật rõ nét đặc trưng vô cùng đẹp mắt. Khi được làm chín, thịt ốc hương tỏa ra một mùi thơm thoang thoảng giống như hương hoa ngâu hoặc lá dứa chín, hòa quyện với phần thịt ốc siêu giòn, dai dẻo dính đặc biệt và ngọt đậm đà đầy lôi cuốn. Ốc hương chứa hàm lượng dinh dưỡng dồi dào phong phú, bao gồm đầy đủ các vitamin nhóm B giúp ổn định hệ thần kinh và các chất béo lành mạnh không gây tăng cân cho cơ thể người dùng. Toàn bộ số lượng ốc hương tại cửa hàng đều được dưỡng trong bể kính nước biển nhân tạo có hệ thống lọc tuần hoàn liên tục, đảm bảo ốc luôn trong trạng thái tươi sống béo mập nhất để chế biến món ốc hương rang muối ớt, xào bơ tỏi hay sốt trứng muối."
    },
    {
        id: "09", 
        name: "Tôm sú tự nhiên", 
        price: 550000, 
        image: "../assets/images/tom-su.jpg", 
        productLink: "product-detail.html",
        desc: "Tôm sú tự nhiên loại lớn được đánh bắt trực tiếp từ các vùng biển khơi hoặc các đầm quảng canh sinh thái tự nhiên là sản phẩm hải sản thuần khiết lành tính được rất nhiều bà nội trợ tin dùng cho bữa ăn gia đình. Khác biệt hoàn toàn với các loại tôm nuôi công nghiệp, tôm sú tự nhiên có lớp vỏ dày màu xanh đen sọc ngang thẫm màu rất cứng cáp giúp bảo vệ phần thịt tôm bên trong một cách hoàn hảo trong suốt quá trình vận chuyển xa. Thịt tôm sú tự nhiên có độ săn chắc tuyệt vời, khi luộc chín vỏ tôm chuyển sang màu đỏ rực rỡ vô cùng bắt mắt, phần thịt trắng ngần dày dặn ăn vào thấy ngọt lịm đậm đà, nhai kỹ thấy thơm bùi rất rõ nét. Tôm sú cung cấp hàm lượng canxi dồi dào cho xương khớp chắc khỏe cùng chất chống oxy hóa astaxanthin giúp bảo vệ làn da tươi trẻ tràn đầy sức sống cho phái đẹp. Sản phẩm tôm sú được cửa hàng cấp đông nhanh cấp tốc bằng công nghệ hiện đại ngay sau khi thu hoạch, đảm bảo giữ trọn vẹn chất lượng thịt thơm ngon để nấu món tôm nướng muối ớt hoặc hấp nước dừa."
    },
    {
        id: "10", 
        name: "Cua hoàng đế (King Crab)", 
        price: 1500000, 
        image: "../assets/images/cua-hoang-de.png", 
        productLink: "product-detail.html",
        desc: "Cua hoàng đế hay còn được biết đến rộng rãi trên toàn cầu với tên gọi King Crab, là đỉnh cao xa xỉ của thế giới hải sản nhập khẩu đại dương mà bất kỳ ai cũng ao ước được thưởng thức một lần trong đời. Sinh sống tại những vùng biển băng giá lạnh lẽo quanh năm và có độ sâu lên đến hàng trăm mét dưới đáy đại dương vùng Alaska, loài cua khổng lồ này sở hữu kích thước vô cùng đồ sộ với những chiếc chân dài đầy gai góc dũng mãnh. Điểm tinh túy nhất của cua hoàng đế tập trung hoàn toàn ở phần thịt chân và càng cua, nơi có những sớ thịt khổng lồ trắng muốt xen lẫn những đường vân đỏ hồng tinh tế rực rỡ. Thịt cua hoàng đế có vị ngọt thanh khiết vô cùng sang trọng, mọng nước dồi dào thơm mùi bơ sữa tự nhiên mà không một loại cua ghẹ nào trên đời có thể sánh bằng. Sản phẩm được chúng tôi nhập khẩu trực tiếp theo quy trình đông lạnh tiêu chuẩn khắt khe bậc nhất, cam kết mang đến bàn tiệc của bạn một trải nghiệm ẩm thực hoàng gia khó quên với món chân cua hoàng đế hấp tỏi hoặc nướng phô mai."
    }
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
    productLink.setAttribute("href", hyperLink+"?id="+id);
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
                <a href="${item.productLink}?id=${item.id}" class="btn btn-sm btn-outline-primary w-100">
                    Xem chi tiết
                </a>
            </div>
        `;

        container.appendChild(productItem);
    });
}