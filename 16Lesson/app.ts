interface req {
  summ: number;
  from: number;
  to: number;
}
enum PaymentStatus {
  Succes = ' success',
  Failed = 'failed',
}

interface reqPay extends req {}
interface dataSucc {
  databaseId: number;
  summ: number;
  from: number;
  to: number;
}
interface dataFail {
  errorMessage: string;
  errorCode: number;
  summ: number;
  from: number;
  to: number;
}
interface respo {
  status: PaymentStatus;
  data: dataSucc | dataFail;
}
