$.fn.bonus=function(opts){
	var defaults={
		//parseInt(Math.random()*(上限-下限+1)+下限);
		xPos:parseInt(Math.random()*(1000-5+1)+5),
		yPos:parseInt(Math.random()*(600-5+1)+5),
		step:1,
		delay:20,
		height:0,
		Hoffset:0,
		Woffset:0,
		yon:0,
		xon:0,
		pause:true
	
	};
	
	var setter =$.extend({},defaults,opts);
	
	var interval;
	var i=$(".bonus");
	var bonus=new Array();
	var size=4; //随机红包文件名后缀
	var arr = [];
	for(var num = 0; num<size; num++){
		arr.push(num);
	}
	var seed = ~~(Math.random()*arr.length);
	bonus[i]=$('<div class="bonus" bonusID='+setter.bonusID+' style="z-index:900;position: absolute;left: 0;width: 100px;cursor:pointer; -webkit-user-select:none; "><img src="./images/hb' +seed+ '.png" style="width:100%;"></div>');
	$(this).append(bonus[i]);
	bonus[i].css("top",Math.random().toFixed(3).substr(2));
    self[i]=bonus[i][0];
	
	start(self[i]);
	
	function changePos(obj){
		width = document.body.clientWidth;
		height = document.body.clientHeight;
		Hoffset = obj.offsetHeight;
		Woffset = obj.offsetWidth;
		obj.style.left = setter.xPos + document.body.scrollLeft +'px';
		obj.style.top = setter.yPos + document.body.scrollTop +'px';
		//console.log(setter.yPos);
		if (setter.yon)
			{setter.yPos =setter.yPos + setter.step;}
		else
			{setter.yPos = setter.yPos - setter.step;}
		if (setter.yPos < 0)
			{setter.yon = 1;setter.yPos = 0;}
		if (setter.yPos >= (height - Hoffset))
			{setter.yon = 0;setter.yPos = (height - Hoffset);}
		if (setter.xon)
			{setter.xPos = setter.xPos + setter.step;}
		else
			{setter.xPos = setter.xPos - setter.step;}
		if (setter.xPos < 0)
			{setter.xon = 1;setter.xPos = 0;}
		if (setter.xPos >= (width - Woffset))
			{setter.xon = 0;setter.xPos = (width - Woffset);   }
	}

	function start(obj){
		interval = setInterval(function(){changePos(obj)}, setter.delay);
	}
	
	function pause_resume(){
		if(setter.pause){
			clearInterval(interval);
			setter.pause = false;
		}else{
			interval = setInterval(function(){changePos()},setter.delay);
			setter.pause = true;
		}
	}
	
	bonus[i].click(function(){
		
        $(this).fadeOut(500);
		obj=$(this);
		setTimeout(function(){
			obj.remove();
		},500);
		//

	});

	//
}
