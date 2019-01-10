import http from './http'

/**
 * 登录
 */
export const getAllTopic = (): Promise<any> =>
    http({
        url: `/topics`,
        method: 'get'
    })
