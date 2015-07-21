define(function(){"use strict";var a={datagridInstanceName:"tags"},b=function(b){this.sandbox.on("sulu.list-toolbar.add",function(){this.sandbox.emit("husky.datagrid."+a.datagridInstanceName+".record.add",{id:"",name:"",changed:"",created:"",author:""})}.bind(this)),this.sandbox.on("sulu.list-toolbar.delete",function(){this.sandbox.emit("husky.datagrid."+a.datagridInstanceName+".items.get-selected",function(a){this.sandbox.emit("sulu.tags.delete",a)}.bind(this))},this),this.sandbox.on("husky.datagrid."+a.datagridInstanceName+".number.selections",function(a){var c=a>0?"enable":"disable";this.sandbox.emit("husky.toolbar."+b+".item."+c,"delete",!1)}.bind(this)),this.sandbox.on("husky.datagrid."+a.datagridInstanceName+".data.save.failed",function(a){a.responseJSON&&a.responseJSON.code&&c.call(this,a.responseJSON.code)},this)},c=function(a){var b="";switch(a){case 1101:b="tag.error.notUnique"}this.sandbox.emit("sulu.labels.error.show",b,"labels.error","")};return{view:!0,instanceNameToolbar:"saveToolbar",layout:{content:{width:"max"}},header:function(){return{title:"tag.tags.title",noBack:!0,breadcrumb:[{title:"navigation.settings"},{title:"tag.tags.title"}]}},templates:["/admin/tag/template/tag/list"],initialize:function(){this.render(),b.call(this,this.instanceNameToolbar)},render:function(){this.sandbox.dom.html(this.$el,this.renderTemplate("/admin/tag/template/tag/list")),this.sandbox.sulu.initListToolbarAndList.call(this,"tags","/admin/api/tags/fields",{el:this.$find("#list-toolbar-container"),template:"default",listener:"default",instanceName:this.instanceNameToolbar,inHeader:!0,groups:[{id:1,align:"left"},{id:2,align:"right"}]},{el:this.sandbox.dom.find("#tags-list",this.$el),url:"/admin/api/tags?flat=true",resultKey:"tags",searchFields:["name"],instanceName:a.datagridInstanceName,viewOptions:{table:{editable:!0,validation:!0}}},"tags","#tags-list-info")}}});