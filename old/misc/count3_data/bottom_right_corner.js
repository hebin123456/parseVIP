;(function(){var object=typeof exports!='undefined'?exports:typeof self!='undefined'?self:$.global;var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';function InvalidCharacterError(message){this.message=message}InvalidCharacterError.prototype=new Error;InvalidCharacterError.prototype.name='InvalidCharacterError';object.btoa||(object.btoa=function(input){var str=String(input);for(var block,charCode,idx=0,map=chars,output='';str.charAt(idx|0)||(map='=',idx%1);output+=map.charAt(63&block>>8-idx%1*8)){charCode=str.charCodeAt(idx+=3/4);if(charCode>0xFF){throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");}block=block<<8|charCode}return output})}());

/*此处开始将广告的信息添加到页面上*/
function get_dsj_iframe_bottom_right_corner(){
	
	var jzygObj = window.jzyg_slot[window.jzyg_slot.length-1];
	
	var front_server = jzygObj.jzyg_0522_front_server;
	
    var bottom_right_corner_url;
    
    if( typeof jzygObj.p != 'undefind' && jzygObj.p != '' )
	{
    	bottom_right_corner_url = front_server+'/showdsj/displaydsj/slot_id/'+jzygObj.jzyg_0522_slot_id+
    							'/p/' + jzygObj.p + '/referer/'+btoa(document.referrer);
	}
    else
    {
    	bottom_right_corner_url = front_server+'/showdsj/displaydsj/slot_id/'+jzygObj.jzyg_0522_slot_id+
						    	'/referer/'+btoa(document.referrer);
    }
    
    var mt_rand_num = Math.ceil( Math.random() * 1000000000 );

    var rootelement = document.body;
    
    var div = document.createElement('div');
    div.style.width = jzygObj.jzyg_0522_dsj_w+'px';
    div.id = 'bottom_lright_corner_'+mt_rand_num;
    div.style.height = jzygObj.jzyg_0522_dsj_h+'px';
    div.style.position = 'fixed';
    div.style.bottom = '1px';
    div.style.right = '1px';
    div.style.zIndex = 999999999;
    rootelement.appendChild(div);


    var iframe = document.createElement("iframe");
    iframe.src = bottom_right_corner_url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.scrolling = "no";
    iframe.frameBorder = 'no';
    div.appendChild(iframe);

    var img = document.createElement("img");
    img.src = front_server+'/image/close.png';
    img.style.margin = '2px';
    img.style.width = '16px';
    img.style.height = "16px";
    img.style.float = 'left';
    img.style.position = "absolute";
    img.style.top = '0px';
    img.style.left = "0px";
    img.setAttribute('onclick','close_dsj_iframe_bottom_right_corner('+mt_rand_num+')');
    div.appendChild(img);

    var tagA = document.createElement('a');
    tagA.title = '极智云告提供';
    div.appendChild(tagA);

    var img2 = document.createElement("img");
    img2.src = front_server+'/image/jizhi.png';
    img2.style.width = '32px';
    img2.style.height = "16px";
    img2.style.float = 'left';
    img2.style.position = "absolute";
    img2.style.bottom = '0px';
    img2.style.right = "0px";
    img2.setAttribute('onclick','openJizhi()');
    tagA.appendChild(img2);
}

function openJizhi()
{
    window.open('http://www.media8.cn');
}

function close_dsj_iframe_bottom_right_corner( mt_rand_num )
{
    document.getElementById("bottom_lright_corner_"+mt_rand_num).parentNode.removeChild( document.getElementById("bottom_lright_corner_"+mt_rand_num) );
}

get_dsj_iframe_bottom_right_corner();