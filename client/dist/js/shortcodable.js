(()=>{var e,t={305:()=>{shortcodable={controller_url:"admin/shortcodable",initialized:!1,init:function(){this.initialized=!0,$("body").on("change","select.shortcode-type",(function(e){$.post(shortcodable.controller_url,$(this).parents("form").serializeArray(),(function(e){simpler.modal.bodyHtml=$("#xhr_buffer").html(e).html()}))})),$("body").on("submit","#Form_ShortcodeForm",(function(e){return e.preventDefault(),shortcodable.insertShortcode(),simpler.modal.show=!1,!1}))},openDialog:function(){simpler.modal.show=!0,simpler.modal.title="Insert/edit shortcode",simpler.modal.closeBtn=!1,simpler.modal.closeTxt="Close",simpler.modal.saveBtn=!1,simpler.modal.saveTxt="Insert shortcode",simpler.modal.bodyHtml=simpler.spinner,$.post(shortcodable.controller_url,shortcodable.getCurrentEditorSelectionAsParsedShortcodeData(),(function(e){simpler.modal.bodyHtml=$("#xhr_buffer").html(e).html()}))},insertShortcode:function(){var e=$("#Form_ShortcodeForm").serializeArray(),t=["..."];$.each(e,(function(e,r){"SecurityID"!==r.name&&("ShortcodeType"===r.name?t[0]=r.value:t.push("".concat(r.name,'="').concat(r.value,'"')))}));var r="[".concat(t.join(" "),"]");r.length&&(tinyMCE.activeEditor.selection.setContent(r),tinyMCE.activeEditor.undoManager.add())},getCurrentEditorSelectionAsParsedShortcodeData:function(){if(!tinyMCE.activeEditor.selection.isCollapsed()){var e=tinymce.activeEditor.selection.getContent().trim();if(!((e=shortcodable.placeholdersToShortcodes(e,tinyMCE.activeEditor)).length<=2||"["!==e.charAt(0)||"]"!==e.slice(-1))){var t={ShortcodeType:e.slice(1,-1).split(" ").shift()};return $.each($("<".concat(e.slice(1,-1)," />")).get(0).attributes,(function(e,r){t[r.name]=r.value})),t}}},parseAttributeValue:function(e,t){var r=new RegExp(t+'="([^"]+)"',"g").exec(e);return r?tinymce.DOM.decode(r[1]):""},shortcodesToPlaceholders:function(e,t){var r=$(t.targetElm).data("shortcodableplaceholdercodes");return r?e.replace(/\[([a-z_]+)\s*([^\]]*)\]/gi,(function(e,t,o){if(-1!==r.indexOf(t)){var a=shortcodable.parseAttributeValue(o,"id"),i=encodeURI(shortcodable.controller_url+"/placeholder/"+t+"/"+a+"?sc=["+t+" "+o+"]");return jQuery("<img/>").attr("type","image/svg+xml").attr("class","sc-placeholder mceItem mceNonEditable").attr("title",t+" "+o).attr("src",i).prop("outerHTML")}return e})):e},placeholdersToShortcodes:function(e,t){var r=jQuery("<div>"+e+"</div>");return r.find(".sc-placeholder").each((function(){var e=jQuery(this);e.replaceWith("["+tinymce.trim(e.attr("title"))+"]")})),r.html()}}},355:()=>{}},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,a,i)=>{if(!r){var l=1/0;for(d=0;d<e.length;d++){for(var[r,a,i]=e[d],n=!0,c=0;c<r.length;c++)(!1&i||l>=i)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(n=!1,i<l&&(l=i));if(n){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,a,i]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={995:0,454:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var a,i,[l,n,c]=r,s=0;if(l.some((t=>0!==e[t]))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(c)var d=c(o)}for(t&&t(r);s<l.length;s++)i=l[s],o.o(e,i)&&e[i]&&e[i][0](),e[l[s]]=0;return o.O(d)},r=self.webpackChunkbase_package_json=self.webpackChunkbase_package_json||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.O(void 0,[454],(()=>o(305)));var a=o.O(void 0,[454],(()=>o(355)));a=o.O(a)})();