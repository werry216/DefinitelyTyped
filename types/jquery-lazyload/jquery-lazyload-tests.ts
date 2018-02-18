$(document).ready(() => {
    // basic usage
    $('.lazyload').lazyload();

    // with options
    const options: jQueryLazyLoad.Options = {
        threshold: 200,
        event: 'click',
        effect: 'fadeIn',
        container: $('#container'),
        failure_limit: 10,
        skip_invisible: true
    };
    $('.lazyload').lazyload(options);

    // event on load
    $('.lazyload').on('load', () => {
        $("img.lazy").trigger("click");
    });
});
