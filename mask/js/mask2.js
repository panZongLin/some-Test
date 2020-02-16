var doc = document;
var body = doc.getElementsByTagName('body')[0];

function getId(n){
	return doc.getElementById(n);
}

function createDom(n){
	return doc.createElement('div');
}

function removeDom( n, m ){
	n.parentNode.removeChild(m);
}

function setAttr( self, attr ){
	for( var i in attr ){
		self.setAttribute( i , attr[i] );
	}
}

getId('maskBtn').onclick = function(){
	var _wH = doc.body.scrollHeight;
	var mask = createDom('div');
	var closeBtn = createDom('div');
	mask.style.height = _wH;


	setAttr( mask, {
		'id':'maskId',
		'class':'maskClass'
	});

	setAttr( closeBtn, {
		'id':'closeId',
		'class':'closeBtn'
	});

	closeBtn.onclick = function(){
		removeDom(this, mask);
		removeDom(this, this);
	}

	body.appendChild( mask );
	body.appendChild( closeBtn );
}

// 封装了一些公共方法