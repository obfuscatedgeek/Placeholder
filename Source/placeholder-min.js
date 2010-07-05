/*
---
description: A simple Mootools class to beauty your form similar to the Apple Store checkout form.

license: MIT-style

authors:
- Ejaz

requires:
- Mootools Core 1.2.4

provides : [Placeholder]


...
*/
var PlaceHolder=new Class({Implements:[Options],options:{focusClass:"",blurClass:"",positionClass:""},initialize:function(formId,options){this.form=$(formId);this.setOptions(options);this.buildHolders()},buildHolders:function(){var self=this;var alInputs=this.form.getElements("input[type='text']");alInputs.combine(this.form.getElements("input[type='password']"));alInputs.each(function(elm,elmCounter){var spWrapper=new Element("span",{"id":"wp-"+elm.get("name"),"class":"spanWrappers"}).setStyles({display:'inline-block',position:'relative'}).injectInside(elm.getParent()).adopt(elm);var spLabel=new Element("span",{"html":elm.get("title"),"id":"pc-"+elm.get("name"),"class":self.options.positionClass+" "+self.options.blurClass}).setStyles({position:'absolute','z-index':2}).inject(elm,"before");spLabel.addEvent('click',function(){this.getNext().focus()});if($chk(elm.get("value"))){spLabel.fade("out")}elm.addEvents({'focus':function(){var spn=$("pc-"+elm.get("name"));if($chk(elm.get("value"))){spn.fade("out");spn.removeClass(self.options.focusClass)}else{spn.fade("in");spn.addClass(self.options.focusClass);spn.removeClass(self.options.blurClass)}},'keyup':function(){var spn=$("pc-"+elm.get("name"));if($chk(elm.get("value"))){spn.fade("out")}else{spn.fade("in");spn.addClass(self.options.focusClass)}},'blur':function(){var spn=$("pc-"+elm.get("name"));spn.removeClass(self.options.focusClass);spn.addClass(self.options.blurClass)}})})}});
