(function() {
  if (window.location.href.indexOf('/p') === -1) return;
  function insertSection() {
    if (document.getElementById('custom-story-section')) return;
    var h1 = document.querySelector('h1');
    if (!h1) return;
    var wrapper = document.createElement('div');
    wrapper.id = "custom-story-section";
    wrapper.style.marginTop = "30px";
    wrapper.style.padding = "25px";
    wrapper.style.border = "1px solid #eee";
    wrapper.style.borderRadius = "14px";
    wrapper.style.background = "#fafafa";
    wrapper.innerHTML =
      '<h2 style="font-size:20px;font-weight:bold;margin-bottom:10px;">جديدنا</h2>' +
      '<p style="margin-bottom:20px;">لدينا خيار تغليف - واهداء الالعاب مع صورة الطفل</p>' +
      '<p style="margin-bottom:20px;">أضف صورة طفلك - ستصلك صورة كرتونية لطيفة له ملصقة علي التغليف</p>' +
      '<div style="display:flex;gap:20px;margin-bottom:25px;">' +
        '<div style="text-align:center;">' +
          '<div style="font-size:22px;">📸</div>' +
          '<p>أضف صورة طفلك</p>' +
        '</div>' +
       
        '<div style="text-align:center;">' +
          '<div style="font-size:22px;">✨</div>' +
          '<p>ستصلك صورة كرتونية لطيفة له ملصقة علي التغليف</p>' +
        '</div>' +
      '</div>';
    h1.parentNode.insertBefore(wrapper, h1.nextSibling);
  }
  setTimeout(function() {
    insertSection();
  }, 1500);
})();
