
exports.home = (req, res, next) =>  res.render('home', { title: 'Express' });

/* app.use('/service/:d/:h', (req, res, next) => {
    if (req.params.d < 1 || req.params.d > 5)
      res.send("L'application web n'est disponible que pendant les heures de travail (du lundi au vendredi, de 9 à 17) ")
    else if (req.params.h < 9 || req.params.h > 17)
      res.send("L'application web n'est disponible que pendant les heures de travail (du lundi au vendredi, de 9 à 17) ")
    next()
  }) */

 exports.service = (req, res, next) => 
  
 res.render('service');


 exports.contact = (req, res, next) =>  res.render('contact');