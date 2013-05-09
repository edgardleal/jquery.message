$.widget("ui.info",{
    options : {text : "",
      autoShow : true,
      animation : "fold"
      },
    _create : function(){
      var $this = $(this);
      this.element.toggleClass("ui-widget", true);
      this.element.css("position", "absolute")
      .css("height", "50px")
      .css("width", "100%")
      .css("opacity", "0.8");
      var classes = "ui-state-highlight ui-corner-all";
      this.element.append("<div class='" + classes +
      "' style='padding: 0 .7em;text-align:left;'>" +
      "<span class='ui-icon ui-icon-close' style='margin-left: 97%;'></span>" +
      "<p><span class='ui-icon ui-icon-info' style='float : left;margin-right:7px;'></span>" + this.options.text + "</p>" +      
      "</div>");

      this.element.find(".ui-icon-close").button()
      .click(function(){$(this).aprent()._close();});
       if(this.options.autoShow)
          this.element.show("fold", 1000);
    },
    _close : function(){
       $(this).parent().hide('slide', function(){this.element.empty();});
    },
    show : function(){
       $(this).show("slide", 1000, function(){$(this).css("top","0px");});
    },
    destroy : function(){
       $(this).empty();
    }
});
