(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['recipe'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"drink-directions\">\n            <div class=\"drink\">\n              <div class=\"drink-content\">\n                  <div class=\"flip-card-front\">\n                      <div class=\"recipe-image-container\">\n                          <img src =\""
    + alias4(((helper = (helper = lookupProperty(helpers,"img") || (depth0 != null ? lookupProperty(depth0,"img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":6,"column":37},"end":{"line":6,"column":44}}}) : helper)))
    + "\" alt="
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":50},"end":{"line":6,"column":58}}}) : helper)))
    + ">\n                      </div>\n                  </div>\n                  <div class=\"flip-card-back\">\n                      <a href=\"#\"> <h1> "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":10,"column":40},"end":{"line":10,"column":48}}}) : helper)))
    + " </h1> </a>\n                  </div>\n              </div>    \n          </div>\n          <div class=\"recipe-container\">\n              <div class=\"drink-name\">\n                <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":16,"column":20},"end":{"line":16,"column":28}}}) : helper)))
    + "</h1>\n              </div>\n              <div class=\"ingredients\">\n                <h2>Ingredients</h2>\n                <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"ingredients") || (depth0 != null ? lookupProperty(depth0,"ingredients") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredients","hash":{},"data":data,"loc":{"start":{"line":20,"column":19},"end":{"line":20,"column":34}}}) : helper)))
    + "</p>\n              </div>\n              <div class=\"steps\">\n                <h2>How To:</h2>\n                <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"howto") || (depth0 != null ? lookupProperty(depth0,"howto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"howto","hash":{},"data":data,"loc":{"start":{"line":24,"column":19},"end":{"line":24,"column":28}}}) : helper)))
    + "</p>\n              </div>\n              <div class=\"drink-diff\">\n                  <h2>What makes this drink different?</h2>\n                  <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"diff") || (depth0 != null ? lookupProperty(depth0,"diff") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"diff","hash":{},"data":data,"loc":{"start":{"line":28,"column":21},"end":{"line":28,"column":29}}}) : helper)))
    + "</p>\n              </div>\n            </div>\n          </div>";
},"useData":true});
})();