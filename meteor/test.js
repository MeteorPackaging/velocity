Tinytest.add('velocityjs.is', function (test) {
  var $body = $("body")
  test.instanceOf($body.velocity, Object);
});