const express = require("express");
const router = express.Router();
const Product = require("../../models/Product.js");

router.get("/:cat", (req, res) => {
    Product.find({ category: req.params.cat }).then((product) => {
        //console.log(product);
        res.json(product);
    });
});

// Product.create(
//     {
//         name: "P2 PFD",
//         brand: "Zhik",
//         price: "139.99",
//         sizes: ["S","M","L","XL"],
//         rating: 0,
//         imageLink:
//             "https://dybp9aem9km4k.cloudfront.net/pub/media/opti_image/webp/catalog/product/cache/77b7c36571f5960ce73e8bdea2fa57ed/p/2/p2pfd-grey-web-front2.webp",
//         description: "SWAG",
//         category: "accessories",
//     },
//     function (err, accessories) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(accessories);
//         }
//     }
// );

// Product.create(
//     {
//         name: "Galaxy S21",
//         brand: "Samsung",
//         price: "899",
//         sizes: ["Black", "White", "Pink", "Purple"],
//         rating: 0,
//         imageLink:
//             "https://media.wired.com/photos/6000ef46c724a79925642473/16:9/w_2383,h_1340,c_limit/Gear-Samsung-Galaxy-S21-colorways-SOURCE-Samsung.jpg.jpg",
//         description: "SWAG",
//         category: "phone",
//     },
//     function (err, Phones) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(Phones);
//         }
//     }
// );

//  Product.create(
//     {
//         name: "Align Collection",
//         brand: "Lulu Lemon",
//         price: "95.00",
//         sizes: ["S","M","L"],
//         rating: 0,
//         imageLink:
//             "https://images.lululemon.com/is/image/lululemon/gbl_Sep_Wk1_QS_Sweaters_W_1_2_lg_Masonry_01_D?$masonry_grid$&wid=648&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
//         description: "SWAG",
//         category: "clothing",
//     },
//     function (err, clothing) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(clothing);
//         }
//     }
// );

// Product.create(
//     {
//         name: "SKYLA BAY BOOT - WOMEN'S",
//         brand: "Timberland",
//         price: "79.99",
//         sizes: ["7","8","9","10","11","12"],
//         rating: 0,
//         imageLink:
//             "https://images.dsw.com/is/image/DSWShoes/499825_231_ss_01?impolicy=qlt-medium-high&imwidth=640&imdensity=1",
//         description: "SWAG",
//         category: "shoe",
//     },
//     function (err, Footwear) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(Footwear);
//         }
//     }
// );

module.exports = router;