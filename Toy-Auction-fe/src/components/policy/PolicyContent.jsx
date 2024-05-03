import React, { useState } from "react";
import "./policy.css";
import Accordion from "react-bootstrap/Accordion";
export default function PolicyContent() {
  const [Policy, setPolicy] = useState("BH");

  const Insurance = () => {
    return (
      <div className="ThePolicy">
        <div className="policy-header">Chính sách bảo hành</div>
        <div className="policy-content">
          <div className="text-strong italic text-[13px] my-2 text-center">
            Chính sách bảo hành này sẽ giúp đảm bảo quyền lợi của cả người mua và người bán trên hệ thống đấu giá mô hình Diecast, 
            tạo ra một môi trường mua bán trực tuyến tin cậy và công bằng.
          </div>
          <div className="heading1">Điều kiện bảo hành</div>

          <div className="text-strong">Thời gian bảo hành:</div>
          <ul>
            <li>
              Mỗi sản phẩm đấu giá trên hệ thống sẽ đi kèm với một thời gian bảo hành cụ thể, 
              được quy định bởi người bán. Thời gian bảo hành này sẽ được hiển thị rõ ràng trong thông tin sản phẩm.
            </li>
            <li>
            Thời gian bảo hành tính từ ngày món hàng được nhận bởi người mua, được xác nhận qua quá trình quay phim và kiểm tra theo quy định của hệ thống.
            </li>
          </ul>

          <div className="text-strong">Điều kiện bảo hành:</div>
          <ul>
            <li>
              Sản phẩm phải được sử dụng đúng cách và theo hướng dẫn sử dụng của nhà sản xuất.
            </li>
            <li>
              Sản phẩm không được phép sửa chữa, thay đổi cấu trúc hoặc mở ra nếu không có sự đồng ý của nhà sản xuất hoặc đại diện ủy quyền.
            </li>
            <li>
              Bảo hành chỉ áp dụng cho các lỗi kỹ thuật, hỏng hóc do sản phẩm trong quá trình sử dụng bình thường và không phải do hỏng hóc do người dùng gây ra.
            </li>
            <li>
              Sản phẩm phải được bảo quản và vận chuyển đúng cách để tránh các vấn đề gây hỏng hóc không phải do lỗi của sản phẩm.
            </li>
          </ul>

          <div className="text-strong">Quy trình yêu cầu bảo hành:</div>
          <ul>
            <li>
              Khách hàng phải thông báo về bất kỳ vấn đề bảo hành nào qua hệ thống trước khi hết thời gian bảo hành.
            </li>
            <li>
              Sau khi nhận được thông báo, hệ thống sẽ kiểm tra thông tin và tiến hành xác nhận vấn đề bảo hành.
            </li>
            <li>
              Nếu vấn đề được xác nhận là có thể bảo hành, hệ thống sẽ hướng dẫn khách hàng về quy trình trả hàng và cung cấp thông tin cần thiết cho việc xử lý bảo hành.
            </li>
          </ul>

          <div className="heading1">Những trường hợp không được bảo hành</div>
          <ul>
            <li> Các trường hợp sản phẩm bị hỏng do sử dụng không đúng cách hoặc vi phạm hướng dẫn sử dụng của nhà sản xuất sẽ không được bảo hành.</li>
            <li> Mọi sửa chữa hoặc thay đổi cấu trúc sản phẩm mà không có sự đồng ý của nhà sản xuất hoặc đại diện ủy quyền sẽ không được bảo hành.</li>
            <li>
              Các trường hợp hỏng hóc do nguyên nhân ngoại lệ như tai nạn, thảm họa tự nhiên, hoặc vận chuyển không đúng cách không được bảo hành.
            </li>
            <li>
              Sản phẩm phải được trả về trong tình trạng hoàn chỉnh, bao gồm cả phụ kiện và bao bì gốc, nếu không sẽ không được bảo hành.
            </li>
          </ul>

          <p></p>
        </div>
      </div>
    );
  };

  const Shipping = () => {
    return (
      <div className="ThePolicy">
        <div className="policy-header">Chính sách vận chuyển</div>
        <div className="policy-content">
          <div className="text-strong">
            Dịch vụ vận chuyển uy tín, đảm bảo các mặt hàng đến
            tay quý khách được an toàn.
          </div>
          <div className="heading1">
            Lựa Chọn Dịch Vụ Vận Chuyển
          </div>
          <p>
            Người bán và người mua đều có quyền lựa chọn dịch vụ vận chuyển phù hợp.
          </p>
          <p>
          Hệ thống không có dịch vụ vận chuyển riêng, mà sẽ hỗ trợ việc gửi hàng thông qua các dịch vụ vận chuyển bên thứ ba được lựa chọn bởi người gửi hàng.
          </p>

          <div className="heading1">
            Trách Nhiệm của Người Bán
          </div>
          <p>
            Người bán có trách nhiệm chọn lựa và sử dụng dịch vụ vận chuyển tin cậy để gửi sản phẩm cho người mua.
          </p>
          <p>
            Người bán phải đảm bảo rằng sản phẩm được đóng gói cẩn thận và an toàn để tránh hỏng hóc hoặc mất mát trong quá trình vận chuyển.
          </p>

          <div className="heading1">
            Trách Nhiệm của Người Mua
          </div>
          <p>
            Người mua cần cung cấp địa chỉ giao hàng chính xác và chi tiết để đảm bảo việc nhận hàng được thực hiện một cách chính xác và kịp thời.
          </p>
          <p>
            Người mua có trách nhiệm thanh toán phí vận chuyển (nếu có) và tuân thủ các quy định của dịch vụ vận chuyển mà họ đã lựa chọn.
          </p>
          
          <div className="heading1">
            Thanh Toán Phí Vận Chuyển
          </div>
          <p>
            Hệ thống liên kết với các đối tác vận chuyển uy tín, cung cấp các phương thức vận chuyển đa dạng cho người mua. Người mua có thể chọn dịch vụ vận chuyển từ danh sách các đối tác của hệ thống và thanh toán chi phí tương ứng.
          </p>
          <p>
            Hệ thống không thu thêm bất kỳ khoản phí nào từ phí vận chuyển.
          </p>

          <div className="heading1">
            Hỗ Trợ và Khiếu Nại
          </div>
          <p>
            Trong trường hợp có vấn đề liên quan đến vận chuyển hoặc việc nhận hàng, người mua và người bán có thể liên hệ với nhóm hỗ trợ của hệ thống để được giúp đỡ và giải quyết vấn đề.
          </p>
          <p>
            Hệ thống không thu thêm bất kỳ khoản phí nào từ phí vận chuyển.
          </p>

        </div>
      </div>
    );
  };
  const Payment = () => {
    return (
      <div className="ThePolicy">
        <div className="policy-header">Chính sách thanh toán</div>
        <div className="policy-content">
          <div className="text-strong">
            Chính sách thanh toán này được thiết kế để đảm bảo tính công bằng và minh bạch cho cả người mua và người bán trên website đấu giá mô hình xe Diecast của chúng tôi.
          </div>
          <div className="heading1">
            Thanh toán cho Người Bán Hàng
          </div>
          <p>
            Khi một phiên đấu giá kết thúc và người mua đã được xác định, hệ thống sẽ tự động chuyển số tiền từ tài khoản của người mua đến tài khoản của người bán.
          </p>
          <p>
            Người bán có thể yêu cầu rút tiền từ tài khoản của họ bất cứ lúc nào. Số tiền sẽ được chuyển vào tài khoản ngân hàng đã đăng ký trong vòng 3-5 ngày làm việc.
          </p>

          <div className="heading1">
            Nạp Tiền vào Tài Khoản
          </div>
          <p>
            Người tham gia đấu giá cần nạp tiền vào tài khoản trước khi tham gia các phiên đấu giá.
          </p>
          <p>
            Hệ thống chấp nhận thanh toán qua các phương thức như thẻ tín dụng, chuyển khoản ngân hàng, ví điện tử, và các hình thức thanh toán trực tuyến phổ biến khác.
          </p>
          <p>
            Số tiền nạp vào tài khoản sẽ được hiển thị trong ví điện tử trên trang cá nhân của người tham gia.
          </p>

          <div className="heading1">
            Chi Phí và Phí Dịch Vụ
          </div>
          <p>
            Người bán sẽ phải trả phí đăng bài đấu giá, dựa trên mức độ nổi bật và thời lượng của bài đăng.
          </p>
          <p>
            Hệ thống sẽ thu phí cho mỗi sản phẩm được đấu giá thành công, dựa trên tổng giá trị của sản phẩm.
          </p>
          <p>
            Có sẵn các gói đăng ký làm thành viên VIP với các ưu đãi riêng biệt và phí đăng ký phù hợp.
          </p>

          <div className="heading1">
            Bảo Mật Thanh Toán
          </div>
          <p>
            Người bán sẽ phải trả phí đăng bài đấu giá, dựa trên mức độ nổi bật và thời lượng của bài đăng.
          </p>
          <p>
            Hệ thống sẽ thu phí cho mỗi sản phẩm được đấu giá thành công, dựa trên tổng giá trị của sản phẩm.
          </p>
        </div>
      </div>
    );
  };

  const Complain = () => {
    return (
      <div className="ThePolicy">
        <div className="policy-header">Chính sách đổi trả, khiếu nại</div>
        <div className="policy-content">
          <div className="text-strong">
          </div>
          <div className="heading1">Điều kiện đổi trả </div>
          <ul>
            <li>
              Sản phẩm phải đạt tiêu chuẩn về chất lượng và không bị hỏng hóc, trầy xước hoặc có bất kỳ vấn đề nào ảnh hưởng đến giá trị sử dụng.
            </li>
            <li>Thời gian: Khách hàng có thời gian 7 ngày kể từ khi nhận được sản phẩm để yêu cầu đổi trả.</li>
            <li>Yêu cầu: Khách hàng cần cung cấp thông tin chính xác về lý do đổi trả và trạng thái của sản phẩm.</li>
            <div style={{ fontStyle: "oblique" }}>
              <div className="text-strong">Lưu ý:</div> Các sản phẩm không được
              đổi trả: đã hết thời gian đổi trả, không còn đầy đủ, nguyên vẹn,
              bị móp méo, sản phẩm trầy xước.
            </div>
          </ul>
          <div className="heading1">Chính sách khiếu nại </div>
          <ul style={{ listStyleType: "decimal" }}>
            <li style={{ fontWeight: "bold" }}>
              <p style={{ display: "inline-block" }}>Đối tượng khiếu nại:</p>{" "}
              <p style={{ display: "inline-block", fontWeight: "400" }}>
                Khách hàng có thể khiếu nại về sản phẩm không đúng mô tả, sản phẩm hỏng hóc do vận chuyển, hoặc bất kỳ vấn đề nào liên quan đến giao dịch mà họ cảm thấy không hài lòng.
              </p>
            </li>

            <li style={{ fontWeight: "bold" }}>
              <p style={{ display: "inline-block" }}>Hình thức khiếu nại:</p>{" "}
              <p style={{ display: "inline-block", fontWeight: "400" }}>
                Khách hàng có thể gửi khiếu nại qua email, tin nhắn trên hệ thống, hoặc thông qua số hotline hỗ trợ khách hàng.
              </p>
            </li>

            <li style={{ fontWeight: "bold" }}>
              <p style={{ display: "inline-block" }}>Nguyên tắc giải quyết:</p>{" "}
              <p style={{ display: "inline-block", fontWeight: "400" }}>
                Hệ thống có quyền từ chối và không giải quyết các khiếu nại
                không có cơ sở, bằng chứng hoặc không trực thuộc đơn vị giải
                quyết.
              </p>
            </li>
          </ul>
          <div className="heading1">Quy trình xử lý khiếu nại</div>
          <p style={{ display: "inline-block", fontWeight: "bold" }}>
            Bước 1: Tiếp nhận khiếu nại{" "}
          </p>{" "}
          <p>
            Hệ thống tiếp nhận khiếu nại từ khách hàng qua các kênh liên lạc.
          </p>
          <p style={{ display: "inline-block", fontWeight: "bold" }}>
            Bước 2: Xác minh thông tin
          </p>{" "}
          <p>
            Hệ thống xác minh thông tin và kiểm tra vấn đề được khiếu nại.
          </p>
          <p style={{ display: "inline-block", fontWeight: "bold" }}>
            Bước 3: Liên hệ với các bên{" "}
          </p>{" "}
          <p>
            Hệ thống liên hệ với cả người mua và người bán để làm rõ tình hình và tìm kiếm giải pháp.
          </p>
          <p style={{ display: "inline-block", fontWeight: "bold" }}>
            Bước 4: Giải quyết vấn đề{" "}
          </p>{" "}
          <p>
            Hệ thống giải quyết vấn đề một cách công bằng và nhanh chóng, bảo đảm sự hài lòng của cả hai bên.
          </p>
          <p style={{ display: "inline-block", fontWeight: "bold" }}>
            Bước 5: Thông báo kết quả{" "}
          </p>{" "}
          <p>
            Kết quả của quá trình giải quyết sẽ được thông báo cho cả người mua và người bán qua email hoặc tin nhắn trên hệ thống.
          </p>
        </div>
      </div>
    );
  };

  const Security = () => {
    return (
      <div className="ThePolicy">
        <div className="policy-header">Chính sách bảo mật</div>
        <div className="policy-content">
          <div className="heading1">
            Chúng tôi thu thập những thông tin nào?
          </div>
          <p>
            Chúng tôi thu thập thông tin từ bạn khi bạn đăng ký trên trang web
            của chúng tôi, đặt hàng, đăng ký nhận bản tin của chúng tôi hoặc
            điền vào một biểu mẫu.
          </p>
          <p>
            Khi đặt hàng hoặc đăng ký trên trang web của chúng tôi, bạn có thể
            được yêu cầu nhập của bạn: tên, địa chỉ email hoặc địa chỉ gửi thư.
            Bạn có thể truy cập trang web của chúng tôi nặc danh.
          </p>
          <div className="heading1">
            Chúng tôi sử dụng thông tin của bạn cho những mục đích gì?
          </div>
          <p>
            Bất kỳ thông tin chúng tôi thu thập từ bạn có thể được sử dụng theo
            một trong các cách sau đây:
          </p>
          <ul>
            <li>
              Để cá nhân hóa trải nghiệm của bạn (thông tin của bạn sẽ giúp
              chúng tôi đáp ứng tốt hơn nhu cầu cá nhân của bạn).
            </li>
            <li>
              Để cải thiện trang web của chúng tôi (chúng tôi liên tục cố gắng
              để cải thiện các dịch trang web của chúng tôi dựa trên những thông
              tin và phản hồi chúng tôi nhận được từ bạn).
            </li>
            <li>
              Để cải thiện dịch vụ khách hàng (thông tin của bạn sẽ giúp chúng
              tôi để có hiệu quả hơn để đáp ứng yêu cầu dịch vụ khách hàng của
              bạn và nhu cầu hỗ trợ).
            </li>
            <li>Để xử lý các giao dịch.</li>
          </ul>
          <p>
            Thông tin của bạn, dù công khai hay ẩn danh, sẽ không được bán, trao
            đổi, chuyển nhượng, hoặc cho bất kỳ công ty nào khác với bất kỳ lý
            do nào, mà không có sự đồng ý của bạn, khác hơn là cho mục đích rõ
            ràng của việc cung cấp các sản phẩm mua hoặc dịch vụ yêu cầu.
          </p>

          <ul>
            <li>
              Để quản lý một cuộc thi, khuyến mãi, khảo sát, tính năng trang web
              khác.
            </li>
            <li>Để gửi email định kỳ.</li>
            <li>
              Các địa chỉ email mà bạn cung cấp được xử lý, có thể được sử dụng
              để gửi cho bạn các thông tin và cập nhật liên quan đến đặt hàng
              của bạn, ngoài việc tiếp nhận thông tin mới từ công, cập nhật, sản
              phẩm hoặc dịch vụ có liên quan thường xuyên, vv…
            </li>
            <li>
              Lưu ý: Nếu bất cứ lúc nào bạn muốn hủy đăng ký bạn có thực hiện từ
              phần hủy đăng ký nhận email trong tương lai, chúng được bố trí ở
              dưới cùng của mỗi email.
            </li>
          </ul>

          <div className="heading1">
            Chúng tôi bảo vệ thông tin của bạn như thế nào?
          </div>
          <p>
            Chúng tôi thực hiện một loạt các biện pháp an ninh để duy trì sự an
            toàn của thông tin cá nhân của bạn khi bạn đặt hàng hoặc nhập, gửi,
            hoặc truy cập thông tin cá nhân của bạn.{" "}
          </p>
          <p>
            Chúng tôi cung cấp việc sử dụng một máy chủ an toàn. Tất cả các
            thông tin nhạy cảm cung cấp được truyền qua Bảo mật (SSL) công nghệ
            Socket và sau đó mã hóa thành cơ sở dữ liệu các nhà cung cấp cổng
            thanh toán của chúng tôi chỉ có thể truy cập bởi những người được ủy
            quyền có quyền truy cập đặc biệt tới hệ thống như vậy, và được yêu
            cầu để giữ cho các thông tin bí mật.
          </p>

          <div className="heading1">Chúng tôi sử dụng cookies?</div>
          <p>
            Có (Cookie là những file nhỏ mà một trang web hoặc dịch vụ của nhà
            cung cấp của nó lưu ở máy tính của bạn trong ổ cứng thông qua trình
            duyệt Web của bạn (nếu bạn cho phép) cho phép các trang web hoặc các
            hệ thống cung cấp dịch vụ để nhận ra trình duyệt và máy tính của bạn
            và ghi nhớ thông tin nhất định).
          </p>
          <p>
            Chúng tôi sử dụng cookies để giúp chúng ta nhớ và xử lý các mặt hàng
            trong giỏ hàng của bạn, hiểu và lưu các sở thích của bạn cho lần
            truy cập sau và theo dõi các quảng cáo.
          </p>

          <div className="heading1">
            Do chúng tôi tiết lộ bất cứ thông tin cho bên ngoài?
          </div>
          <p>
            Chúng tôi không bán, thương mại, hoặc chuyển giao cho bên ngoài
            những thông tin cá nhân của bạn. Điều này không bao gồm các bên thứ
            ba đáng tin, người hỗ trợ chúng tôi trong việc điều hành trang web
            của chúng tôi, hoạt động kinh doanh của chúng tôi, hoặc phục vụ bạn,
            miễn là các bên đồng ý giữ bí mật thông tin này. Chúng tôi cũng có
            thể tiết lộ thông tin của bạn khi chúng tôi tin rằng việc này là
            tuân thủ pháp luật, thực thi chính sách trang web của chúng tôi, hay
            bảo vệ mọi người hoặc một người về quyền tài sản, hoặc sự an toàn.
            Tuy nhiên, thông tin không nhận dạng cá nhân có thể được cung cấp
            cho các bên khác để tiếp thị, quảng cáo, hoặc sử dụng khác.
          </p>

          <div className="heading1">Liên kết của bên thứ ba</div>
          <p>
            Chúng tôi có thể cung cấp sản phẩm của bên thứ ba trên trang web của
            chúng tôi. Những trang web của bên thứ ba có chính sách bảo mật
            riêng biệt và độc lập. Do đó chúng tôi không có trách nhiệm hoặc
            trách nhiệm đối với các nội dung và hoạt động của các trang web liên
            kết. Tuy nhiên, chúng tôi tìm cách để bảo vệ sự toàn vẹn của trang
            web của chúng tôi và hoan nghênh bất kỳ thông tin phản hồi về các
            trang web này.
          </p>

          <div className="heading1">
            Chính sách chỉ áp dụng website trực tuyến
          </div>
          <p>
            Chính sách bảo mật trực tuyến này chỉ áp dụng cho các thông tin thu
            thập được thông qua trang web của chúng tôi và không cho thông tin
            thu thập được ẩn.
          </p>
          <div className="heading1">Sự đồng ý của bạn</div>
          <p>
            Bằng cách sử dụng trang web của chúng tôi, bạn đồng ý với chính sách
            bảo mật của chúng tôi.
          </p>
          <div className="heading1">Thay đổi chính sách mật của chúng tôi</div>
          <p>
            Nếu chúng tôi quyết định thay đổi chính sách bảo mật của chúng tôi,
            chúng tôi sẽ đăng những thay đổi trên trang này.
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="Policy-background">
        <div className="Policy-container">
          <div className="flex">
            <div className="flex-col-1-4">
              <div className="policy-sidebar">
                <Accordion defaultActiveKey={["1"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Giới thiệu về chúng tôi</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Các chính sách</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li
                          className={Policy === "BH" ? "policy-read-item" : ""}
                          onClick={() => setPolicy("BH")}
                        >
                          Chính sách bảo hành
                        </li>

                        <li
                          className={Policy === "VC" ? "policy-read-item" : ""}
                          onClick={() => setPolicy("VC")}
                        >
                          Chính sách vận chuyển
                        </li>

                        <li
                          className={Policy === "TT" ? "policy-read-item" : ""}
                          onClick={() => setPolicy("TT")}
                        >
                          Chính sách thanh toán
                        </li>

                        <li
                          className={Policy === "DT" ? "policy-read-item" : ""}
                          onClick={() => setPolicy("DT")}
                        >
                          Chính sách đổi trả, khiếu nại
                        </li>

                        <li
                          className={Policy === "BM" ? "policy-read-item" : ""}
                          onClick={() => setPolicy("BM")}
                        >
                          Chính sách bảo mật
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="flex-col-3-4">
              {Policy === "BH" && <Insurance />}
              {Policy === "VC" && <Shipping />}
              {Policy === "TT" && <Payment />}
              {Policy === "DT" && <Complain />}
              {Policy === "BM" && <Security />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
