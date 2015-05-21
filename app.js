// solution
$(function(){
  window.templateHTML = $("script#looney-toons-template").html();
  window.templateObj = _.template(templateHTML);
  window.compiledTemplate = templateObj({collection: loons});
  $("#looney-toons-wrapper").html(compiledTemplate);
});