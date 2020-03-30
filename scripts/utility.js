var navItems = {
    About: '/index.html'
    , Projects: '/projects.html'
    , Contact: '/contact.html'
}

$.fn.loadNavbar = function (activeNavItem = navItems.About) {
    var $navContainer = $(this);
    $navContainer.empty();
    $navContainer.load('/navbar-template.html');

    var $navTemplate = $navContainer.find('[nav-template]');
    var $navUl = $navTemplate.closest('ul');

    $navUl.empty();

    for (navKey in navItems) {
        var $thisNavItem = $navTemplate.clone();
        $thisNavItem.find('a').attr('href', navItems[navKey]);
        if (activeNavItem === navItems[navKey]) {
            $thisNavItem.addClass('active');
        }
        $navUl.append($thisNavItem);
    }
}