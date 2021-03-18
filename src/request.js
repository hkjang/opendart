const axios = require('axios')

const axiosInstance = axios.create({
  baseURL: 'https://opendart.fss.or.kr/api/'
})

function Request () {}

/**
 * 'get' request
 *
 * @param {string} accessToken - Tistory Access Token
 * @param {string} url - Request url
 * @param {Object} options - Params
 */
Request.get = function (accessToken, url, options) {
  return axiosInstance.get(url, {
    params: Object.assign({
      crtfc_key: accessToken
    }, options)
  })
}

module.exports = Request
