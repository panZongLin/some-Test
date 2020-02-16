var doc = document;
var body = doc.getElementsByTagName('body')[0];
var _maskBtn = doc.getElementById('maskBtn');

_maskBtn.onclick = function(){
	var _wH = doc.body.scrollHeight;

	var mask = doc.createElement('div');
	mask.style.height = _wH;
	mask.setAttribute('class','maskClass');

	var closeBtn = doc.createElement('div');
	closeBtn.setAttribute('class','closeBtn');

	closeBtn.onclick = function(){
		this.parentNode.removeChild(mask);
		this.parentNode.removeChild(this);
	}
	body.appendChild( mask );
	body.appendChild( closeBtn );
}
//基本实现