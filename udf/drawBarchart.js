

function drawBarchart(ele, max_width, x, y){

	max_value = _.max(y)
	$(ele).empty()

	for(i=0; (i<x.length) & (i<20); i++){
		curr_x = x[i]
		curr_width = y[i]/max_value * max_width

		$(ele).append('<div class="box" style="width:'+curr_width+'px">'+curr_x+'</div>')

	}
	

}