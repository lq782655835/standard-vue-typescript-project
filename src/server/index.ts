import http from './http'

/**
 * 登录
 */
export const getAllTopic = (data?: any): Promise<any> =>
    http({
        url: `/topics`,
        method: 'get',
        data
    })
