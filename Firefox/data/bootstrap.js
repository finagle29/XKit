self.port.on('loading_complete', function() {
    var disallowed_urls_regex = /.*\d*\.media\.tumblr.*|.*tumblr\.com\/upload\/image.*/i;
    if (!window.location.href.match(disallowed_urls_regex)) {
        XKit.init();
    }
});
