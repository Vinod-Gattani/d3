
function draw_d3_rectangle(data, xaxis_col, yaxis_col, svg_ele) {


	$(svg_ele).empty()

	margin = {'top': 50, 'right': 50, 'bottom':50, 'left':50}
	active_width = d3.select(svg_element).attr('width') - margin['right'] - margin['left']
	active_height = d3.select(svg_element).attr('height') - margin['top'] - margin['bottom']

	d3.select(svg_element)
		.append('g')
		.attr('transform', 'translate('+margin['left']+','+margin['right']+')')
		.attr('class','g-main')

	yaxis_values = _.pluck(data, yaxis_col)
	xaxis_values = _.pluck(data, xaxis_col)

	//console.log(data_centuries)

	max_value = _.max(yaxis_values)

	yaxis_scale = d3.scaleLinear()
					.range([0, active_height])
					.domain([max_value, 0])

	xaxis_scale = d3.scaleBand()
					.range([0, active_width])
					.domain(xaxis_values)
					.padding(0.2)

	d3.select('.g-main')
		.append('g')
		.call(d3.axisLeft(yaxis_scale))

	d3.select('.g-main')
		.append('g')
		.attr('class', 'g_xaxis')
		.call(d3.axisBottom(xaxis_scale))
		.attr('transform', 'translate(0,'+active_height+')')

	d3.select('.g-main')
		.append('g')
		.selectAll('.bar')
		.data(data)
		.enter()
		.append('rect')
		.attr('x', function(row) {return xaxis_scale(row[xaxis_col])})
		.attr('y', function(row) {return yaxis_scale(row[yaxis_col])})
		.attr('x1', function(row) {return row[xaxis_col]})
		.attr('height', function(row) {return active_height - yaxis_scale(row[yaxis_col])})
		.attr('width', xaxis_scale.bandwidth())
		.attr('fill', 'steelblue')
		.attr('class', 'hjk')
		.on('click', function (d){
			//draw_d3_rectangle(data, xaxis_col, yaxis_col, svg_ele)
			//console.log(x.domain())
		})

	d3.select('.g_xaxis')
		.selectAll('text')
		.attr('transform', function(d){
			if (data.length > 5){
				return 'rotate(-45)'
			}
			else{
				return 'rotate(0)'	
			} 
		})		
		.attr('text-anchor', 'end')	

	//console.log(505)
}