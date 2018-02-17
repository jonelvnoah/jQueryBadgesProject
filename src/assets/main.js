$(document).ready(function () {
  $.ajax({
    url: 'https://www.codeschool.com/users/jonelvnoah.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed)
    }
  });

  function addCourses(courses) {
    let $badges = $("#badges");
    courses.forEach(function (course) {

      let $course = $("<div>", {
        'class':'course'
      }).appendTo($badges);

      $("<h3>",{
        text:course.title
      }).appendTo($course);

      $("<img>",{
        src : course.badge
      }).appendTo($course);

      $("<a>",{
        'class': 'btn btn-primary',
        href: course.url,
        target: '_blank',
        text : 'See Course'
      }).appendTo($course);
    })
  }
});
