;(function(win,undefined){

	function drag(){}
	drag.prototype = {
		init:function(){
			var _self = this;
			var title = document.getElementsByClassName('title');

			for(let i=0; i<title.length; i++) {
				let titOne = title[i];
				_self.randomPos(titOne, i);
				_self.randomBg(titOne);
				titOne.onmousedown = function(){
					_self.event(titOne, title);
				};
			}
		},
		randomPos:function(node, pos){
			var style = node.style;
			style.left = '0px';
			style.top = pos*200 + 'px';
		},
		randomBg:function(node){
			node.style.backgroundColor = '#' + Math.ceil(Math.random()*16777215).toString(16);
		},
		event:function(node, group){	
			var _self = this;
			var x = null;
			var y = null;
			document.onmousemove = function(e){
				x = e.clientX;
                y = e.clientY;
                node.style.left = x + 'px';
                node.style.top = y + 'px';
			}
			document.onmouseup = function(){
				var WG = window.groupArr;
				if(!WG || WG.length==0) {
					WG = [];
					for(var j=0; j<group.length; j++) {
						WG.push(group[j]);
					}
				}

				var index = WG.findIndex((item)=> item.innerHTML==node.innerHTML);	
				if(y!=null) {
					WG.splice(index, 1);
					if(y<=200) {
						WG.splice(0, 0, node);
					}else if(y>200&&y<=400) {
						WG.splice(1, 0, node);
					}else if(y>400&&y<=600) {
						WG.splice(2, 0, node);
					}else{
						WG.push(node);
					}
				}		

				for(var k=0; k<WG.length; k++) {
					_self.randomPos(WG[k], k);
				}
				
				window.groupArr = WG;
                document.onmousemove = null;
                document.onmouseup = null;
            }
		},
	}
	win.drag = new drag();
})(window.webfeel = window.webfeel || {});

webfeel.drag.init();