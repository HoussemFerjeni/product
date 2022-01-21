const router = require("express").Router();
const Products = require("../Models/product.model");


router.get('/products' , async (req,res) => {
    Products.find()
         .then(data => {
         if (!data)
              res.status(404).send({ message: "Pas de produit " });
            else res.render("list", { data });;
               })
          .catch(err => {
            res
             .status(500)
              .send({ message: "not find " });
});
})

router.get('/products/:id',  async (req,res) => {
    Products.findById(req.params.id)
       .then(data => {
       if (!data)
            res.status(404).send({ message: "Pas de produit " + id });
          else  res.render("detail", { data })
             })
        .catch(err => {
          res
           .status(500)
            .send({ message: "not find " + id });
});
})

module.exports = router;