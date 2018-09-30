$(function() {
	$( '#shortenURL' ).click(function () {
		var inputURL = $( '#inputURL' ).val();
		console.debug( inputURL );

		$( '.outputSection' ).hide();

		var regex = /(?:http[s]:\/\/(?:www\.|smile\.){0,1}amazon\.(\w{2,3})(?:\/.*){0,1}(?:\/gp\/aw\/d\/|\/exec\/|\/dp\/|\/gp\/product\/))([a-zA-Z0-9]{10})(?:.*|$)/m
		var match = inputURL.match(regex);
		console.debug( match );

		if( match ) {
			var prefix = $('#smile').is(':checked') ? 'smile.' : 'www.';
			var tld = match[1];
			var ASIN = match[2];
			var url = 'https://' + prefix + 'amazon.' + tld + '/dp/' + ASIN;
			console.debug( url );

			var html = '<pre class="output">' + // seperated because <pre> sucks
				'<a href="' + url + '" target="_blank"' +
				'id="url">' + url + '</a></pre>';
			html += '<button class="btn btn-vClipboard js-clipboard has-icon i-clipboard">Copy</button>';
		} else {
			var html = '<div class="msg msg-vError has-icon i-cross">\
				<h3 class="msg-headline">Error!</h3>\
				<p>The entered URL isn\'t a valid Amazon URL.</p>\
				</div>';
		}

		$( '.outputSection' ).html(html).show();
	});

	$( '.outputSection' ).on('click', '.js-clipboard', function () {
		var $newSelection = $( '#url' );
		var selection = window.getSelection();
		var range = document.createRange();
		range.setStartBefore($newSelection.first()[0]);
		range.setEndAfter($newSelection.last()[0]);
		selection.removeAllRanges();
		selection.addRange(range);

		document.execCommand( 'copy' );
		console.debug( 'copied to clipboard' );
	})
});
