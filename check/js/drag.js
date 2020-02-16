
var config = {
	imgPosX: 160 //缺口位置
}

//构造器
function drag(){
	this.getId = function(n){
		return document.getElementById(n);
	}
	this.lineXpos = function(){
		return this.getId('lineId').offsetLeft;
	}
	this.init();
}

drag.prototype = {
	init:function(){
		var _self = this;
		_self.lineShow();
		_self.btnHover();
	},
	lineShow:function(){
		// 拖动条显示出来
		var _self = this;
		_self.getId('lineId').style.display = 'block';
	},
	btnHover:function(){
		var _self = this;
		var btn = _self.getId('btnId');
		var pop = _self.getId('pop');
		btn.onmouseover = function(){ //移入
			pop.style.display = 'block';
		}
		btn.onmouseout = function(){ //移出
			pop.style.display = 'none';
		}
		btn.onmousedown = function(){ //摁下
			_self.btnDown();
		}
	},
	btnDown:function(){
		var _self = this;
		_self.getId('pop').style.display = 'none';
		_self.getId('popmoveId').style.display = 'block';
		_self.getId('popblockId').style.display = 'block';

		_self.btnMove();
	},
	btnMove:function(){// 鼠标移动
		var _self = this;
		_self.getId('lineId').onmousemove = function(e){
			var _n = e.clientX - _self.lineXpos();
			_self.getId('btnId').style.left = _n -20 + 'px';
			_self.getId('popblockId').style.left = _n - 20 + 'px';
		}
		_self.btnUp();
	},
	btnUp:function(){// 鼠标抬起
		var _self = this;
		_self.getId('btnId').onmouseup = function(){
			_self.getId('lineId').onmousemove = null;
			_self.touchEnd(_self.getId('btnId').style.left);
			_self.getId('btnId').style.left = 0;
			_self.getId('popblockId').style.left = 0;
		}
	},
	touchEnd:function( _n ){
		var _num = _n.substring(0, _n.length-2);
		console.log('_num', _num)
		// 拼图吻合，真正的拖动验证，在此处是做的图像识别与分析，
		var _self = this;
		if( _num>=config.imgPosX-10 && _num<=config.imgPosX+10){
			alert('拼图成功！');
		}else {
			alert('拼图失败！');
		}
		_self.getId('popblockId').style.display = 'none';
		_self.getId('popmoveId').style.display = 'none';
	}	
}

new drag();