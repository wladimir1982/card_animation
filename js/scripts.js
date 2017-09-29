
;
(function ($) {

    $(document).ready(function () {

        var $gridImg = $('.grid').isotope({
            itemSelector: ".item",
            layoutMode: 'masonry',
            masonry: {
                columnWidth: 270,
                gutter: 5
            }
        });

        $("#filters button").click(function () {
            var $this = $(this);
            if (!$this.hasClass("is-checked")) {
                $this.parents("#navigation").find(".is-checked").removeClass("is-checked");
                $this.addClass("is-checked");
            }
            var selector = $this.attr("data-filter");
            $gridImg.isotope({
                filter: selector
            });
        });
    });
})(jQuery);

