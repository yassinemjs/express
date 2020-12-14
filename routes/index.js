var express = require('express');
var router = express.Router();
  

// var index = require ('../controllers/index');


router.get('/', (req, res, next) =>  res.render('home', { title: 'Express' }) );
router.get('/home', (req, res, next) =>  res.render('home', { title: 'Express' }) );

router.use('/service/:d/:h', (req, res, next) => {
  if (req.params.d < 1 || req.params.d > 5)
    res.send("L'application web n'est disponible que pendant les heures de travail du lundi au vendredi ")
    else if (req.params.h < 9 || req.params.h > 17)
    res.send("L'application web n'est disponible que pendant les heures de travail de 9 à 17")
    next()
})

router.get('/service/:d/:h',(req, res, next) =>  res.render('service'))

router.use('/contact/:d/:h', (req, res, next) => {
  if (req.params.d < 1 || req.params.d > 5)
    res.send("L'application web n'est disponible que pendant les heures de travail du lundi au vendredi")
    else if (req.params.h < 9 || req.params.h > 17)
    res.send("L'application web n'est disponible que pendant les heures de travail de 9 à 17")
    next()
})
router.get('/contact/:d/:h',(req, res, next) =>  res.render('contact'))


module.exports = router;
