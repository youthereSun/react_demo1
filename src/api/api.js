import Request from './index'

export function getSwiperArr(callback) {
    return  Request.post({
        url: 'https://mock.yonyoucloud.com/mock/6131/getSwiperArr',
        callback
    });
}

export function getAllConfiguration ( callback) {
    return Request.get({
        url: '/handler/biHandler/echartSearch',
        callback
    });
}
