const transmissionValues = {
    All: '0',
    Manual: '1',
    Automatic: '2'
};

const searchArea = {
    All: '0',
    WestUS: '1',
    CentralUS: '2',
    EastUS: '3'
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
    westUS: [
        // washington
        'https://yakima.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=2&nearbyArea=461&nearbyArea=325&nearbyArea=217&nearbyArea=466&nearbyArea=655&nearbyArea=9&nearbyArea=324&nearbyArea=232&nearbyArea=95&nearbyArea=350&nearbyArea=368&nearbyArea=321&nearbyArea=233&nearbyArea=94&nearbyArea=322&nearbyArea=459',
        'https://susanville.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=216&nearbyArea=675&nearbyArea=708&nearbyArea=188&nearbyArea=189&nearbyArea=187&nearbyArea=652&nearbyArea=92&nearbyArea=454&nearbyArea=373&nearbyArea=456&nearbyArea=12&nearbyArea=97&nearbyArea=1&nearbyArea=96',
        // california
        'https://ventura.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=285&nearbyArea=43&nearbyArea=102&nearbyArea=709&nearbyArea=346&nearbyArea=191&nearbyArea=63&nearbyArea=26&nearbyArea=710&nearbyArea=62&nearbyArea=7&nearbyArea=104&nearbyArea=103&nearbyArea=209&nearbyArea=8&nearbyArea=455',
        // utah
        'https://provo.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=448&nearbyArea=351&nearbyArea=56&nearbyArea=352',
        // montana
        'https://butte.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=654&nearbyArea=662&nearbyArea=656&nearbyArea=52&nearbyArea=659&nearbyArea=660&nearbyArea=469&nearbyArea=658&nearbyArea=424&nearbyArea=657',
        // arizona
        'https://showlow.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=565&nearbyArea=244&nearbyArea=568&nearbyArea=419&nearbyArea=370&nearbyArea=18&nearbyArea=218&nearbyArea=50&nearbyArea=57&nearbyArea=468&nearbyArea=334',
    ],
    centralUS: [
        // colorado        
        'https://denver.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=320&nearbyArea=197&nearbyArea=288&nearbyArea=287&nearbyArea=319&nearbyArea=210&nearbyArea=315&nearbyArea=713',
        // new mexico
        'https://roswell.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=653&nearbyArea=269&nearbyArea=132&nearbyArea=267&nearbyArea=268&nearbyArea=364&nearbyArea=646&nearbyArea=648',
        // ND
        'https://bismarck.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=192&nearbyArea=680&nearbyArea=196&nearbyArea=195&nearbyArea=681&nearbyArea=667&nearbyArea=682&nearbyArea=435&nearbyArea=679',
        // texas
        'https://austin.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=365&nearbyArea=649&nearbyArea=21&nearbyArea=647&nearbyArea=327&nearbyArea=270&nearbyArea=308&nearbyArea=449&nearbyArea=53&nearbyArea=326&nearbyArea=645&nearbyArea=271&nearbyArea=564&nearbyArea=23&nearbyArea=265&nearbyArea=264&nearbyArea=470&nearbyArea=263&nearbyArea=266',
        // nebraska
        'https://grandisland.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=669&nearbyArea=668&nearbyArea=688&nearbyArea=687&nearbyArea=341&nearbyArea=282&nearbyArea=55&nearbyArea=690&nearbyArea=428&nearbyArea=693&nearbyArea=99&nearbyArea=692&nearbyArea=445&nearbyArea=280&nearbyArea=98&nearbyArea=347&nearbyArea=691&nearbyArea=689',
        // wisconsin
        'https://eauclaire.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=663&nearbyArea=665&nearbyArea=664&nearbyArea=369&nearbyArea=421&nearbyArea=19&nearbyArea=255&nearbyArea=316&nearbyArea=631&nearbyArea=567&nearbyArea=363&nearbyArea=340&nearbyArea=339&nearbyArea=458&nearbyArea=362&nearbyArea=307&nearbyArea=165&nearbyArea=243&nearbyArea=553&nearbyArea=241&nearbyArea=262&nearbyArea=571&nearbyArea=47&nearbyArea=552',
        // michigan
        'https://muskegon.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=630&nearbyArea=572&nearbyArea=309&nearbyArea=129&nearbyArea=261&nearbyArea=434&nearbyArea=628&nearbyArea=212&nearbyArea=260&nearbyArea=426&nearbyArea=259&nearbyArea=627&nearbyArea=172&nearbyArea=629&nearbyArea=22&nearbyArea=555',
        // missouri
        'https://columbiamo.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=694&nearbyArea=30&nearbyArea=696&nearbyArea=423&nearbyArea=695&nearbyArea=221&nearbyArea=29&nearbyArea=566',
        // arkansas
        'https://fayar.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=650&nearbyArea=433&nearbyArea=54&nearbyArea=422&nearbyArea=70&nearbyArea=358&nearbyArea=359&nearbyArea=100&nearbyArea=425'
    ],
    eastUS: [
        // illinois
        'https://chambana.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=697&nearbyArea=223&nearbyArea=224&nearbyArea=698&nearbyArea=225&nearbyArea=344&nearbyArea=11&nearbyArea=569&nearbyArea=699&nearbyArea=345&nearbyArea=228&nearbyArea=360&nearbyArea=348&nearbyArea=672&nearbyArea=227&nearbyArea=45&nearbyArea=229&nearbyArea=226&nearbyArea=361&nearbyArea=671',
        // mississippi
        'https://jackson.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=206&nearbyArea=563&nearbyArea=375&nearbyArea=644&nearbyArea=284&nearbyArea=642&nearbyArea=283&nearbyArea=199&nearbyArea=641&nearbyArea=374&nearbyArea=643&nearbyArea=31&nearbyArea=230',
        // nashville
        'https://nashville.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=46&nearbyArea=377&nearbyArea=673&nearbyArea=558&nearbyArea=465&nearbyArea=58&nearbyArea=342&nearbyArea=133&nearbyArea=670&nearbyArea=674&nearbyArea=220&nearbyArea=202&nearbyArea=323',
        // ohio
        'https://zanesville.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=204&nearbyArea=437&nearbyArea=35&nearbyArea=131&nearbyArea=573&nearbyArea=436&nearbyArea=42&nearbyArea=27&nearbyArea=701&nearbyArea=251&nearbyArea=700&nearbyArea=703&nearbyArea=438&nearbyArea=252&nearbyArea=442&nearbyArea=441&nearbyArea=443&nearbyArea=439&nearbyArea=440',
        // virginia
        'https://lynchburg.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=194&nearbyArea=712&nearbyArea=632&nearbyArea=291&nearbyArea=289&nearbyArea=447&nearbyArea=444&nearbyArea=711&nearbyArea=290&nearbyArea=367&nearbyArea=457&nearbyArea=60&nearbyArea=48',
        // georgia
        'https://columbusga.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=560&nearbyArea=231&nearbyArea=371&nearbyArea=127&nearbyArea=559&nearbyArea=636&nearbyArea=200&nearbyArea=207&nearbyArea=372&nearbyArea=14&nearbyArea=203&nearbyArea=258&nearbyArea=640&nearbyArea=467&nearbyArea=257&nearbyArea=562&nearbyArea=637&nearbyArea=256&nearbyArea=186&nearbyArea=635&nearbyArea=427&nearbyArea=205&nearbyArea=570',
        // florida
        'https://orlando.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=638&nearbyArea=80&nearbyArea=219&nearbyArea=557&nearbyArea=333&nearbyArea=37&nearbyArea=238&nearbyArea=376&nearbyArea=237&nearbyArea=331&nearbyArea=125&nearbyArea=639&nearbyArea=332&nearbyArea=20&nearbyArea=330',
        // pennsylvania
        'https://pennstate.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=275&nearbyArea=706&nearbyArea=33&nearbyArea=355&nearbyArea=463&nearbyArea=705&nearbyArea=166&nearbyArea=357&nearbyArea=276&nearbyArea=279&nearbyArea=278&nearbyArea=356&nearbyArea=167&nearbyArea=17',
        // new york
        'https://rochester.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=452&nearbyArea=40&nearbyArea=685&nearbyArea=704&nearbyArea=337&nearbyArea=453&nearbyArea=130&nearbyArea=201&nearbyArea=683&nearbyArea=248&nearbyArea=247&nearbyArea=684',
        // conneticut
        'https://worcester.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=338&nearbyArea=93&nearbyArea=686&nearbyArea=59&nearbyArea=451&nearbyArea=249&nearbyArea=173&nearbyArea=3&nearbyArea=354&nearbyArea=44&nearbyArea=168&nearbyArea=250&nearbyArea=198&nearbyArea=281&nearbyArea=169&nearbyArea=4&nearbyArea=38&nearbyArea=378&nearbyArea=239',
        // nc
        'https://fayetteville.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=171&nearbyArea=446&nearbyArea=253&nearbyArea=462&nearbyArea=272&nearbyArea=41&nearbyArea=61&nearbyArea=101&nearbyArea=36&nearbyArea=464&nearbyArea=353&nearbyArea=128&nearbyArea=335&nearbyArea=254&nearbyArea=274&nearbyArea=634&nearbyArea=336',
        // delaware
        'https://delaware.craigslist.org/search/sss?query=_QUERYSTRING_&sort=_SORTORDER_&bundleDuplicates=1&searchNearby=2&nearbyArea=329&nearbyArea=633&nearbyArea=10&nearbyArea=34&nearbyArea=460&nearbyArea=556&nearbyArea=328&nearbyArea=349&nearbyArea=170&nearbyArea=286&nearbyArea=561'
    ]
};

const templatedMarketplaceUrls = {
    westUS: [
        'https://www.facebook.com/marketplace/portland/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        'https://www.facebook.com/marketplace/sanfrancisco/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
        'https://www.facebook.com/marketplace/boise/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
        'https://www.facebook.com/marketplace/108061882547758/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
    ],
    centralUS: [
        // colorado
        'https://www.facebook.com/marketplace/denver/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        // texas
        'https://www.facebook.com/marketplace/dallas/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        // bismark
        'https://www.facebook.com/marketplace/105540246145383/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        // missouri
        'https://www.facebook.com/marketplace/108013345886344/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
    ],
    eastUS: [
        'https://www.facebook.com/marketplace/atlanta/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        'https://www.facebook.com/marketplace/dc/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_'
    ]
};