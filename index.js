const Request = require('./src/request')

/**
 * 주요사항보고서 주요정보 API 공통 필수 파라미터
 * @typedef {Object} keyIssuesReportOptions
 * @property {string} corp_code - 고유번호
 * @property {string} bgn_de - 검색시작 접수일자(YYYYMMDD)
 * @property {string} end_de - 검색종료 접수일자(YYYYMMDD)
 */
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
  },
  /** 주요사항보고서 주요정보 */
  keyIssuesReport: {
    /** 
     * 부도발생 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    dfOcr(accessToken, options) {
      return Request.get(accessToken, '/dfOcr.json', options)
    },
    /** 
     * 영업정지 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    bsnSp(accessToken, options) {
      return Request.get(accessToken, '/bsnSp.json', options)
    },
    /**
     * 회생절차 개시신청 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    ctrcvsBgrq(accessToken, options) {
      return Request.get(accessToken, '/ctrcvsBgrq.json', options)
    },
    /**
     * 해산사유 발생 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    dsRsOcr(accessToken, options) {
      return Request.get(accessToken, '/dsRsOcr.json', options)
    },
    /**
     * 유상증자 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    piicDecsn(accessToken, options) {
      return Request.get(accessToken, '/piicDecsn.json', options)
    },
    /**
     * 무상증자 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    fricDecsn(accessToken, options) {
      return Request.get(accessToken, '/fricDecsn.json', options)
    },
    /**
     * 감자 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    crDecsn(accessToken, options) {
      return Request.get(accessToken, '/crDecsn.json', options)
    },
    /**
     * 채권은행 등의 관리절차 개시 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    bnkMngtPcbg(accessToken, options) {
      return Request.get(accessToken, '/bnkMngtPcbg.json', options)
    },
    /**
     * 소송 등의 제기 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    lwstLg(accessToken, options) {
      return Request.get(accessToken, '/lwstLg.json', options)
    },
    /**
     * 해외 증권시장 주권등 상장 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    ovLstDecsn(accessToken, options) {
      return Request.get(accessToken, '/ovLstDecsn.json', options)
    },
    /**
     * 해외 증권시장 주권등 상장폐지 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    ovDlstDecsn(accessToken, options) {
      return Request.get(accessToken, '/ovDlstDecsn.json', options)
    },
    /**
     * 해외 증권시장 주권등 상장 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    ovLst(accessToken, options) {
      return Request.get(accessToken, '/ovLst.json', options)
    },
    /**
     * 해외 증권시장 주권등 상장폐지 API
     * @param {string} accessToken 
     * @param {keyIssuesReportOptions} options 
     * @returns 
     */
    ovDlst(accessToken, options) {
      return Request.get(accessToken, '/ovDlst.json', options)
    },
    /**
     * 전환사채권 발행결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    cvbdIsDecsn(accessToken, options) {
      return Request.get(accessToken, '/cvbdIsDecsn.json', options)
    },
    /**
     * 신주인수권부사채권 발행결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    bdwtIsDecsn(accessToken, options) {
      return Request.get(accessToken, '/bdwtIsDecsn.json', options)
    },
    /**
     * 신주인수권부사채권 발행결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    bdwtIsDecsn(accessToken, options) {
      return Request.get(accessToken, '/bdwtIsDecsn.json', options)
    },
    /**
     * 교환사채권 발행결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    exbdIsDecsn(accessToken, options) {
      return Request.get(accessToken, '/exbdIsDecsn.json', options)
    },
    /**
     * 채권은행 등의 관리절차 중단 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    bnkMngtPcsp(accessToken, options) {
      return Request.get(accessToken, '/bnkMngtPcsp.json', options)
    },
    /**
     * 상각형 조건부자본증권 발행결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    wdCocobdIsDecsn(accessToken, options) {
      return Request.get(accessToken, '/wdCocobdIsDecsn.json', options)
    },
    /**
     * 자산양수도(기타), 풋백옵션 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    astInhtrfEtcPtbkOpt(accessToken, options) {
      return Request.get(accessToken, '/astInhtrfEtcPtbkOpt.json', options)
    },
    /**
     * 타법인 주식 및 출자증권 양도결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    otcprStkInvscrTrfDecsn(accessToken, options) {
      return Request.get(accessToken, '/otcprStkInvscrTrfDecsn.json', options)
    },
    /**
     * 유형자산 양도 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    tgastTrfDecsn(accessToken, options) {
      return Request.get(accessToken, '/tgastTrfDecsn.json', options)
    },
    /**
     * 유형자산 양수 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    tgastInhDecsn(accessToken, options) {
      return Request.get(accessToken, '/tgastInhDecsn.json', options)
    },
    /**
     * 타법인 주식 및 출자증권 양수결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    otcprStkInvscrInhDecsn(accessToken, options) {
      return Request.get(accessToken, '/otcprStkInvscrInhDecsn.json', options)
    },
    /**
     * 영업양도 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    bsnTrfDecsn(accessToken, options) {
      return Request.get(accessToken, '/bsnTrfDecsn.json', options)
    },
    /**
     * 영업양수 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    bsnInhDecsn(accessToken, options) {
      return Request.get(accessToken, '/bsnInhDecsn.json', options)
    },
    /**
     * 자기주식취득 신탁계약 해지 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    tsstkAqTrctrCcDecsn(accessToken, options) {
      return Request.get(accessToken, '/tsstkAqTrctrCcDecsn.json', options)
    },
    /**
     * 자기주식취득 신탁계약 체결 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    tsstkAqTrctrCnsDecsn(accessToken, options) {
      return Request.get(accessToken, '/tsstkAqTrctrCnsDecsn.json', options)
    },
    /**
     * 자기주식 처분 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    tsstkDpDecsn(accessToken, options) {
      return Request.get(accessToken, '/tsstkDpDecsn.json', options)
    },
    /**
     * 자기주식 취득 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    tsstkAqDecsn(accessToken, options) {
      return Request.get(accessToken, '/tsstkAqDecsn.json', options)
    },
    /**
     * 주식교환·이전 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    stkExtrDecsn(accessToken, options) {
      return Request.get(accessToken, '/stkExtrDecsn.json', options)
    },
    /**
     * 회사분할합병 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    cmpDvmgDecsn(accessToken, options) {
      return Request.get(accessToken, '/cmpDvmgDecsn.json', options)
    },
    /**
     * 회사분할 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    cmpDvDecsn(accessToken, options) {
      return Request.get(accessToken, '/cmpDvDecsn.json', options)
    },
    /**
     * 회사합병 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    cmpMgDecsn(accessToken, options) {
      return Request.get(accessToken, '/cmpMgDecsn.json', options)
    },
    /**
     * 주권 관련 사채권 양수 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    stkrtbdInhDecsn(accessToken, options) {
      return Request.get(accessToken, '/stkrtbdInhDecsn.json', options)
    },
    /**
     * 주권 관련 사채권 양도 결정 API
     * @param {string} accessToken
     * @param {keyIssuesReportOptions} options
     */
    stkrtbdTrfDecsn(accessToken, options) {
      return Request.get(accessToken, '/stkrtbdTrfDecsn.json', options)
    },
  }
}

module.exports = opendart
