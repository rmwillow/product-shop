const express = require("express");
const router = express.Router();
const Product = require("../../models/Product.js");

router.get("/:cat", (req, res) => {
    Product.find({ category: req.params.cat }).then((product) => {
        //console.log(product);
        res.json(product);
    });
});

Product.create(
    {
        name: "UNIFORIA PRO",
        brand: "ADIDAS",
        price: "160",
        sizes: ["5","6","7","8"],
        rating: 0,
        imageLink:
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/293609dd26704c498b9aaae20101c395_9366/Uniforia_Pro_Football_White_FH7362_01_standard.jpg",
        description: "SWAG",
        category: "accessories",
    },
    function (err, accessories) {
        if (err) {
            console.log(err);
        } else {
            console.log(accessories);
        }
    }
);

Product.create(
    {
        name: "iPhone 11",
        brand: "APPLE",
        price: "1099",
        sizes: ["Pro", "Max"],
        rating: 0,
        imageLink:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022175704",
        description: "SWAG",
        category: "phones",
    },
    function (err, phone) {
        if (err) {
            console.log(err);
        } else {
            console.log(phone);
        }
    }
);

Product.create(
    {
        name: "Flannel",
        brand: "Forever 21",
        price: "24.99",
        sizes: ["S","M","L"],
        rating: 0,
        imageLink:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/8-2-flannel-2x1lede3-1627938965.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        description: "SWAG",
        category: "clothing",
    },
    function (err, clothing) {
        if (err) {
            console.log(err);
        } else {
            console.log(clothing);
        }
    }
);

Product.create(
    {
        name: "Chuck Taylor All Star",
        brand: "Converse",
        price: "75.00",
        sizes: ["7","8","9"],
        rating: 0,
        imageLink:
            "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw01d50f3c/images/a_107/561676C_A_107X1.jpg?sw=964",
        description: "SWAG",
        category: "shoe",
    },
    function (err, shoe) {
        if (err) {
            console.log(err);
        } else {
            console.log(shoe);
        }
    }
);

module.exports = router;