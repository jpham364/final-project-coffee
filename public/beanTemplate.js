(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bean'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class = \"beanEntry\" data-name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"beanName") || (depth0 != null ? lookupProperty(depth0,"beanName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"beanName","hash":{},"data":data,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":48}}}) : helper)))
    + "\" data-weight=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"weight") || (depth0 != null ? lookupProperty(depth0,"weight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"weight","hash":{},"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":73}}}) : helper)))
    + "\" data-roast=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"roast") || (depth0 != null ? lookupProperty(depth0,"roast") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"roast","hash":{},"data":data,"loc":{"start":{"line":1,"column":87},"end":{"line":1,"column":96}}}) : helper)))
    + "\" data-notes=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"notes") || (depth0 != null ? lookupProperty(depth0,"notes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"notes","hash":{},"data":data,"loc":{"start":{"line":1,"column":110},"end":{"line":1,"column":119}}}) : helper)))
    + "\">\n    \n    <button id=\"userData\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"beanName") || (depth0 != null ? lookupProperty(depth0,"beanName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"beanName","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":38}}}) : helper)))
    + "</button>\n    \n</div>\n\n";
},"useData":true});
})();