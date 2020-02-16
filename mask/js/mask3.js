// 原型
function MaskFn(){
	this.doc = document;
	this.body = this.doc.getElementsByTagName('body')[0];
}

// 然后用prototype进行扩展
MaskFn.prototype = {
	init:function(){
		var _self = this;
		_self.getId('maskBtn').onclick = function(){
			_self.clickFn();
		}
	},
	getId:function(n){
		return _self.doc.getElementById(n);
	},
	createDom:function(){
		return _self.doc.createElement('div');
	},
	removeDom:function(n, m){
		n.parentNode.removeChild(m);
	},
	setAttr:function(n, attr){
		for( var i in attr ){
			n.setAttribute( i , attr[i] );
		}
	},
	clickFn:function(){
		var _self = this;
		var _wH = _self.doc.body.scrollHeight;
		var mask = _self.createDom('div');
		var closeBtn = _self.createDom('div');
		mask.style.height = _wH;

		_self.setAttr( mask, {
			'id':'maskId',
			'class':'maskClass'
		});

		_self.setAttr( closeBtn, {
			'id':'closeId',
			'class':'closeBtn'
		});

		closeBtn.onclick = function(){
			_self.removeDom(this, mask);
			_self.removeDom(this, this);
		}

		this.body.appendChild( mask );
		this.body.appendChild( closeBtn );
	}
}

new MaskFn().init();
