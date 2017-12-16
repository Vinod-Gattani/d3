

function click(d) {

	g_main.transition()
			.duration(750)
			.tween("scale", function() {
				xd = d3.interpolate(tau_scale.domain(), [d.x0, d.x1])
				yd = d3.interpolate(radius_scale.domain(), [d.y0, d.y1])
				yd = d3.interpolate(radius_scale.range(), [d.y0 ? 20:0 , radius])

				return function(t) { tau_scale.domain(xd(t)); radius_scale.domain(yd(t)).range(yr(t)) }
			})
			.selectAll('path')
			.attrTween("d", function(d) { return function() { return arcGenerator(d) } })
}