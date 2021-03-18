const Request = require('./src/request')

const opendart = {
  disclosure: {
    /** 공시검색 API */
    list (accessToken, options = {}) {
      return Request.get(accessToken, '/list.json', options)
    },
    /** 기업개황 API */
    company (accessToken, options = {}) {
      return Request.get(accessToken, '/company.json', options)
    },
    /** 고유번호 API */
    corpCode (accessToken, options = {}) {
      return Request.get(accessToken, '/corpCode.xml', options)
    },
    /** 고유번호 API */
    document (accessToken, options = {}) {
      return Request.get(accessToken, '/document.xml', options)
    }
  },
  report: {
    /** 증자(감자) 현황 API */
    irdsSttus(accessToken, options = {}) {
      return Request.get(accessToken, '/irdsSttus.json', options)
    },
    /** 배당에 관한 사항 API */
    alotMatter(accessToken, options = {}) {
      return Request.get(accessToken, '/alotMatter.json', options)
    },
    /** 자기주식 취득 및 처분 현황 API */
    tesstkAcqsDspsSttus(accessToken, options = {}) {
      return Request.get(accessToken, '/tesstkAcqsDspsSttus.json', options)
    },
    /** 최대주주 현황 API */
    hyslrSttus(accessToken, options = {}) {
      return Request.get(accessToken, '/hyslrSttus.json', options)
    },
    /** 최대주주 변동 현황 API */
    hyslrChgSttus(accessToken, options = {}) {
      return Request.get(accessToken, '/hyslrChgSttus.json', options)
    },
    /** 소액주주 현황 API */
    mrhlSttus(accessToken, options = {}) {
      return Request.get(accessToken, '/mrhlSttus.json', options)
    },
    /** 임원 현황 API */
    exctvSttus(accessToken, options = {}) {
      return Request.get(accessToken, '/exctvSttus.json', options)
    },
    /** 직원 현황 API */
    empSttus(accessToken, options = {}) {
      return Request.get(accessToken, '/empSttus.json', options)
    },
    /** 이사,감사의 개인별 보수 현황 API */
    hmvAuditIndvdlBySttus(accessToken, options = {}) {
      return Request.get(accessToken, '/hmvAuditIndvdlBySttus.json', options)
    },
    /** 이사, 감사 전체의 보수 현황 API */
    hmvAuditAllSttus(accessToken, options = {}) {
      return Request.get(accessToken, '/hmvAuditAllSttus.json', options)
    },
    /** 개인별 보수금액(5억이상 상위5인) API */
    indvdlByPay(accessToken, options = {}) {
      return Request.get(accessToken, '/indvdlByPay.json', options)
    },
    /** 타법인 출자현황 API */
    otrCprInvstmntSttus(accessToken, options = {}) {
      return Request.get(accessToken, '/otrCprInvstmntSttus.json', options)
    }
  },
  statement: {
    /** 단일회사 주요계정 API */
    fnlttSinglAcnt(accessToken, options = {}) {
      return Request.get(accessToken, '/fnlttSinglAcnt.json', options)
    },
    /** 다중회사 주요계정 API */
    fnlttMultiAcnt(accessToken, options = {}) {
      return Request.get(accessToken, '/fnlttMultiAcnt.json', options)
    },
    /** 단일회사 전체 재무제표 API */
    fnlttSinglAcntAll(accessToken, options = {}) {
      return Request.get(accessToken, '/fnlttSinglAcntAll.json', options)
    },
    /** XBRL택사노미재무제표양식 API */
    xbrlTaxonomy(accessToken, options = {}) {
      return Request.get(accessToken, '/xbrlTaxonomy.json', options)
    },
    /** 재무제표 원본파일(XBRL) API */
    fnlttXbrl(accessToken, options = {}) {
      return Request.get(accessToken, '/fnlttXbrl.xml', options)
    }
  },
  equity: {
    /** 대량보유 상황보고 API */
    majorstock(accessToken, options = {}) {
      return Request.get(accessToken, '/majorstock.json', options)
    },
    /** 임원ㆍ주요주주 소유보고 API */
    elestock(accessToken, options = {}) {
      return Request.get(accessToken, '/elestock.json', options)
    }
  }
}

module.exports = opendart
