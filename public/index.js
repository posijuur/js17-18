!function(e){function i(e){this.name=e,this.age=20,this.gender="man",this.growth=200,this.weigth=90}function a(e){i.apply(this,arguments),this.placeWork="IT company",this.salary=15e3}function t(e){i.apply(this,arguments),this.placeLearn="Garvard",this.stipend=1e3}a.prototype.work=function(){alert("Hello job")},t.prototype.watchSerial=function(e){alert("serial - cool")};var o=new a("Paul"),s=new t("Crowl");console.log(o.name),o.work(),console.log(s.name),s.watchSerial(),alert("hiii")}(jQuery),function(e){e(".input").keypress(function(i){switch(i.keyCode){case 13:var a=0;e(".list li").remove(),e(".list a").remove();var t=e("input").val();e.getJSON("https://webhose.io/search?token=4f2f7afb-c519-43e7-900f-acd5b2d00c0e&format=json&q="+t,function(i){for(a=0;a<i.posts.length;a++){var t=document.createElement("li");t.innerHTML='<a href="'+i.posts[a].url+'" title="'+i.posts[a].url+'" target="_blank">'+i.posts[a].title+"</a> <p>"+i.posts[a].text+"</p>",e(".list").append(t)}if(e(".list li").length)for(var o=1;o<11;o++)e(".list").append('<a data-action="'+o+'" class="list_link">'+o+"</a>");e("li").hide();for(var s=0;s<10;)e("li:eq("+s+")").show(),s++;e(".list_link").on("click",function(i){i.preventDefault();var a=i.target,t=0,o=10,s=20,r=30,l=40,n=50,p=60,h=70,c=80,d=90,f=e(a).data("action");switch(f){case 1:for(e("li").hide();t<10;)e("li:eq("+t+")").show(),t++;i.stopImmediatePropagation();break;case 2:for(e("li").hide();o<20;)e("li:eq("+o+")").show(),o++;i.stopImmediatePropagation();break;case 3:for(e("li").hide();s<30;)e("li:eq("+s+")").show(),s++;i.stopImmediatePropagation();break;case 4:for(e("li").hide();r<40;)e("li:eq("+r+")").show(),r++;i.stopImmediatePropagation();break;case 5:for(e("li").hide();l<50;)e("li:eq("+l+")").show(),l++;i.stopImmediatePropagation();break;case 6:for(e("li").hide();n<60;)e("li:eq("+n+")").show(),n++;i.stopImmediatePropagation();break;case 7:for(e("li").hide();p<70;)e("li:eq("+p+")").show(),p++;i.stopImmediatePropagation();break;case 8:for(e("li").hide();h<80;)e("li:eq("+h+")").show(),h++;i.stopImmediatePropagation();break;case 9:for(e("li").hide();c<90;)e("li:eq("+c+")").show(),c++;i.stopImmediatePropagation();break;case 10:for(e("li").hide();d<100;)e("li:eq("+d+")").show(),d++;i.stopImmediatePropagation()}})})}})}(jQuery);