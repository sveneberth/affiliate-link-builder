$(function() {
	$( '#shortenURL' ).click(function () {
		var inputURL = $( '#inputURL' ).val();
		console.log( inputURL );

		$( '.outputSection' ).hide();

		var regex = /(?:http[s]:\/\/(?:www\.|smile\.){0,1}amazon\.(\w{2,3})(?:\/.*){0,1}(?:\/gp\/aw\/d\/|\/exec\/|\/dp\/|\/gp\/product\/))([a-zA-Z0-9]{10})(?:.*|$)/m
		var match = inputURL.match(regex);
		console.log( match );

		if( match ) {
			console.log	( match );

			var prefix = $('#smile').is(':checked') ? 'smile.' : 'www.';
			var tld = match[1];
			var ASIN = match[2];
			var url = 'https://' + prefix + 'amazon.' + tld + '/dp/' + ASIN;
			console.log( url );

			var html = '<pre class="output">' + // seperated because <pre> sucks
				'<a href="' + url + '" target="_blank"' +
				'id="URL">' + url + '</a></pre>';
		} else {
			var html = '<div class="msg msg-vError has-icon i-cross">\
				<h3 class="msg-headline">Error!</h3>\
				<p>The entered URL isn\'t a valid Amazon URL.</p>\
				</div>';
		}

		$( '.outputSection' ).html(html).show();
	})
});
