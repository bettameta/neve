(function($) {
    $.neveNavigation = {
        init: function() {
            this.repositionDropdowns();
            this.handleResponsiveNav();
        },
        repositionDropdowns: function() {
            var windowWidth = window.innerWidth;
            if (windowWidth <= 768) {
                return false;
            }
            var dropdowns = $(".sub-menu .sub-menu");
            if (dropdowns.length === 0) {
                return false;
            }
            $.each(dropdowns, function(key, dropdown) {
                var submenu = $(dropdown);
                var bounding = submenu.offset().left;
                if (/webkit.*mobile/i.test(navigator.userAgent)) {
                    bounding -= window.scrollX;
                }
                var dropdownWidth = submenu.outerWidth();
                if (bounding + dropdownWidth >= windowWidth) {
                    $(dropdown).css({
                        right: "100%",
                        left: "auto"
                    });
                }
            });
            return false;
        },
        handleResponsiveNav: function() {
            $(".navbar-toggle").on("click touchstart", function() {});
        }
    };
})(jQuery);

var neveScripts = function($) {
    $.neveNavigation.init();
};

neveScripts(jQuery);
//# sourceMappingURL=script.js.map