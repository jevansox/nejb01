
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'N*E*J*B' });
};

exports.index2 = function(req, res){
  res.render('index2', { title: 'Dashboard' });
};

exports.index3 = function(req, res){
  res.render('index3', { title: 'Main' });
};
