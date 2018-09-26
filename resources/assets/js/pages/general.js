window.trimSlash = function (text)
{
  return text.replace(/^\/|\/$/g, '');
}

window.displayErrors  = function (err)
{
  var errors = err.response.data.errors;
  if(typeof errors == 'object') {
    for (var key in errors) {
      window.toastr.error(errors[key][0]);
    }
  }else {
    swal('Oops...', err.response.data.message, 'error');
  }
}

window.displayMessages = function (message, redirect='')
{
  message = message.data;
  const time = 3000;

  swal({
    title: "Thành công",
    text: message.message,
    type: "success"
  }).then(function(){
    if(redirect != '') {
      window.location.href = window.location.origin + redirect;
    }
  });
}

window.url = function (uri)
{
  return `http://127.0.0.1:8000${uri}`;
}

window.convertToSlug = function (text)
{
  text = window.nonAccentVietnamese(text);
  text = text.replace(/-+/g,' ');
  text = text.toLowerCase();
  text = text.replace(/[^\w ]+/g,'');
  text = text.replace(/ +/g,'-');
  text = text.replace(/\s\s+/g, ' ');

  if (text[0] == '-') {
    text = text.substr(1);
  }

  if (text[text.length - 1] == '-') {
    text = text.substr(0, text.length - 1);
  }

  return text;
}

window.nonAccentVietnamese = function (str)
{
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  str = str.replace(/\u02C6|\u0306|\u031B/g, "");

  return str;
}


window.paginate = function(data)
{
  if(data.per_page >= data.total) {
    return;
  }
  var from  = data.from;
  var to    = data.to;
  var total = data.total;
  var str = '';

   str = str + `
      <div class="col-sm-6">
        show ${from} to ${to} of ${total} entities
      </div>
      <nav aria-label="Page navigation example" class="col-sm-6 text-right">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link first_page_url" href="${data.first_page_url}" aria-label="Previous">
              <span aria-hidden="true"><i class="fa fa-angle-double-left"></i></span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link prev_page_url" href="${data.prev_page_url}" aria-label="Previous">
              <span aria-hidden="true"><i class="fa fa-angle-left"></i></span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link next_page_url" href="${data.next_page_url}" aria-label="Next">
              <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
              <span class="sr-only">Next</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link last_page_url" href="${data.last_page_url}" aria-label="Next">
              <span aria-hidden="true"><i class="fa fa-angle-double-right"></i></i></span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>`
      $('.pagination-js').html(str);

}
