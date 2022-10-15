enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS,
  FAILED,
}
const resp = {
  message: 'Good',
  status: StatusCode.SUCCESS,
};

//1 - success 2 - in process 3 - denied
if (resp.status === StatusCode.SUCCESS) {
}
