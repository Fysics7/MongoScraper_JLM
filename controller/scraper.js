// require cheerio 
var cheerio = require('cheerio');

// get html
var request = require('request');


// Use Article model
var Article = require('../models/Article');

// The website we are scraping
var website = 'https://www.wired.com/latest-news';

function scrapedWeb(callback) 
{
  request(website, function(error, response, html)
    
  {
    if (error) console.log("Error Scraping", error);

    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);

    //Target articles by tag
    $("ul.col li a").each(function(i, element) 
    {
      

      // Add the text and href of every link, and save them as properties of the result object
      var title = $(this).children("div").children("h2").text();
      var link = $(this).attr("href");
     

      var scrapeArticle = new Article(
      {
        title: title,
        link: link
      });

      // Save Article
      scrapeArticle.save(function(error) 
      {
        
      });
    });

    callback();
  });
      
}

// export the scraps
exports.scrapedWeb = scrapedWeb;