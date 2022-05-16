const transmissionValues = {
    All: '0',
    Manual: '1',
    Automatic: '2'
};

const queryStringTemplateValue = "_QUERYSTRING_";

const templatedCraigslistUrls = [
    'https://yakima.craigslist.org/search/sss?query=_QUERYSTRING_&sort=date&bundleDuplicates=1&searchNearby=2&nearbyArea=2&nearbyArea=461&nearbyArea=325&nearbyArea=217&nearbyArea=466&nearbyArea=655&nearbyArea=9&nearbyArea=324&nearbyArea=232&nearbyArea=95&nearbyArea=350&nearbyArea=368&nearbyArea=321&nearbyArea=233&nearbyArea=94&nearbyArea=322&nearbyArea=459'
];

const templatedMarketplaceUrls = [
    'https://www.facebook.com/marketplace/portland/search/?deliveryMethod=local_pick_up&sortBy=BEST_MATCH&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
    'https://www.facebook.com/marketplace/sanfrancisco/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=BEST_MATCH',
    'https://www.facebook.com/marketplace/boise/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=BEST_MATCH',
    'https://www.facebook.com/marketplace/108061882547758/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=BEST_MATCH',
    'https://www.facebook.com/marketplace/dallas/search/?deliveryMethod=local_pick_up&sortBy=BEST_MATCH&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
    'https://www.facebook.com/marketplace/atlanta/search/?deliveryMethod=local_pick_up&sortBy=BEST_MATCH&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
    'https://www.facebook.com/marketplace/108013345886344/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=BEST_MATCH',
    'https://www.facebook.com/marketplace/dc/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=BEST_MATCH'
];