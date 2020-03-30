//foremost append all apprioriate scripts to to of page
var jq = document.createElement('script');
jq.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js');
var popper = document.createElement('script');
popper.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js');
var bs = document.createElement('script');
bs.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js');
var bscss = document.createElement('link');
bscss.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');

document.appendChild(jq);
document.appendChild(popper);
document.appendChild(bs);
document.appendChild(bscss);

var navItems = {
    About: '/index.html'
    , Projects: '/projects.html'
    , Contact: '/contact.html'
}

$.fn.loadNavbar = function (activeNavItem = navItems.About) {
    var $navContainer = $(this);
    $navContainer.load('/navbar-template.html', function () {
        var $navTemplate = $navContainer.find('[nav-template]');
        var navTemplateHtml = $navTemplate.prop('outerHTML');
        var $navUl = $navTemplate.closest('ul');

        $navUl.empty();

        for (navKey in navItems) {
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