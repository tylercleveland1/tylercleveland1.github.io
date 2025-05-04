const transmissionValues = {
    All: '0',
    Manual: '1',
    Automatic: '2'
};

const marketplaceSearchArea = {
    allUS: '0',
    westUS: '1',
    centralUS: '2',
    eastUS: '3',
    allEurope: '4',
    uK: '5',
};

const craigslistSearchArea = {
    allUS: '0',
    westUS: '1',
    centralUS: '2',
    eastUS: '3'
};

const craigslistSort = {
    date: 'date',
    rel: 'rel',
    priceasc: 'priceasc',
    pricedsc: 'pricedsc'
};

const marketplaceSort = {
    bestMatch: 'best_match',
    distanceAscent: 'distance_ascend',
    creationTimeDescend: 'creation_time_descend',
    priceAscend: 'price_ascend',
    priceDescend: 'price_descend'
};

const queryStringTemplateValue = "_QUERYSTRING_";
const sortOrderTemplateValue = "_SORTORDER_";

const templatedCraigslistUrls = {
    [craigslistSearchArea.westUS]: [
        'https://logan.craigslist.org/search/howell-ut/sss?lat=41.8386&lon=-112.3943&purveyor=owner&query=_QUERYSTRING_&search_distance=860&sort=_SORTORDER_',
    ],
    [craigslistSearchArea.centralUS]: [
        'https://grandisland.craigslist.org/search/guide-rock-ne/sss?lat=40.1312&lon=-98.2839&purveyor=owner&query=_QUERYSTRING_&search_distance=860&sort=_SORTORDER_'
    ],
    [craigslistSearchArea.eastUS]: [
        'https://charlottesville.craigslist.org/search/louisa-va/sss?lat=38.0079&lon=-78.056&purveyor=owner&query=_QUERYSTRING_&search_distance=860&sort=_SORTORDER_'
    ],
    [craigslistSearchArea.allUS]: null
};

const templatedMarketplaceUrls = {
    [marketplaceSearchArea.westUS]: [
        'https://www.facebook.com/marketplace/portland/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        'https://www.facebook.com/marketplace/sanfrancisco/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
        'https://www.facebook.com/marketplace/boise/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
        'https://www.facebook.com/marketplace/108061882547758/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
    ],
    [marketplaceSearchArea.centralUS]: [
        // colorado
        'https://www.facebook.com/marketplace/denver/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        // texas
        'https://www.facebook.com/marketplace/dallas/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        // bismark
        'https://www.facebook.com/marketplace/105540246145383/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        // missouri
        'https://www.facebook.com/marketplace/108013345886344/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
    ],
    [marketplaceSearchArea.eastUS]: [
        'https://www.facebook.com/marketplace/atlanta/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        'https://www.facebook.com/marketplace/dc/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_'
    ],
    [marketplaceSearchArea.uK]: [
        'https://www.facebook.com/marketplace/birmingham/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
    ],
    [marketplaceSearchArea.allEurope]: null
};

templatedMarketplaceUrls[marketplaceSearchArea.allUS] = templatedMarketplaceUrls[marketplaceSearchArea.westUS]
    .concat(templatedMarketplaceUrls[marketplaceSearchArea.centralUS])
    .concat(templatedMarketplaceUrls[marketplaceSearchArea.eastUS]);
templatedMarketplaceUrls[marketplaceSearchArea.allEurope] = templatedMarketplaceUrls[marketplaceSearchArea.uK];

templatedCraigslistUrls[craigslistSearchArea.allUS] = templatedCraigslistUrls[craigslistSearchArea.westUS]
    .concat(templatedCraigslistUrls[craigslistSearchArea.centralUS])
    .concat(templatedCraigslistUrls[craigslistSearchArea.eastUS]);