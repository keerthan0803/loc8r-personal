
const homelist = (req, res) => {
 res.render('locations-list', { title: 'loc8r' });
};
/* GET 'Location info' page */
const locationInfo = (req, res) => {
 res.render('locations-info', { title: 'loc8r' });
};
/* GET 'Add review' page */
const addReview = (req, res) => {
 res.render('locations-review-form', { title: 'Add review' });
};
module.exports = {
 homelist,
 locationInfo,
 addReview
};
