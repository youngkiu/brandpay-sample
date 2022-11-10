// API 키 설정
// 문서: https://docs.tosspayments.com/guides/brandpay/integration#api-키-설정-및-sdk-준비
const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq'; // 테스트용 클라이언트 키입니다. 계정 설정이 진행된 후에는 내 상점의 키 값으로 변경하세요.
const customerKey = 'CUSTOMER_KEY'; // 상점에서 고객을 구분하기 위해 발급한 고객의 고유 ID로 변경하세요.

// brandpay 인스턴스 생성
const brandpay = BrandPay(clientKey, customerKey, {
  // 개발자센터에 등록한 `redirectUrl`을 추가하세요.
  // 문서: https://docs.tosspayments.com/reference/brandpay-sdk#초기화-파라미터
  redirectUrl: window.location.origin + '/callback-auth',
});

const paymentParams = {
  orderId: 'ORDER_ID', // 주문에 대한 고유한 ID 값
  orderName: '생수 외 1건', // 결제에 대한 주문명
  successUrl: window.location.origin + '/success',
  failUrl: window.location.origin + '/fail',
};

let brandpayWidget;

initialize();
document
  .querySelector('#payment-form')
  .addEventListener('submit', handleSubmit);

async function initialize() {
  // brandpayWidget 인스턴스 생성
  brandpayWidget = brandpay.widget({ amount: 1000 });

  // 결제 수단을 렌더링 할 수 있는 위젯 생성
  const paymentMethods = brandpayWidget.paymentMethods('payment');

  // 결제 수단 렌더링
  paymentMethods.render('#payment-methods-widget', {
    // methodType: '카드', // 위젯에서 보여줄 수 있는 결제 수단 선택
    // methodId: 'METHOD_ID', // 위젯에서 기본 결제 수단으로 선택할 결제 수단 ID
    ui: {
      // 위젯 UI에서 변경할 수 있는 옵션
      promotionSection: {
        summary: {
          visible: true,
        },
        description: {
          visible: true,
          defaultOpen: true,
        },
      },
    },
  });
}

// 결제하기
async function handleSubmit(e) {
  e.preventDefault();

  await brandpay.requestPayment({
    widget,
    ...paymentParams,
  });
}
