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
    var $ddlSearchArea = $divSearchPage.find('#ddlSearchArea');
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
        $ddlSearchArea.val(searchArea.WestUS);
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

        var targetUrls;
        switch (searchData.searchArea) {
            case searchArea.WestUS:
                targetUrls = templatedMarketplaceUrls.westUS;
                break;
            case searchArea.CentralUS:
                targetUrls = templatedMarketplaceUrls.centralUS;
                break;
            case searchArea.EastUS:
                targetUrls = templatedMarketplaceUrls.eastUS;
                break;
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

        var targetUrls;
        switch (searchData.searchArea) {
            case searchArea.WestUS:
                targetUrls = templatedCraigslistUrls.westUS;
                break;
            case searchArea.CentralUS:
                targetUrls = templatedCraigslistUrls.centralUS;
                break;
            case searchArea.EastUS:
                targetUrls = templatedCraigslistUrls.eastUS;
                break;
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

        return url;
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
            searchArea: $ddlSearchArea.val()
        }
    }
});