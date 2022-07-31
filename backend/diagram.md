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
  %% `email_address` is a unique value with a one-to-one correspondence with the class, independent of the primary key.
  class User {
    string email_address
    string nickname
  }

  %% `code` is a unique value with a one-to-one correspondence with the class, independent of the primary key.
  %% `korean_name_beginning_consonant` and `english_name` are not exposed in the UI, but are included in the search target.
  class Stock {
    string code
    string logo_image_url
    string korean_name
    string korean_name_beginning_consonant
    string english_name
    number annual_dividend_rate
    string 기업정보
    string 창업자
    string ceo
    string 본사
    string 설립연도
  }

  class unnamed_1 {
    date notification_date
    number exchange_rate
  }

  class 조회_내역 {
    User user
    Stock stock
  }
  User "1" <-- "N" 조회_내역
  Stock "1" <-- "N" 조회_내역

  class 검색_내역 {
    User user
    Stock stock
  }
  User "1" <-- "N" 검색_내역
  Stock "1" <-- "N" 검색_내역

  class 배당_내역 {
    Stock stock
    date ex_date
    date 지급예정일
    number dividends_per_share
  }
  Stock "1" <-- "N" 배당_내역

  class Theme {
    string name
  }

  class unnamed_2 {
    Stock stock
    Theme theme
  }
  Stock "1" <-- "N" unnamed_2
  Theme "1" <-- "N" unnamed_2

  class 주가 {
    Stock stock
    date 기준일
    number 달러화_주가
    integer 원화_주가
  }
  Stock "1" <-- "N" 주가

  class FaqCategory {
    string name
  }

  class Faq {
    FaqCategory category
    string question
    string answer
  }
  FaqCategory "1" <-- "N" Faq

  class Notice {
    date 공지일
    string title
    string content
  }

  class 계좌 {
    User user
  }
  User "1" <-- "1" 계좌

  class 보유주식 {
    User user
    Stock stock
  }
  User "1" <-- "N" 보유주식
  Stock "1" <-- "N" 보유주식

  class 관심주식 {
    User user
    Stock stock
  }
  User "1" <-- "N" 관심주식
  Stock "1" <-- "N" 관심주식

  class 쇼핑백 {
    User user
    Stock stock
  }
  User "1" <-- "N" 쇼핑백
  Stock "1" <-- "N" 쇼핑백
```

### Extra implementation goals
```mermaid
classDiagram
  class Stock {
    boolean is_etf
  }

  class News {
    date 날짜
    string 출처
    string title
    string content
  }
  Stock "1" <-- "N" News

  class Research {
    date 날짜
    string 출처
    string title
    string content
  }
  Stock "1" <-- "N" Research
```