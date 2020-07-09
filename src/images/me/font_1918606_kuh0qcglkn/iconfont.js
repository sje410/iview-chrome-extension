!(function(e) {
  var t,
    n,
    o,
    c,
    i,
    l,
    a,
    d =
      '<svg><symbol id="icon-time" viewBox="0 0 1024 1024"><path d="M512.268258 66.20033c-245.189819 0-445.798647 200.609852-445.798647 445.79967s200.609852 445.79967 445.798647 445.79967 445.79967-200.609852 445.79967-445.79967-200.610876-445.79967-445.79967-445.79967z m260.049466 520.098932H475.118627c-11.144992 0-18.575328-3.713632-26.00464-11.144991-7.430336-7.429312-11.144992-14.859648-11.144992-26.00464V251.950534c0-18.575328 14.859648-37.149631 37.149632-37.149632 18.574304 0 37.149631 18.574304 37.149631 37.149632v260.049466h260.049466c18.575328 0 37.149631 14.859648 37.149632 37.149631 0 18.575328-18.574304 37.149631-37.149632 37.149631z"  ></path></symbol><symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M568.905143 568.905143h170.642286a56.905143 56.905143 0 1 0 0-113.810286H568.905143V284.525714a56.905143 56.905143 0 1 0-113.810286 0v170.642286H284.525714a56.905143 56.905143 0 1 0 0 113.810286h170.642286v170.642285a56.905143 56.905143 0 1 0 113.810286 0V568.905143zM512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z" fill="#6B84D5" ></path></symbol><symbol id="icon-kuaisufan-copy-copy" viewBox="0 0 1024 1024"><path d="M512 14.8973037c-273.40648297 0-497.1026963 223.69621333-497.1026963 497.1026963s223.69621333 497.1026963 497.1026963 497.1026963 497.1026963-223.69621333 497.1026963-497.1026963-223.69621333-497.1026963-497.1026963-497.1026963z m165.70089876 472.24756148l-256.83639307 331.40179754c-8.28504494 8.28504494-16.57008987 0-16.57008988-8.28504494l49.71026962-265.12143803h-99.42053926c-8.28504494 0-8.28504494-8.28504494-8.28504493-8.28504493l256.83639307-331.40179754c8.28504494-8.28504494 16.57008987 0 16.57008988 8.28504494l-41.42522469 265.12143803h91.13549433c8.28504494 0 8.28504494 8.28504494 8.28504493 8.28504493z" fill="#96AF9E" ></path></symbol><symbol id="icon-yiban" viewBox="0 0 1024 1024"><path d="M505.6 57.6c25.6 0 38.4 19.2 38.4 38.4s-12.8 44.8-38.4 44.8c-204.8 0-364.8 166.4-364.8 364.8s166.4 364.8 364.8 364.8 364.8-166.4 364.8-364.8c0-25.6 19.2-38.4 38.4-38.4s38.4 19.2 38.4 38.4c0 249.6-198.4 448-448 448s-448-198.4-448-448S256 57.6 505.6 57.6zM883.2 192c19.2 19.2 19.2 44.8 0 64L531.2 627.2l-6.4 6.4c-19.2 12.8-44.8 12.8-57.6-6.4L320 467.2c-19.2-19.2-19.2-44.8 0-64l6.4-6.4c19.2-12.8 38.4-6.4 57.6 6.4l115.2 121.6 320-332.8c12.8-12.8 44.8-12.8 64 0z"  ></path></symbol></svg>',
    s = (t = document.getElementsByTagName("script"))[
      t.length - 1
    ].getAttribute("data-injectcss");
  if (s && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function m() {
    l || ((l = !0), c());
  }
  (n = function() {
    var e,
      t,
      n,
      o,
      c,
      i = document.createElement("div");
    (i.innerHTML = d),
      (d = null),
      (e = i.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (t = e),
        (n = document.body).firstChild
          ? ((o = t), (c = n.firstChild).parentNode.insertBefore(o, c))
          : n.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(n, 0)
        : ((o = function() {
            document.removeEventListener("DOMContentLoaded", o, !1), n();
          }),
          document.addEventListener("DOMContentLoaded", o, !1))
      : document.attachEvent &&
        ((c = n),
        (i = e.document),
        (l = !1),
        (a = function() {
          try {
            i.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(a, 50);
          }
          m();
        })(),
        (i.onreadystatechange = function() {
          "complete" == i.readyState && ((i.onreadystatechange = null), m());
        }));
})(window);
