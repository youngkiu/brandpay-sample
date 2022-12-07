# 브랜드페이 PHP 샘플

토스페이먼츠 브랜드페이 PHP Brandpay Widget 샘플입니다. [Docs](https://docs.tosspayments.com/guides/brandpay/overview)


## 파일 트리 

- `var.php` : 시작하기 전에 API KEY 및 Redircet Url 변수를 설정해주셔야 합니다. 
- `confirm-payment.php` : [결제승인 API](https://docs.tosspayments.com/reference/brandpay#%EA%B2%B0%EC%A0%9C-%EC%8A%B9%EC%9D%B8) 호출 부분입니다. 
- `callback-auth.php` : 브랜드페이 SDK 사용을 위해, Redirect Url을 통한 인증 영역입니다. ([링크](https://docs.tosspayments.com/guides/brandpay/auth))

```sh
├── setting
│   ├── var.php 
│   └── callback-auth.php   
│
├── css
│
├── index.php 
└── confirm-payment.php
```

## 시작하기 

var.php 내 API KEY와 Redirect Url 변수를 설정 후, index.php를 실행해주세요.

