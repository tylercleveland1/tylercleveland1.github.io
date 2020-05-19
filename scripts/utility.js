var navItems = {
    About: {
        title: 'About'
        , htmllink: '/'
    }
    , Projects: {
        title: 'Projects'
        , htmllink: '/projects.html'
    }
    , Resume: {
        title: 'Resume'
        , htmllink: '/static/TylerClevelandResume.pdf'
        , target: "_blank"
    }
    , Contact: {
        title: 'Contact'
        , htmllink: '/contact.html'
    }
}

var projects = [
    {
        title: 'Regression Using Fourier Series (Part 1)'
        , ipynblink: '/projects/fourier-regressor/frpart1.ipynb'
        , gistlink: 'https://gist.github.com/tylercleveland1/b78887d8ed035f6133f16971e1b17451.json?callback=?'
    }
    // , {
    //     title: 'Applying Artificial Neural Networks for Human Activity Recognition'
    //     , htmllink: '/projects/ann-har.html'
    // }
]



$.fn.loadNavbar = function (activeNavItem = navItems.About) {
    var $navContainer = $(this);
    $navContainer.load('/navbar-template.html', function () {
        var $navTemplate = $navContainer.find('[nav-template]');
        var navTemplateHtml = $navTemplate.prop('outerHTML');
        var $navUl = $navTemplate.closest('ul');

        $navUl.empty();

        for (var navKey in navItems) {
            var $thisNavItem = $(navTemplateHtml);
            $thisNavItem.find('a').attr('href', navItems[navKey].htmllink);
            $thisNavItem.find('a').text(navItems[navKey].title);
            if (navItems[navKey].target) {
                $thisNavItem.find('a').attr('target', navItems[navKey].target);
            }
            if (activeNavItem === navItems[navKey]) {
                $thisNavItem.addClass('active');
            }
            $navUl.append($thisNavItem);
        }
    });
}