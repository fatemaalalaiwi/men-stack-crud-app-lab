
// redirect -> same page
// render -> it will call it as new page


// to link
const Abays = require('../models/abaya');

const router = require('express').Router();

// new
router.get('/abayas/new', async (req,res)=>{
    res.render("abayas/new.ejs")
});



// POST /abayas
router.post("/abayas", async (req, res) => {
  if (description === "colord") {
    req.body.description= true;
  } else {
    req.body.description = false;
  }
  await Abaya.create(req.body);
  res.redirect("/abaya/new");
});

//read all -index page
router.get("/abayas", async(req,res)=> {
  const abayas = await Abaya.find();
res.render("abayas/index.ejs",{abayas})})

// Read one - show page
router.get("/abayas/:abayaId", async (req,res) =>{
  const abaya = await Abaya.findById(req.params.abayaId);
  res.render("fruits/show.ejs", {abaya});
});

// GET - Edit page
router.get("/abayas/:abayaId/edit", async (req, res) =>{
  const abaya = await Abaya.findById(req.params.abayaId);
  res.render("abayas/edit.ejs", { abaya });
});

// PUT - Update 
router.put("/abayas/:abayaId", async (req, res) => {
 if (description === "colord") {
    req.body.description= true;
  } else {
    req.body.description = false;
  }
  await Abaya.findByIdAndUpdate(req.params.abayaId, req.body);
  res.redirect(`/abayas/${req.params.abayaId}`);
});

// Delete
router.delete("/Abayas/:abayaId", async (req, res) => {
  await Abaya.findByIdAndDelete(req.params.abayaId);
  res.redirect("/abayas");
});

module.exports=router;



// note to ask about// 
// controllers/fruits.js

// const Fruit = require('../models/fruit');

// const index = async (req, res) => {
//   const foundFruits = await Fruit.find();
//   res.render('fruits/index.ejs', { fruits: foundFruits });
// };

// module.exports = {
//   index,
// };




// //server
// const fruitsCtrl = require('./controllers/fruits');

// server.js

// const fruitsCtrl = require('./controllers/fruits');

// app.get('/', fruitsCtrl.home);
// app.get('/fruits/new', fruitsCtrl.showNewForm);
// app.post('/fruits', fruitsCtrl.create);
// app.get('/fruits', fruitsCtrl.index);
// app.get('/fruits/:fruitId', fruitsCtrl.show);
// app.delete('/fruits/:fruitId', fruitsCtrl.delete);
// app.get('/fruits/:fruitId/edit', fruitsCtrl.edit);
// app.put('/fruits/:fruitId', fruitsCtrl.update);

// app.listen(3000, () => {
//   console.log('The express app is ready!');
// });

