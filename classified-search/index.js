$('document').ready(function() {
    var $divSearchPage = $("#divSearchPage");

    var $txtSearchTerms = $divSearchPage.find('#txtSearchTerms');
    var $txtMinYear = $divSearchPage.find('#txtMinYear');
    var $txtMaxYear = $divSearchPage.find('#txtMaxYear');
    var $txtMinOdometer = $divSearchPage.find('#txtMinOdometer');
    var $txtMaxOdometer = $divSearchPage.find('#txtMaxOdometer');
    var $txtMinPrice = $divSearchPage.find('#txtMinPrice');
    var $txtMaxPrice = $divSearchPage.find('#txtMaxPrice');
    var $ddlTransmission = $divSearchPage.find('#ddlTransmission');
    var $chkByOwner = $divSearchPage.find('#chkByOwner');
    var $ddlMarketplaceSearchArea = $divSearchPage.find('#ddlMarketplaceSearchArea');
    var $ddlCraiglistSearchArea = $divSearchPage.find('#ddlCraigslistSearchArea');
    var $chkExcludeMotorcycles = $divSearchPage.find('#chkExcludeMotorcycles');
    var $ddlCraigslistSortOrder = $divSearchPage.find('#ddlCraigslistSortOrder');
    var $ddlMarketplaceSortOrder = $divSearchPage.find('#ddlMarketplaceSortOrder');

    var $btnClear = $divSearchPage.find('#btnClear');
    var $btnSearchMarketplace = $divSearchPage.find('#btnSearchMarketplace');
    var $btnSearchCraigslist = $divSearchPage.find('#btnSearchCraigslist');

    // bind clear
    $btnClear.on('click', function() {
        $txtSearchTerms.val('');
        $txtMinYear.val('');
        $txtMaxYear.val('');
        $txtMinOdometer.val('');
        $txtMaxOdometer.val('');
        $txtMinPrice.val('');
        $txtMaxPrice.val('');
        $ddlTransmission.val(transmissionValues.All);
        $chkByOwner.prop('checked', true);
        $ddlMarketplaceSearchArea.val(marketplaceSearchArea.AllUS);
        $ddlSearchArea.val(craigslistSearchArea.AllUS);
        $chkExcludeMotorcycles.prop('checked', true);
        $ddlCraigslistSortOrder.val(craigslistSort.rel);
        $ddlMarketplaceSortOrder.val(marketplaceSort.bestMatch);
    });

    // bind marketplace search
    $btnSearchMarketplace.on('click', function() {
        var searchData = getSearchData();

        if (!searchData.searchTerm) {
            alert("Please enter a search term");
            return;
        }

        var targetUrls = templatedMarketplaceUrls[searchData.marketplaceSearchArea];
        
        if (!targetUrls || !targetUrls.length)
        {
            alert("No marketplace urls found to search");
        }

        for (var templateUrl of targetUrls) {
            var url = buildMarketplaceUrl(templateUrl, searchData);
            window.open(url);
        }
    });

    // bind craigslist search
    $btnSearchCraigslist.on('click', function() {
        var searchData = getSearchData();

        if (!searchData.searchTerm) {
            alert("Please enter a search term");
            return;
        }

        var targetUrls = templatedCraigslistUrls[searchData.craigslistSearchArea];

        if (!targetUrls || !targetUrls.length)
        {
            alert("No craigslist urls found to search");
        }

        for (var templateUrl of targetUrls) {
            var url = buildCraigslistUrl(templateUrl, searchData);
            window.open(url);
        }
    });

    function buildMarketplaceUrl(templateUrl, searchData) {
        var url = templateUrl.replace(
            queryStringTemplateValue,
            encodeURIComponent(searchData.searchTerm)
        ).replace(
            sortOrderTemplateValue,
            searchData.marketplace_sortOrder
        );

        if (searchData.minYear) {
            url += `&minYear=${encodeURIComponent(searchData.minYear)}`
        }

        if (searchData.maxYear) {
            url += `&maxYear=${encodeURIComponent(searchData.maxYear)}`
        }

        if (searchData.minOdometer) {
            url += `&minMileage=${encodeURIComponent(searchData.minOdometer)}`
        }

        if (searchData.maxOdometer) {
            url += `&maxMileage=${encodeURIComponent(searchData.maxOdometer)}`
        }

        if (searchData.minPrice) {
            url += `&minPrice=${encodeURIComponent(searchData.minPrice)}`
        }

        if (searchData.maxPrice) {
            url += `&maxPrice=${encodeURIComponent(searchData.maxPrice)}`
        }

        if (searchData.transmission != transmissionValues.All) {
            switch (searchData.transmission) {
                case transmissionValues.Manual:
                    url += '&transmissionType=manual'
                    break;
                case transmissionValues.Automatic:
                    url += '&transmissionType=automatic'
                    break;
            }
        }

        return url;
    }

    function buildCraigslistUrl(templateUrl, searchData) {
        var url = templateUrl.replace(
            queryStringTemplateValue,
            encodeURIComponent(searchData.searchTerm)
        ).replace(
            sortOrderTemplateValue,
            searchData.craigslist_sortOrder
        );

        if (searchData.minYear) {
            url += `&min_auto_year=${encodeURIComponent(searchData.minYear)}`
        }

        if (searchData.maxYear) {
            url += `&max_auto_year=${encodeURIComponent(searchData.maxYear)}`
        }

        if (searchData.minOdometer) {
            url += `&min_auto_miles=${encodeURIComponent(searchData.minOdometer)}`
        }

        if (searchData.maxOdometer) {
            url += `&max_auto_miles=${encodeURIComponent(searchData.maxOdometer)}`
        }

        if (searchData.minPrice) {
            url += `&min_price=${encodeURIComponent(searchData.minPrice)}`
        }

        if (searchData.maxPrice) {
            url += `&max_price=${encodeURIComponent(searchData.maxPrice)}`
        }

        if (searchData.craigslist_byOwner) {
            url += '&purveyor=owner';
        }

        if (searchData.craigslist_excludeMotorcycles) {
            url += '&excats=69';
        }

        switch (searchData.transmission) {
            case transmissionValues.All:
                url += '&auto_transmission=1&auto_transmission=2&auto_transmission=3'
                break;
            case transmissionValues.Manual:
                url += '&auto_transmission=1'
                break;
            case transmissionValues.Automatic:
                url += '&auto_transmission=2'
                break;
        }

        return url + "#search=1~gallery~0~0";
    }

    function getSearchData() {
        return {
            searchTerm: $txtSearchTerms.val(),
            minYear: $txtMinYear.val(),
            maxYear: $txtMaxYear.val(),
            minOdometer: $txtMinOdometer.val(),
            maxOdometer: $txtMaxOdometer.val(),
            minPrice: $txtMinPrice.val(),
            maxPrice: $txtMaxPrice.val(),
            transmission: $ddlTransmission.val(),
            craigslist_byOwner: $chkByOwner.prop('checked'),
            craigslist_excludeMotorcycles: $chkExcludeMotorcycles.prop('checked'),
            craigslist_sortOrder: $ddlCraigslistSortOrder.val(),
            marketplace_sortOrder: $ddlMarketplaceSortOrder.val(),
            marketplaceSearchArea: $ddlMarketplaceSearchArea.val(),
            craigslistSearchArea: $ddlCraiglistSearchArea.val()
        }
    }
});