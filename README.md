<h1>Tool script xóa bình luận trên face book<h1>

<ol>
  <li>bật bài viết đó lên chuyển từ "www.face..." sang"m.face..." </li>
  <li>Nhúng file jquery này https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js vào 'source' đặt tên làjQuery </li>
  <li>confirm = () => true</li>
  câu lệnh này để khi bật thông báo xóa bình luận thì sẽ mặc định là yes, không cần phải hiện ra 'confirm'
  <li>
    if (chuoi.includes("*")) ở dòng thứ 4 trong file js thì mặc định xóa ở đây tôi sẽ xóa những bình luận có dấu *
    bạn nào muốn xóa những bình luận nào theo ý mình thì thay kí tự khác vào
    <br>
    <p style="color:red;">nếu bạn muốn xóa hết những bình luận thì xóa đoạn if ở dòng thứ 4 đi </p>
  </li>
  <li>để tránh tính trạng máy bị treo khi xóa quá nhiều bình luận thì nên mở commet trong dòng thứ 8 ở file JS sẽ xóa từng bình luận một</li>
</ol>
