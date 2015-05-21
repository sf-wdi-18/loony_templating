// solution
$(function(){
  var templateHTML = $("script#looney-toons-template").html();
  var templateObj = _.template(templateHTML);
  var compiledTemplate = templateObj({collection: loons});
  $("#looney-toons-wrapper").html(compiledTemplate);
});

/*
  line 3: Grab the HTML from the template in the script tag
          with the ID `looney-toons-template`.

  line 4: Pass that HTML into Underscore's .template function
          which returns an object that can dynamically take in data.

  line 5: Pass data into the Underscore's template Object.
          We must give it an object with a `key` that matches
          the variable name that is referenced in the template
          and a `value` that is the data we are passing in. This
          fuses our data into our template and returns an HTML string.

  line 6: Finally, select the `#looney-toons-wrapper` (which exists
          simply as a placeholder in our page) and set it's HTML
          to the value of what our compiled template is.
*/