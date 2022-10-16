"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const resp = {
    message: 'Good',
    status: StatusCode.SUCCESS,
};
//1 - success 2 - in process 3 - denied
if (resp.status === StatusCode.SUCCESS) {
}
