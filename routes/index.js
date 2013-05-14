
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'N*E*J*B' });
};

exports.index2 = function(req, res){
  res.render('index2', { title: 'testview1' });
};
