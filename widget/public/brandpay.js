const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';
const customerKey = 'tosspayments'; // 상점에서 고객을 구분하기 위해 발급한 고객의 고유 ID로 변경하세요.

// brandpay 인스턴스 생성
const brandpay = BrandPay(clientKey, customerKey, {
  redirectUrl: window.location.origin + '/callback-auth',
});

const paymentParams = {
  orderId: 'order123', // 주문에 대한 고유한 ID 값
  orderName: '생수 외 1건', // 결제에 대한 주문명
  successUrl: window.location.origin + '/success',
  failUrl: window.location.origin + '/fail',
};


let brandpayWidget;

initialize();
document.querySelector('#payment-form').addEventListener('submit', handleSubmit);

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
