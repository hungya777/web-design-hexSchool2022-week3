console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

/* jQuery 的 .toggleClass() 控制漢堡選單 */
$(document).ready(function () {
  $('.menu-icon').click(function (e) {
    e.preventDefault();
    $('.navbar').toggleClass('active');
  })
});