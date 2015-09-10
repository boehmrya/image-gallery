
//Turn Menu into Quick Tabs

function init_tabs() {

	 //Does element exist?
	 if (!jQuery('ul.navigation').length) {

	 	//If not, exit
	 	return;
	 }

	 //Reveal initial content area(s)
	 jQuery('.tab').each(function() {
	 	jQuery(this).find('div.tab:first').show();
	 });

	 //Listen for click on tabs
	 jQuery('ul.navigation a').click(function () {

	 	// If not current tab
	 	if(!jQuery(this).hasClass('current')) {

	 		//Change the current indicator
	 		jQuery(this).addClass('current').parent('li').siblings('li').find('a.current').removeClass('current');

	 		//Show target, hide others
	 		target = jQuery(this).attr('href');
	 		jQuery('.tab').each(function() {
	 			if (jQuery(this).attr('id') == target) {
	 				jQuery(this).addClass('display').siblings().removeClass('display');
	 			}
	 		})
	 	}

	 //No follow
	 this.blur();
	 return false;
	 });
}



	// Provide your access token
L.mapbox.accessToken = 'pk.eyJ1IjoiYm9laG1yeWEiLCJhIjoiUXBOb3ZfTSJ9.fgytkL9TmUn39iwFazSy8A';
// Create a map in the div #map
L.mapbox.map('map', 'boehmrya.lcfpkaie', {
scrollWheelZoom: false
}).setView([38,-77.0252], 14);;


// Define circle options
// http://leafletjs.com/reference.html#circle
var circle_options = {
    color: '#fff',      // Stroke color
    opacity: 1,         // Stroke opacity
    weight: 10,         // Stroke weight
    fillColor: '#000',  // Fill color
    fillOpacity: 0.6    // Fill opacity
};

var circle_one = L.circle([38.89415, -77.03738], 20, circle_options).addTo(map);
var circle_two = L.circle([38.89415, -77.03578], 20, circle_options).addTo(map);

// Create array of lat,lon points.
var line_points = [
    [38.893596444352134, -77.0381498336792],
    [38.89337933372204, -77.03792452812195],
    [38.89316222242831, -77.03761339187622],
    [38.893028615148424, -77.03731298446655],
    [38.892920059048464, -77.03691601753235],
    [38.892903358095296, -77.03637957572937],
    [38.89301191422077, -77.03592896461487],
    [38.89316222242831, -77.03549981117249],
    [38.89340438498248, -77.03514575958252],
    [38.893596444352134, -77.0349633693695]
];

// Define polyline options
// http://leafletjs.com/reference.html#polyline
var polyline_options = {
    color: '#000'
};

// Defining a polygon here instead of a polyline will connect the
// endpoints and fill the path.
// http://leafletjs.com/reference.html#polygon
var polyline = L.polyline(line_points, polyline_options).addTo(map);


jQuery(document).ready(function() {

	//Tabs
	init_tabs();

	//jQuery('.row').add('p').css('border', '1px solid red');

	//Image Caption shows on hover
	jQuery('.col').hover( function() {
        jQuery(this).find('figcaption').fadeIn(300);
        jQuery(this).find('img').css('opacity', '0.5');
    }, function() {
        jQuery(this).find('figcaption').fadeOut(500);
        jQuery(this).find('img').css('opacity', '1');
    });

});