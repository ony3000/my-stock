# class diagram

## Notes
* Some of the defined object relationships may be missing.
* The data types used in the definitions below may differ from the actual data types of the DBMS.

### Key implementation goals
```mermaid
classDiagram
  class BaseClass {
    integer id
    timestamp created_at
    timestamp updated_at
  }
  class OtherClasses
  BaseClass <|-- OtherClasses : inheritance
```
```mermaid
classDiagram
  %% `이메일_주소` is a unique value with a one-to-one correspondence with the class, independent of the primary key.
  class 사용자 {
    string 이메일_주소
    string 별명
  }

  %% `주식코드` is a unique value with a one-to-one correspondence with the class, independent of the primary key.
  %% `국문_주식명_초성` and `영문_주식명` are not exposed in the UI, but are included in the search target.
  class 주식 {
    string 주식코드
    string 로고_이미지_url
    string 국문_주식명
    string 국문_주식명_초성
    string 영문_주식명
    number 배당수익률
    string 기업정보
    string 창업자
    string ceo
    string 본사
    string 설립연도
  }

  class unnamed_1 {
    date 고시일자
    number 원_달러_환율
  }

  class 조회_내역 {
  }
  사용자 "1" <-- "N" 조회_내역
  주식 "1" <-- "N" 조회_내역

  class 검색_내역 {
  }
  사용자 "1" <-- "N" 검색_내역
  주식 "1" <-- "N" 검색_내역

  class 배당_내역 {
    date 배당락일
    date 지급예정일
    number 달러화_1주당_배당금
  }
  주식 "1" <-- "N" 배당_내역

  class 테마 {
    string 테마명
  }

  class unnamed_2 {
  }
  주식 "1" <-- "N" unnamed_2
  테마 "1" <-- "N" unnamed_2

  class 주가 {
    date 기준일
    number 달러화_주가
    integer 원화_주가
  }
  주식 "1" <-- "N" 주가

  class 자주_묻는_질문_범주 {
    string 범주명
  }

  class 자주_묻는_질문 {
    string 질문
    string 답변
  }
  자주_묻는_질문_범주 "1" <-- "N" 자주_묻는_질문

  class 공지사항 {
    date 공지일
    string 제목
    string 내용
  }

  class 계좌 {
  }
  사용자 "1" <-- "1" 계좌

  class 주문_내역 {
    string 주문_유형
    string 주문_상태
    timestamp 주문_시점
    integer 원화_주문금액
    number 주식_수
    number 달러화_주가
    number 적용_환율
    integer 원화_주가
    integer 원화_체결금액
    integer 원화_수수료
  }
  사용자 "1" <-- "N" 주문_내역
  주식 "1" <-- "N" 주문_내역

  class 거래_내역 {
    string 거래_유형
    timestamp 거래_시점
    number 주식_수
    number 달러화_주가
    integer 원화_주가
    integer 원화_거래금액
    integer 원화_수수료
    integer 원화_잔액_변화
    number 달러화_잔액_변화
  }
  사용자 "1" <-- "N" 거래_내역
  주식 "1" <-- "N" 거래_내역

  class 보유주식 {
  }
  사용자 "1" <-- "N" 보유주식
  주식 "1" <-- "N" 보유주식

  class 관심주식 {
  }
  사용자 "1" <-- "N" 관심주식
  주식 "1" <-- "N" 관심주식

  class 쇼핑백 {
  }
  사용자 "1" <-- "N" 쇼핑백
  주식 "1" <-- "N" 쇼핑백
```

### Extra implementation goals
```mermaid
classDiagram
  class 주식 {
    boolean is_etf
  }

  class 뉴스 {
    date 날짜
    string 출처
    string 제목
    string 내용
  }
  주식 "1" <-- "N" 뉴스

  class 리서치 {
    date 날짜
    string 출처
    string 제목
    string 내용
  }
  주식 "1" <-- "N" 리서치

  class 미니톡 {
  }
  사용자 "1" <-- "N" 미니톡
  주식 "1" <-- "N" 미니톡
```
