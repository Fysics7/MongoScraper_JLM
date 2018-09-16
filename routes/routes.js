// ******* DEPENDENCIES ***********

var express = require('express');
var router = express.Router();
var Article = require('../models/Article');
var Note = require('../models/Note');
var scraper = require('../controller/scraper');
// ***********************************

// Home Page
router.get('/', function(request, response) 
{

	// Get all the articles
	Article.find({}, function(error, data) 
	{

		// Any errors getting the articles
		if (error) console.log("error getting articles", error);

		response.render('index', {title: "NewsScraper", articles: data});
	
	});

}); 


// Scrape Route
router.get('/scrape', function(request, response) 
{

	// Run scrapedWeb
	scraper.scrapedWeb(function() 
	{

		// Scrape then return to homepage
		response.redirect('/');
	});
});

// GET Notes Route
router.get('/note/:id', function(request, response) 
{
	Article.findOne({_id: request.params.id})
		.populate("note")
		.exec(function(error, doc) {
			if (error) console.log("error getting notes", error);

			response.send(doc.note);
			
		});
});

// POST Notes Route
router.post('/note/:id', function(request, response) 
{

	var newNote = new Note(request.body);

	newNote.save(function(error, doc) 
	{
		Article.findOneAndUpdate(
			{_id: request.params.id},
			{$push: {note: doc._id}},
			{new: true},
			function(err, anotherDoc) {
				if (error) console.log("post error", error);
				response.send(anotherDoc);
			});
	});
});


// Delete Note
router.post('/deleteNote/:id', function(request, response) 
{
	console.log(request.params.id);
	
	Note.findByIdAndRemove({_id: request.params.id}, function(error) 
	{
		if (error) console.log('error deleting note', error);
		response.send();
	});
})


module.exports = router;
