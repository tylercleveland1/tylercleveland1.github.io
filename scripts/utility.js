var navItems = {
    About: '/index.html'
    , 'Projects/Work': '/projects.html'
    , Contact: '/contact.html'
}

$.fn.loadNavbar = function (activeNavItem = navItems.About) {
    var $navContainer = $(this);
    $navContainer.load('/navbar-template.html', function () {
        var $navTemplate = $navContainer.find('[nav-template]');
        var navTemplateHtml = $navTemplate.prop('outerHTML');
        var $navUl = $navTemplate.closest('ul');

        $navUl.empty();

        for (var navKey in navItems) {
            var $thisNavItem = $(navTemplateHtml);
            $thisNavItem.find('a').attr('href', navItems[navKey]);
            $thisNavItem.find('a').text(navKey);
            if (activeNavItem === navItems[navKey]) {
                $thisNavItem.addClass('active');
            }
            $navUl.append($thisNavItem);
        }
    });
}