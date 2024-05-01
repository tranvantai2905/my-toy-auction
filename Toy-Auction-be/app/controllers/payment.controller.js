const https = require("https");

const moMoPayment = async (req, res) => {
  const { bidId, priceGlobal } = req.body;
  console.log({ priceGlobal }, { bidId });
  var partnerCode = "MOMO";
  var accessKey = "F8BBA842ECF85";
  var secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
  // chuỗi ngẫu nhiên để phân biệt cái request
  var requestId = partnerCode + new Date().getTime() + "id";
  // mã đặt đơn
  var orderId = bidId + `:${new Date().getTime()}`;
  //
  var orderInfo = "Thanh toán qua ví MoMo";
  // cung cấp họ về một cái pages sau khi thanh toán sẽ trở về trang nớ
  var redirectUrl = "http://localhost:3000/payment-result";
  // Trang thank you
  var ipnUrl = "http://localhost:3000/payment-result";
  // số tiền
  var amount = priceGlobal;
  // var requestType = "payWithATM";
  // show cái thông tin thẻ, cái dưới quét mã, cái trên điền form
  var requestType = "captureWallet";
  var extraData = ""; //pass empty value if your merchant does not have stores

  //before sign HMAC SHA256 with format
  //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
  var rawSignature =
    "accessKey=" +
    accessKey +
    "&amount=" +
    amount +
    "&extraData=" +
    extraData +
    "&ipnUrl=" +
    ipnUrl +
    "&orderId=" +
    orderId +
    "&orderInfo=" +
    orderInfo +
    "&partnerCode=" +
    partnerCode +
    "&redirectUrl=" +
    redirectUrl +
    "&requestId=" +
    requestId +
    "&requestType=" +
    requestType;
  // thư viện node js , model tích họp ,liên quan đến mã hóa, giải mã và bảo mật, cung cấp chức năng và phương thức sử lý dữ liệu liên quan đến mật mã
  const crypto = require("crypto");
  var signature = crypto
    // thuật toán tạo ra mới với tham số là secretkey
    .createHmac("sha256", secretkey)
    // thêm biến rawSignature vào băm
    .update(rawSignature)
    // tạo chữ kí và chuyển sang mã hex
    .digest("hex");

  //json object send to MoMo endpoint, gửi cái aip của momo
  const requestBody = JSON.stringify({
    partnerCode: partnerCode,
    accessKey: accessKey,
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    redirectUrl: redirectUrl,
    ipnUrl: ipnUrl,
    extraData: extraData,
    requestType: requestType,
    signature: signature,
    lang: "en",
  });

  //Create the HTTPS objects, tạo sever, https để call cái aip khác, call tới momo
  const https = require("https");
  // yêu cầu truyền đi
  const options = {
    hostname: "test-payment.momo.vn",
    port: 443,
    path: "/v2/gateway/api/create",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(requestBody),
    },
  };
  //Send the request and get the response
  const reqq = https.request(options, (resMom) => {
    console.log(`Status: ${resMom.statusCode}`);
    console.log(`Headers: ${JSON.stringify(resMom.headers)}`);
    resMom.setEncoding("utf8");
    // trả về body là khi mình call momo
    resMom.on("data", (body) => {
      // url dẫn đến tranh toán của momo
      console.log(JSON.parse(body).payUrl);
      res.json({ payUrl: JSON.parse(body).payUrl });
    });
    resMom.on("end", () => {
      console.log("No more data in response.");
    });
  });

  reqq.on("error", (e) => {
    console.log(`problem with request: ${e.message}`);
  });
  // write data to request body
  console.log("Sending....");
  reqq.write(requestBody);
  reqq.end();
};
module.exports = {
  moMoPayment,
};
