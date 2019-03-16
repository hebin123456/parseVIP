!function(){
	var jzygObj = window.jzyg_slot[window.jzyg_slot.length-1];
	src = "http://jz.shafa5.com/getslotjs/getslotjs/slot_id/"+jzygObj.jzyg_0522_slot_id;

	if( typeof jzygObj.p != 'undefind' && jzygObj.p != '' )
	{
		src += '/p/'+ jzygObj.p;
	}

	document.writeln( '<script src="'+src+'"></script>' );
}();

function slotJs( result ) {

	if( result['code'] != 0 ){
		window.jzyg_slot.push( result['js_code'] );
		document.writeln( result['js_src'] );
	}else{
		console.log(result);
	}
}