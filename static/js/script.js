$(function() {
	$( '#generateAffiliate' ).click(function () {
		var inputURL = $( '#inputURL' ).val();
		console.log( inputURL );

		$( '.outputSection' ).hide();

		var regex = /(?:http[s]:\/\/(?:www\.){0,1}amazon\.\w{2,3}(?:\/.*){0,1}(?:\/gp\/aw\/d\/|\/exec\/|\/dp\/|\/gp\/product\/))([a-zA-Z0-9]{10})(?:.*|$)/m
		var match = inputURL.match(regex);
		console.log( match );

		if(match) {
			var ASIN = match[1];
			var affiliateURL = 'https://www.amazon.de/dp/' + ASIN + '?tag=gsg-abi-2018-21';
			console.log( affiliateURL );

			var html = '<p>Klicke nun auf diesen Link oder kopiere ihn. \
				Viel Spaß beim Bestellen!</p>\
				<pre class="output">' + // seperated because <pre> sucks
				'<a href="' + affiliateURL + '" target="_blank"' +
				'id="affiliateURL">' + affiliateURL + '</a></pre>';
		} else {
			var html = '<div class="msg msg-vError has-icon i-cross">\
				<h3 class="msg-headline">Fehler!</h3>\
				<p>Dies scheint keine gültige Amazon URL zu sein.</p>\
				</div>';
		}

		$( '.outputSection' ).html(html).show();
	})
});
