<style type="text/css">
article,
body,
div,
footer,
h1,
h2,
h3,
header,
html,
li,
main,
p,
section,
span,
ul {
  padding: 0;
  margin: 0;
}
body {
  -webkit-font-smoothing: antialiased;
}
li {
  list-style: none;
}
img {
  border: 0;
}
a {
  outline: none;
}
a,
a:hover {
  text-decoration: none;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}
body {
  font-family: PingFang SC, Source Sans Pro, Hiragino Sans GB, Helvetica Neue,
    Helvetica, Microsoft Yahei, arial, sans-serif;
  color: #333;
}
input,
textarea {
  font: inherit;
  color: inherit;
}
.text-center {
  text-align: center;
}
.content-wrap {
  width: 75%;
  padding: 10px;
}
.content-wrap .header {
  position: relative;
  font-weight: 700;
  border-bottom: 1px solid #ddd;
}
.input-img-code,
.input-password,
.input-text {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 40px;
  border: 0;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 34px;
  padding-bottom: 4px;
  line-height: 30px;
  outline: none;
  font-size: 14px;
}
.input-img-code:focus,
.input-password:focus,
.input-text:focus {
  border-bottom: 2px solid #1b93fb;
}
.input-button {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  background-color: #1b93fb;
  border: 1px solid #1b93fb;
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
}
.input-button:active,
.input-button:hover {
  background-color: #1b7cfa;
  border-color: #1b7cfa;
}
.input-button.disable {
  background-color: #7fc2fd;
  border-color: #7fc2fd;
}
.scroll-wrapper {
  overflow: auto;
}
.scroll-wrapper::-webkit-scrollbar {
  width: 4px;
}
.scroll-wrapper::-webkit-scrollbar-thumb {
  background-color: #62a3eb;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}
a {
  color: #1e7be2;
}
#app.features-root {
  width: 600px;
}
#app::-webkit-scrollbar {
  width: 2px;
}
#app::-webkit-scrollbar-thumb {
  background-color: #1e7be2;
}
.app-view {
  -webkit-transition: all 0.1s linear;
  -o-transition: all 0.1s linear;
  transition: all 0.1s linear;
}
.app-transition-enter,
.app-transition-leave-active {
  opacity: 0;
  -webkit-transform: translate3d(100px, 0, 0);
  transform: translate3d(100px, 0, 0);
}
.app-transition-enter.main-page,
.app-transition-leave-active.main-page {
  opacity: 0.5;
  -webkit-transform: translateZ(-20px);
  transform: translateZ(-20px);
}
.app-transition-enter.features-page,
.app-transition-leave-active.features-page {
  opacity: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
</style>
<style type="text/css">
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.main-view {
  -webkit-transition: opacity 0.1s linear;
  -o-transition: opacity 0.1s linear;
  transition: opacity 0.1s linear;
}
.main-transition-enter,
.main-transition-leave-active {
  opacity: 0.4;
}
.mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 100%, 0.4);
  z-index: 1000;
}
.container {
  overflow: hidden;
}
.main-top,
main {
  position: relative;
}
.main-top {
  background: #fff;
  height: 50px;
  line-height: 50px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 1px solid #ebeef5;
}
.main-top .menu-list {
  height: 50px;
  text-align: center;
  font-size: 0;
}
.main-top li {
  width: 25%;
  display: inline-block;
  text-align: center;
  color: #c2cfdf;
  font-size: 12px;
}
.main-top li:last-child a:after {
  display: none;
}
.main-top a {
  display: inline-block;
  position: relative;
  color: #c2cfdf;
  height: 100%;
  width: 100%;
}
.main-top a span {
  margin-left: 12px;
  vertical-align: middle;
}
.main-top a:before {
  content: "";
  display: inline-block;
  width: 18px;
  height: 20px;
  vertical-align: middle;
}
.main-top a.active,
.main-top a:hover {
  text-decoration: none;
  color: #519fff;
}
.main-top a.has-notif span {
  display: inline-block;
}
.main-top a.has-notif span:after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #fb3131;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  position: absolute;
  top: 14px;
  left: 33px;
}
.main-top .tool:before {
  background: url(data:image/png;base64,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)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.main-top .tool.active:before,
.main-top .tool:hover:before {
  background: url(data:image/png;base64,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)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.main-top .account:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABWNJREFUWAntV1toXEUYnn/O2VyapEmzsQ1ts9m0lhpTc5FC2jSNipfmKSpYFX0QFCoIStCHIggqCiqCDwZ9ECVERCkWhdCmWKmt2aSxWuluE61oS3aTNS3BtDWtuWz2zPjNpgfmnJ2aGOtbBsL55/sv889/yyxjy2s5Av8tArRU9f6fxypFavZ5KeleRqwCdq7C2HecWMeOuvA3S7W7JIciscRzTIq3pWQ5poOJqDNQUNS+bVNw0sT/J2xBh6SUNg5Iu0Z6Tw0/gP0XwBfQpbO5efa2xur1E0r35NjYipTjyKaKimnXlulrNNoXTdQIJl9kku0iYkEoDuP7RnNd+MNINB6BM80mYwasu6Wh6v6+aPwdyVj7NX6MGH+zuT60zyCP7PvWQCx+e1rIozCwUmcRo09X8rw9k3LmysLRmddEJKUVsMqclNMhmXxMtwe6u4ixJxoaqi7rONc3ik5L+YrfGYUjQXKaU+FincnoIK2OI0pw7Rm19622q4ze92EsyyGk6Q6/kNpDUHKWNhaxSd7Fci0xBRp3zF4Ad+OCts7xOKSYpugoBeCzIi/vT115MTRflTsJ5XyzrLR/PH/ec0mPQ6qb8CeMykS9jTeXXmGMHCPfCJKzde3aKcnomImNAp5TfJ3ncWieIf/SBRSNDksVCtHdfzrxAmiDjl/D3UsLXfnSzvpQJ4xk2ZUGzGM8Ek3sxbBD8XsXanNCdQN4j/6bor5m5XEVedDjXqvYSVnSG008q+Meh9CaBTrTpRHakmv1dcHFFv2VbFDJoknLTDrExHod9zjEGR3WmS4NR/Mjg8kdmEXdLrbYL2eyZ2AwXm2KfMaGZId0Wx6Hmusr+9Dge3QBlybh7C4vCHUh/J0uttAXF9hPZfa+OUFmm4y9urOh6phuJ2tSn5QyMB1LDCNF63RB1V3E6cHm2tChvlg8iRuv8fJ9O6J4MFC5+VJ6tFUKZz/GRkCXwMGnm+vDDf6u9kRIKWwlmkO+X9eV52lpoQifyRSopI5svhfBga/V1FBKCOcpvzNKEtjLfmcUnuVQBgzaXRCGTtb6QCGBwqIOtD9mknkhVWOlgcpPFJdz6yO/lLK9sz58wI9n5E2guMhDwE0O1ahuU+8cDLvrFjgUe1R0IMvREGH/GcBpYDBZ7cfVPvN/5PjoaD6bkC2CiV2ojV1CpG7NEia6ACc29g+N3AXe1yTlHyaPlR5SnhmCkejIduJyCyLyu78m0076dG80PozU9sDrQ7lrco6qqU29scTdMP45FFb5nUDozyE1XRaxg9tqK0+pUA+cGg47xFoFo72oqbBfR+1xyAgm87u2xXq23xY+o7DIULKO0uk2XKIdZ5UqzLOILnOLHia8AL8Fo8XDVBuigxXF8iFFJifZnUywVpzUighuVtiiF9EwZA9yznrWFcmjE6ncwump1GdI5T1+G7jwEULYLqkRrjPV/66AtSI0J6YakO5O8Mt1/tJpmuCcP8nJ+dUR9BMi5W0qjAov4J4k6UjjltXjeJW9d+OcUcZlEDOpo6m26he0zFfucdo3j6/Iz9lExJ9G3j8G47d5pvx+IJZcixts0IRvCIkaCp08d7GYcTqhhi2M/oCMvMVtfp8dtDbAD+86cSYZTKdQjjSzET8Sjnu5N2ZnW3atyMmLF806oq6u3PMsybS9foz7swW/vRrNo0iXXhqdlmJ1yy03ZV4BfgtZEXIFVMHhcdWGyn8EYW71F74rt9ivmkW44AGLWV9ur6s4rEaISfe6DunCcM7uHxqtZ0JiUgs1NNVzohy5LwZdgoFZgCKdwViYhuPTOGwcp8XBj3Mhz1KO3ddUU3FWt7lML0fg/4rA30gCEGVrf7yHAAAAAElFTkSuQmCC)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.main-top .account.active:before,
.main-top .account:hover:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABSFJREFUWAntV2toXEUU/ubuJs2zSU2QUjUNLVJsTHzgH1GqxbbJn1aTNGk1bR4KURQl6I8iCMYHqAgiBgWDsrtJW41JK0SzRSVN1SI+EGlKULSSYE3Q0mLTpHnt7h2/uewNcx/bLjH+y4VlzpzHd74598zcWWDlWanAf6uAWGp4zSG5XsTwtAlsJ8gNxJnm71tpoOPjRnF8qbhLIlQdlk8x8HUpkemXWAiEsoNoO7RPXPKzX0lnXMmobO1DMqj71IbkA5y/mYqM8qWtZTaOHxsjssiObf1E5tR9JLPtearRt0K1YVkmgWf5q2RgkZAYhYFXjjaJ91idryFxdypAXc9K9R9tFvcT7w2+2rak7RT1rxKrR/e1ZQ+hmm55u0xgiElX205qpOPh3ABap01M0eaJ030XZQEZzEFx4jI6uLiHFvUKj2RXSzSFW8RFXe99ZXG0u8lYAQSPB5GXNhkVROJmDIUkM6cntUwSuyYF3nHrPYSkwD1uJwtAtYbwb2I/f1tnLGCG1SAn36fO3aMOQpbR9apsGL6j+UACk/Y83XFNMS6Rjn8zSwQnpp2LdBLaKuJMzP7zPlziVwcbMMXVJrxWf43y7dwpZoh5ws+D+piy6zYHIWVg4su6g5IJvFAg0V8TwTO0e2Lc/vac2z9QE5bPlZciRAwPLlvAo3OAV0fkAYLl24DaeCG5G/aqRtX06YgN7aw8Hc95nCUKa0LySV3vIMRMubpRkwtVf9H+l6ZLS2SVTitHjsW+AQLX63oHoYDA57rRlgmWPXIWd5FQv61Ld2RMdE+XvIn+fpWHIXFMx3IQ6m0UJ6lo1R1s2TRRt+5aRNgLIVt3tZG+fYFc9MRMf0ySfaGvRZzQcRyElKGoHGECjetOSmYzPzZxHjsq1lvgf7vtnrnAWCAHDYkZbGfwE247cwxXNONFt95DqPMOEeO362W3o9ox0sTjqkENgQ633T2nz0u99WKB+ke4mAy3nTmebxfCc8R4CKlAIxcR7iXiuB6BTqXJClqEplxWfTphZONgUvG+brBkYvMo+NSjp8KXEOZRwhV4CUmUqd2m7jksecoGpy2qqtMuJXsWpZ7EPDpGxqEa3fNYdx11TzHnsIVndKUpURmPY7Pbk0nUlt946k9s5fgFX+F5t489p8068IYjuJOVvpnNO07ddbZdjfEYhnlojtIWJeljxUUYsk713WF5H78FvazHGj3AkgV+Z6UiCGLgyD78JISQe0OyNAZUmQIHGFPqiaGC5P/g8FaGgWhPo/hZ+VR3y1t4PO6i2EYC1yid4xG4iADqBVl+SfZbHEZOCDrA+8pupecX9V4OVcnfJo5pP8QZpfMAmzyaZ2JofhXy5hfwAXNu84AIDAreAP/hSgt1I0EWVmWiZG4et1EOMXitbl+yLHCBr+hhVv1XVmmEP2cP86hwKpKZ6Dh4+EGcY/Dby0ZGYUuoO3bHkRbxCz+snyXTLQ7Ml2VkZeJGlvNRVqKLit+UlSv4vr4L60hsw6L3MglcYAk3UQHzfcdfgjl/YFVeY5/u4EG6gXPno/4pTAkEghIb4ya+cVqXZxbMQEV+PsZikzC7G4XjCuIhZKes7ZI7zUTqs8b2W8rIj/i2vmYx6Bfr20PKsXw/dwZ3K8v6Ic8Sxz8DP6Cr6YgzztW/awRQ1duE46n8U1ZID1Cn8+mzuJVNWcYe2MxRnbJr2ZgFBFA7NJf9Nkd5lrZZLkBdxsaoG2M/ngkEcbJ3vzijY67IKxX4vyrwLwh+ogNzvBKaAAAAAElFTkSuQmCC)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.main-top .msg:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA81JREFUWAntV81PE1EQn93udtvSAi3QUixaEIxGgWLi10Ev3rx59mjiwbvxn/Bs4t2DBw/+C2piiCYKYiABgkiRAv2gUClsux/ObNmy7e7ST3riJZv3dt68eb+Z+c10C3A+ziPQWgQYu+Nf4nG3nFYeMowyoSog2Om1LGfYTc6hfr43EV0kW5aAPs3HJ0GS3uP+eMsX1mGAQa8B1Ff3YyMvTYAoMlJKmusUGCNeBPaUNQpoTWnCqSORqb4b35+bABFnLBQ7JFInTIDOlMA13FJVcHK6jiiKk0WAR/s58dFRQdLFbZ1VvPHwqADZnAgKrq2GRmpFUWaQULdRwURyq0OtyopFGZY3UpDeOzSZYmRZfcOy8IzQ/8sXIJMzK5lONSlg0d2g3wsCJkZRVJj5tQ4yzsbBFWXpicCWMufrEuCoKMHSeko7YFRsx/pyJKCBIedZRBfodkMym68wzQo85yHJwtoOSLICA71dEBsPg+uEXhUHmnlx4OU3RkMw1N+NjiqYqhKILo/TZI6qTONNBvM5u7QJeSRdl9sJ01fC4Pe5TQcaFQi8A6bQQT9Go4Dc+bmyDQdHWD44WMZU5FAhORQlBJWAVPYAOM4B10eDEAn2NIqhrO9Fx2LoGDl4gI7OLicglxfL+1aLCkCkQCRbXEvCWmJX0x8Z8sO16ICWcysDdrK+Hg9Mjg+Ck+dgFwtlDh0V62gn5T5UbTi+vadV3dVL/dCPvHILPCz83oF6elQk2A3RsB+wlUAilYOVjXS1edt3U4SMmuTZD/SMwl0Pr4iM48N9MDIU0MysbmYaAkOHTgVEChQR4lV674RXwyEzrxwOFibGBmGwz4dpV7S0/93ZJxMNDduUGa04MPQuJ18WUTp8HgHWt7IaYFqPXgiAx1XS2Uzul0u7fKjORU1A/LHnWqUcFjQQlBYiLT3GQdGk/jUc6kUCy5BI54zbda1PBVQNZn5lC4rYPPexdC/ipX6fS2sPVD1JbBWUolDAC2MImB4ajYFiEraA7MDQJdTg7CpHB9AMKGTGR0tSnwaGANUaBGolXip1AhZGotca2CIyPMO9MAFqFYx+cf2gmASCeSc4+NjdqchGRcraBcYIitZ26fN7XR8eTEcf6/o0lwG1G4x+iRWn9D2rmcUmJtPGJP4i66WtV5PVgWZk1enr9bo0Myowf6rtsYWCtEpCamp5/CxoNxj9Qg3U8W9aTwmQ6uT4t/q+PjP49XYTX77hYyK4rnRG81ck851q2ywKv6PwFv4bWNbTV63UxndVLEoH+JH/2gpMG+85N9W5CPwHFZ2xfcVMR8EAAAAASUVORK5CYII=)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.main-top .msg.active:before,
.main-top .msg:hover:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA+RJREFUWAntl1tsVFUUQNe9HUrLQ1MeIYAKkecHLQgowochKkktfvDQL54BQpQ/PqBBEgkQCSh/JirGHxJjimkIBEgwJBADgfIIsQrhGQjPAqUFK8NQGOa491wuM/cxL2eEn57kzr1n3332WWfvffa5A12tywPFecDKNPzTX02lifFBwlCNoXsmvWLllsXNiM3BbfOtM2orFGj2VlNjEjQaGFHshPmMF4iEkGzevtCqDwCpZ55GaX5RMOnAts1iO12gzxqmlwGjc0t6LAsAJXNG376EJuGqDgD9nwmca43GUB5xldo7TU00Rt2Z29TdeeBKS3uPJ+D6ffirBR4/DbedTOp4wjSVWbwjKoEkDx9WnLTjEfxwGJquBu1YsbjZUlHGUnEXF+/CyRtBpVJJpN4wdRj07Qlx8dCCBog98VqPRDuZU9HDEY7oD61R+PYQdMa9isX2bPH9kkkOjC4+UgYTXoNDl72W7apKkjibDkD0MUwZChunw4DeXsViepXdYPWHUDtackcWevRZqN7sE7RqC3kyb46J0srdTtINqYLNH8Nbg4MDCpX0k/BsqHNs3Y/Bl7/BlXuOFfWSv0lUU62lw4FqugI95fTSVc2qTr0v9Gl4X9gk3tYFXpPdVb8Hzrdmt+IBUtVH4tKvJXy/nHQGzp0AK6ZCxfMC4chz/b47BNZ/BFWSEM03YZXAtOZRTjJO0/gnXGqD5e/B5KEw+FXJrf1w659cKDBjDMyThchJzr5zsKUpeSzkHigaAQ+lj9ISoHml7n5D3P6N5NX4LHkltYzPp8D8iY6VrSfg+yP5w+iorECq0CIeqReoE9ecvPpC8mp2jb7xth7lsK4Wpo10SoaGfecpr04+vYwhSx9cLruhf6+UZM54GCU1q+EP0GNmZD9YJHV+kIRV2x751HK3tiPJ/zcn0Cuy29bKynWn6HZtbIbPJsPE150rfao2KapahXVn3hXQvZI/hbasQH6YNXuhoxPO3oFPxkptGQS9BFiru1bcXafh/eGwVID10lYIlGyCloxAmWB0kraHsnMkWcOaC/AfoX4PTepsMGEQfplC/fgMWMFqR/k1gn3ZoO1EWBEAKhbGnSpfKA2TXA3lFYzbPte67gmZwujW1ZqjCezmjDtJofdc4aseyA75pzEz3e5zoFLDuJOEQbnvwu62fCAlPya/khO5VJ7xT+QP39iBjoaESo5xb7PbH3JJRXpW3fi7+DB5zad6CvXTUac/ekDybqS6/5zScJ4sY4zUXY7LFUhwv3KJ+8csy5rkt2mLUD803hbvXHDD51cqVV/+8xmpYdF7Mb4LgynVPF12XqgH/gV+dD/qM5fy1wAAAABJRU5ErkJggg==)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.main-top .set:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABB5JREFUWAnFWM1PE0EUn7cLGAMYI5EbCIl6sJEPY6LBoOGkJBjwgBE9eTdR73rCu19/gF4UEw5gJBEvGiEQTUzaYupBTVqoJ4zEiEAE2/H9Zrvbne22u1RbN4Gdmffx++3MmzfzSuIvntl48oyQdENI0a3ckIiawhjt6Wp9Ua5bKteQyYwwmUdSSs0HEUlB8lJvZ/tYOb6NcowSCVnHs3LHSwa+1BjL3klZW47vkoTgNJFYbrAdM5g5t7A0uLK1OC2laLbHvW/I1uOL09CFjS2HryCi2nTbhtFocvcqGbf5e4f5k+sFUYqZP8sKOcQz02LrhXqTSBuCJrNCnGVfbexrTQgab5TZ693d7d+9PgoIgcxPEm/5Kw96lf9ln0h8bJDimJdUwZJhZipNBh8GDGsV9M/UCFnry8tUtUcOe2NKI7Tzw9cdKmaqRYjjU2G68DRCkUjzTwSwS17ZJlFSYbpQNEK58SmXvKJNBi/A0ghZOUMOhmGBjEyCxkgY52uIjuAPbTWGbB3iQRpx5ymYaNseiSyTyUwG+uKpFoZ5+WRHy2s/3ZmF9CmRzTzgeGz3k7vHTNMcOtHR+tQec2YI0Z7NZq/agqJvJlNX39hVjAzsIIMOx2OyqJ+cAJjqKMr1FSEclBvx1Beevr5SDtTByTNz/EDTj1J6kCkd1lU2JZSBubKVSqvDmvVoPrZ0OiOyz1mgLZ+fD8RHb3fbRT9ZsbHZaOqxFHKkmNweB3G+uvQbTOZmGDKWIU3YDsK/w9mAA7gYfFhal6sQCCbJzyHUNJVt2TAXJ6g1L/+pw0Ej+WYgomHxM5L2h9W19bZjw0EcY0LyVtBOsJ3zGX0u3w7bCmeTC+pRg+++07gD8/1kORCCxAWV9AIVLQWlyzZB6gqbOaA4cLY6kpN1NS2di5DskPSCctGbT992ba6txgKzNdHLptp9/ZEIbYK4E9QYMAzjbtDXAABApWYKslBkGMw0jHs2GWA7M4QO5wJzNp5Khrk3q7iT4gm7mLC3thXAHDO8TKFyG9+3ezvb2tlXBvh4aqyX9R+CmViKDzp5xT3u184BcgaWI7+dsz3XcPp+lvkx3lGTbjKQOEuWVxMDrnZFm6oS8SBohFQNhlKlWg9jues+wGqENg7t/cW7iOumKj2MpTBdcBqho0RbHKTjLnmFmzRuYeZhNEIYRkWJIi6vUpkWMIDl9V5ACJUkKkpBxkNn+VBKE93n7Zz2Ogjso5RWtrlqBiHBvv2qVvjS8pDXOa61qJvsUgV5av59egDXTm73efXdfd7Or5Boew63TNlbGwGMmPEuk2bn7oRtW8dMKo1fOfxscDbtqW1rcWdgPz2/sYIl81PyjikgEtf4ywtSoBpjWTlkgFMWIRjiFzLcgZnAHN+119UftzFW7q9n8PsHu4a4r/7L2qMAAAAASUVORK5CYII=)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.main-top .set.active:before,
.main-top .set:hover:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA8NJREFUWAnNWEtIFVEY/s9oTx8URKuEjGjVoiBoGa5KKCjkRmWYblpF1r5WtQ+9q9ookhkN9iAh2xgtWgSBLlpJpHBbSVBo2tM5fd94zzBn7syd8epYB+aex//4vnvOf/4zZ5SsoRQG9AlPyQ2t5TDdKCWT4sit0S71sla3qlbDjkF9XosMixbbhxKNgc7RbjVSi2/bWUYPhUd68/KSlEBmd6yJkrldB2XPvSPqd6y8ymBVQpff6U1fPsoW96z6Rh8gUqe/y0ksUS+etip+KZpwHOlX22QM9sscgH3jzn3ysxrRWELdA3rHgpI79AHgBizKLJ7n4slpjLXQ+SpKCXH1FLN5Cs9exNkibN0mLdcHe9TXqJ8KQiQzr+QtjA9Elde1r2S6WcvRKCknCuLPTN5kCAqM8ipYFCxCjBlIC5ZGvp1CGTNAsQgxgP2YCcT5NohFzDCKRcjfTQzgDSoI8Bmzgw2kRYiDiPIxI8y7RgatwLJ2GfPM8qLMgEj61l7JyA+VlifakQ8krzzZD5AzyODnELSW74Q/V6prkFaTp6hTH1Zk0kM/lQynGkmvx+1Sr8P2aE/icQtD+q7nyQBipDUij3ZbypjPjCBYMkY7HPQaQVJNMlvr5VAMmcCEMupQNxhMaBCTR5ER+4R4UH5+L58gbDOC2BrLxJkZvqjmY+WhQepQFwuHFUwuxOS5SA7UUh1D+rj25EWWNcc/HsEpfiHZfaUEQA8A6oNVSkMjjElH2h2cTzezkKEpAzjkIlMzsw03Abg4YO+/XGXxbnZTFl2jsxobcgmC2jj4lzVCQjv44VbNVJhnMimGlFZpM+U4Wm6n7QTjn0nPtLPWmW24G/E+7rg9ahwptROk5tJAmIGR9I6l6Rk5dWlj+ok1sMmBlwPUK4XJyVuScQRW1VzEZMekl5aLOu/r5h9/ZAr+Wg1GQj2B46Mdx8cvyoOg5gDA+hKMgmECEKjaTFGWkYzwvduQIUgwQ+z8D4erRYikkFmLmIUrbOdeHCk+vqSuhnGCJTODCEKe+BtTeBOJFGuGsGSNeB9aiOjk2kVANyGG/HsfgawZ4iUOgc1704YUYhEzDGYRKt8o3bBCzm03eou1CBGcN0rsvemciXB/T/tYEaAKQrxJ8kaJ6RwMlo83EewI2JYi9lm6vEoXQWCWyvRJ33G3Vl/On6Sylo8NAH2Fp29dPjYkETTjPGbSPsfUbZeWcAY2tml1xZKlGVDuHzMi17AMSFuRwldRyGohQ081EaIhv5DxHRjL8gbdJT5sc6zWr2f0+xdbP3vDnSu01AAAAABJRU5ErkJggg==)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.main-container {
  background-color: #fff;
  height: 100%;
  position: relative;
}
.xmt-model {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #000;
  z-index: 99;
}
.xmt-update-tip {
  position: absolute;
  z-index: 100;
  background: #fff;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  width: 230px;
  height: 330px;
  top: 50%;
  left: 50%;
  margin-left: -155px;
  margin-top: -185px;
  text-align: center;
  padding: 20px 40px;
}
.xmt-update-tip img {
  width: 70%;
}
.xmt-update-tip .update-content {
  text-align: left;
  margin: 10px 0;
  height: 150px;
  overflow: auto;
}
.xmt-update-tip .update-content h3 {
  font-size: 16px;
  font-weight: 700;
  color: #000;
  line-height: 30px;
}
.xmt-update-tip .update-content ol {
  width: auto !important;
  padding: 0;
  padding-left: 18px;
  margin: 0;
}
.xmt-update-tip .update-content li {
  color: #333;
  list-style: decimal;
  line-height: 30px;
  margin-left: 0;
}
.xmt-update-tip .update-content::-webkit-scrollbar {
  width: 0;
}
.xmt-update-tip .update-content::-webkit-scrollbar-thumb {
  background-color: #62a3eb;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}
.xmt-update-tip .update-content::-webkit-scrollbar-track {
  border: 0 solid #eee;
}
.xmt-update-tip .update-btn {
  display: inline-block;
  width: 160px;
  height: 36px;
  background: #f2b844;
  font-size: 16px;
  color: #fff;
  line-height: 36px;
  -webkit-border-radius: 18px;
  border-radius: 18px;
  cursor: pointer;
  margin-top: 10px;
}
.xmt-update-tip .update-close {
  background-color: #fff;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfxJREFUWAnNlzFOwzAUhptUCK7ABegRkJhgq8QAC92LqnZg4S4gobZDFyZYisQEA52YmdmYOEAXKFLD/7c4ctPEfs9JJSylSZzn932xHaep1f5T6ff7x9i2NumE/LvY9g0jNgfD4fACx49RFN1vSoJw5J9gex4MBgdkR/whfD6fX/OYBQEPSZKc9Xq9n2VN+V8DR969P8YU+2Y0Go12ZrPZG04aNqZKiSzc4tzG7Xb7CxVHAL5bF2owPUFd6eFwwMfgnS+GgOCiwDI9UZQTOMJbHOJUwCVhN2CcpEjgzLMiwAppQ8YWFU2ONQEm1STISmjb5gqESmjh5BQKaCVC4F4BqUQoXCTgk6jX65dYRZ/MCsf4v5I+aqYib+8cAruB4y6/Ebdtx+JYBGcbsQCDHRK8bIoYzgYqATbwSKjgzJe+jnkiLRjvRBrri1P1AO8eCV+wrbw5MxBVL4h7wAHnJLTLKU7uEC/6ZyUScMDHeAwb2Vc5BMQSXgEXHKBWp9P5wJQ4DJVwzgEf3P7LxlhITLQLUqGABm4mQIhErkAIPFRiTaAMPERiRaAKuFYifQrM+CFBdpFRLSxGABP0U/J0LHrAwLUz2MBce1/uwg8TJA268zwZh8TywySO46tMw8rgzJs3HFgzpthu0klofR9WCrdvzPQE6vhSa3a73ddftTivvw91oKsAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  -webkit-background-size: 10px 10px;
  background-size: 10px;
  background-position: 50%;
  position: absolute;
  top: -10px;
  right: -10px;
  height: 22px;
  width: 22px;
  display: inline-block;
  -webkit-border-radius: 11px;
  border-radius: 11px;
  cursor: pointer;
}
</style>
<style type="text/css">
.setting-main[data-v-378337fc] {
  background: #f4f8fb;
  color: #8590a7;
  height: 410px;
  overflow: auto overlay;
}
.settings-content[data-v-378337fc] {
  padding-bottom: 10px;
}
.user-info[data-v-378337fc] {
  position: relative;
  padding: 8px 16px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url(data:image/png;base64,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);
  background-color: #f5f5f5;
  background-repeat: no-repeat;
  -webkit-background-size: 100% auto;
  background-size: 100% auto;
  -webkit-transition: background 0.3s;
  -o-transition: background 0.3s;
  transition: background 0.3s;
}
.user-info.needUpdate[data-v-378337fc] {
  padding-top: 41px;
}
.user-info .go-account-center[data-v-378337fc] {
  font-size: 14px;
  color: #8c8c8c;
  position: absolute;
  right: 16px;
  top: 38px;
}
.user-info .go-account-center .xmt-xialajiantou[data-v-378337fc] {
  display: inline-block;
  width: 17px;
  font-size: 20px;
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  vertical-align: middle;
}
.user-info.blue[data-v-378337fc] {
  background-image: url(/static/img/bg-blue.png);
}
.user-info.blue .intro-item .xmt-iconfont[data-v-378337fc] {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#52b4ff),
    to(#a3ddff)
  );
  background-image: -webkit-linear-gradient(bottom, #52b4ff, #a3ddff);
  background-image: -o-linear-gradient(bottom, #52b4ff, #a3ddff);
  background-image: linear-gradient(0deg, #52b4ff, #a3ddff);
}
.user-info.blue .free-sign[data-v-378337fc] {
  -webkit-transition: color 0.3s, background-color 0.3s;
  -o-transition: color 0.3s, background-color 0.3s;
  transition: color 0.3s, background-color 0.3s;
  background-color: #cef !important;
  color: #52b4ff !important;
}
.user-info.gray[data-v-378337fc] {
  background-image: url(data:image/png;base64,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);
}
.user-info.gray .intro-item .xmt-iconfont[data-v-378337fc] {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 0.25)),
    to(rgba(0, 0, 0, 0.15))
  );
  background-image: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.15)
  );
  background-image: -o-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.15)
  );
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.15)
  );
}
.user-info.yellow[data-v-378337fc] {
  background-image: url(/static/img/bg-yellow.png);
}
.user-info.yellow .intro-item .xmt-iconfont[data-v-378337fc] {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#ffb92c),
    to(#ffd865)
  );
  background-image: -webkit-linear-gradient(bottom, #ffb92c, #ffd865);
  background-image: -o-linear-gradient(bottom, #ffb92c, #ffd865);
  background-image: linear-gradient(0deg, #ffb92c, #ffd865);
}
.user-info.purple[data-v-378337fc] {
  background-image: url(/static/img/bg-purple.png);
}
.user-info.purple .intro-item .xmt-iconfont[data-v-378337fc] {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#9271ff),
    to(#e2abff)
  );
  background-image: -webkit-linear-gradient(bottom, #9271ff, #e2abff);
  background-image: -o-linear-gradient(bottom, #9271ff, #e2abff);
  background-image: linear-gradient(0deg, #9271ff, #e2abff);
}
.user-info .info__content[data-v-378337fc] {
  cursor: pointer;
  position: relative;
  padding: 16px;
  width: 100%;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
}
.user-info .info__content.unlogged[data-v-378337fc] {
  width: 260px;
}
.user-info .intro-box[data-v-378337fc] {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}
.user-info .intro-box .intro-item[data-v-378337fc] {
  margin-top: 16px;
  text-align: center;
}
.user-info .intro-box .intro-item i[data-v-378337fc] {
  display: block;
  width: 32px;
  height: 32px;
  margin: 0 auto 10px;
  line-height: 32px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  font-size: 18px;
  color: #fff;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 0.25)),
    to(rgba(0, 0, 0, 0.15))
  );
  background-image: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.15)
  );
  background-image: -o-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.15)
  );
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.15)
  );
  -webkit-transition: background-image 0.3s;
  -o-transition: background-image 0.3s;
  transition: background-image 0.3s;
}
.user-info .extra-box[data-v-378337fc] {
  margin-top: -4px;
  padding: 17px 16px 12px;
  height: 57px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: -webkit-linear-gradient(45deg, #fae9cc, #e7c697);
  background-image: -o-linear-gradient(45deg, #fae9cc, #e7c697);
  background-image: linear-gradient(45deg, #fae9cc, #e7c697);
  word-break: keep-all;
  overflow-wrap: unset;
  white-space: nowrap;
}
.user-info .extra-box span[data-v-378337fc] {
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #8b602b;
}
.user-info .extra-box a[data-v-378337fc] {
  display: inline-block;
  padding: 4px 16px;
  -webkit-border-radius: 14px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  color: #e7c697;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#262626),
    to(#595959)
  );
  background-image: -webkit-linear-gradient(right, #262626, #595959);
  background-image: -o-linear-gradient(right, #262626, #595959);
  background-image: linear-gradient(-90deg, #262626, #595959);
  -webkit-background-size: 200% 200%;
  background-size: 200%;
  background-position: 0;
  -webkit-transition: background 0.3s;
  -o-transition: background 0.3s;
  transition: background 0.3s;
  cursor: pointer;
  outline: none;
}
.user-info .extra-box a[data-v-378337fc]:hover {
  background-position: -88px;
}
.user-info .extra-box a[data-v-378337fc]:active {
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#262626),
    to(#262626)
  );
  background-image: -webkit-linear-gradient(right, #262626, #262626);
  background-image: -o-linear-gradient(right, #262626, #262626);
  background-image: linear-gradient(-90deg, #262626, #262626);
}
.user-info .info__avatar[data-v-378337fc] {
  width: 64px;
  height: 64px;
  margin-right: 16px;
  -webkit-border-radius: 32px;
  border-radius: 32px;
}
.user-info .info__avatar[data-v-378337fc],
.user-info .info__username[data-v-378337fc] {
  display: inline-block;
  vertical-align: middle;
}
.user-info .info__nickname[data-v-378337fc] {
  line-height: 16px;
  font-size: 16px;
  font-weight: 700;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.user-info .info__nickname span[data-v-378337fc] {
  font-size: 14px;
  font-weight: 500;
  color: #262626;
}
.user-info .info__nickname i[data-v-378337fc] {
  width: 16px;
  height: 14px;
  background-repeat: no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
  background-position: 50%;
  margin-left: 5px;
}
.user-info .info__nickname i.xmt-vip[data-v-378337fc] {
  font-size: 12px;
  line-height: 14px;
}
.user-info .info__nickname i.xmt-vip.yellow[data-v-378337fc] {
  background: -webkit-linear-gradient(0deg, #fed661, #ffbf3f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.user-info .info__nickname i.xmt-vip.purple[data-v-378337fc] {
  background: -webkit-linear-gradient(0deg, #d496f9, #ad62ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.user-info .info__account[data-v-378337fc] {
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
  color: #595959;
}
.user-info .info__account #go-bind[data-v-378337fc] {
  color: #e6a548;
  margin-left: 4px;
  cursor: pointer;
  text-decoration: none;
}
.user-info .info__account .free-sign[data-v-378337fc] {
  display: inline-block;
  padding: 2px 8px;
  height: 20px;
  line-height: 20px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.1);
  color: #595959;
}
.info__btns[data-v-378337fc] {
  position: absolute;
  top: 30px;
  right: 15px;
}
.info__btns a[data-v-378337fc] {
  display: inline-block;
  height: 26px;
  width: 58px;
  line-height: 28px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  text-align: center;
}
.info__btns .reg[data-v-378337fc] {
  color: #529fff;
  border: 1px solid #529fff;
}
.info__btns .login[data-v-378337fc] {
  margin-left: 5px;
  background: #529fff;
  color: #fff;
  border: 1px solid #529fff;
}
.info__btns .login[data-v-378337fc]:hover {
  background-color: #1b7cfa;
  border: 1px solid #1b7cfa;
}
.funs-list[data-v-378337fc] {
  margin-top: 1px;
  background: #fff;
  padding: 0 15px;
}
.funs-list.update[data-v-378337fc] {
  position: absolute;
  top: 0;
  margin: 4px 16px;
  padding: 0;
  width: -webkit-calc(100% - 32px);
  width: calc(100% - 32px);
  height: 33px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;
  z-index: 1;
}
.funs-list.update[data-v-378337fc]:hover {
  background-color: rgba(0, 0, 0, 0.45);
}
.funs-list.update[data-v-378337fc]:active {
  background-color: rgba(0, 0, 0, 0.65);
}
.funs-list.update a[data-v-378337fc] {
  color: #fff;
  font-weight: 500;
}
.funs-list li[data-v-378337fc]:first-child {
  border-top: none;
}
.funs-list li[data-v-378337fc] {
  position: relative;
  line-height: 48px;
  border-top: 1px solid #f4f8fb;
  color: #8590a7;
  cursor: pointer;
}
.funs-list li[data-v-378337fc]:after {
  content: "";
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 17px;
  right: 0;
  top: 16px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAiCAYAAABfqvm9AAAABGdBTUEAALGPC/xhBQAAAuRJREFUSA2tVttqU0EU3Xtarx/RnH6ATfpqT14UL1iqtRRFBOudIop3xQv6UERFixdEilQrgqhFxFIsiG/pia9J6gfk8hNeaGdcOzBhcnKSnkTnZfass/c6a2bPnhkiNGOMyuSKrxcL5UMy/pemQNYFojcgGQPzTDZXPPxPhEGhPAOig0IiSjXzy8V86WinpMqwWSDiFUsgpLCng0LpuMXa6Vmcg3x5nzbmLTR222BmNvjReDqVeGGxOL2oIT+VmCXFB0CwbIOgFD8zU0G+OG6xOH1VoXUM8qUREL2HtDUWqyplOp1Oes8t1qqvIxRHJGQvsvPBJRVcMZ/xU94zsVu1BkJxzi5V9mi9MmsMrXWDWamz6WTiqYuF7eoahsGBvp45YjXKTH/cb0brJ0GueM7FwnYkoThByTz21Agx/XaDNNEjLMsFF3PtpoTiNNDvfVGqkRSJm8Q+veQSWbsloTj5fd4Cpj5MzL9skPRamweZXPmKi4kdmZSwk4y/5ys7lkl/xg5Y735XTNf8VO89i62q0DpuTvV8VV28m4l/Wkx6behuplC6brHYhBLgb0p8M4qHwqRgvYNE3RSf2FMWZ9uyhdIWrWnekNlosWrP6nZbCuuCIwZIHtdOl4jvkVCmUN6KDIu6Da4DSvOWn0xMtKUw+FHexhFkKPQbqPMJ+UHsNczmK9tXSM+ttm26XNnN7MVCcSdKrmEP4gy6mu737rtxqyoMlkq7sGafyNA6NxAledlPeg9dTOyWCrO50qCmRjIcuhfTKW8yTCbjplnG1Tqkjf4IZXVnIrJ4Hgl4HEUmWGSW5YAlkEUdsH5/b1MyIWxYQ7wghgHOdnoF1E251SWFBLR3SaECRlHk78J3M5M5heNpSqYTp1Wn/D8v+u4gX9mPbMqrobaF5C5GoZ9EbU7HUeX6dBvSgyEyFAWdwJq9ch3j2goqjuC+gEKknFnjfXcMm7YjstpP5cUlD0487cZqYIfGX3eAKt7fnqVdAAAAAElFTkSuQmCC)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
  vertical-align: middle;
}
.funs-list li.check-update[data-v-378337fc]:after {
  content: "\65E0\65B0\7248\672C";
  width: auto;
  height: auto;
  top: 0;
  background: none;
  font-size: 14px;
}
.funs-list li.check-update.need-update[data-v-378337fc]:after {
  content: "NEW";
  height: 17px;
  top: 16px;
  line-height: 17px;
  padding: 0 5px;
  background-color: #ff4e4e;
  color: #fff;
  font-size: 12px;
}
.funs-list li.update[data-v-378337fc] {
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #529fff;
}
.funs-list li.update span[data-v-378337fc] {
  vertical-align: middle;
  display: inline-block;
}
.funs-list li.update span[data-v-378337fc]:before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #fb3131;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin-right: 5px;
  vertical-align: middle;
}
.funs-list li.update[data-v-378337fc]:after,
.funs-list li.update a[data-v-378337fc]:before {
  display: none;
}
.funs-list a[data-v-378337fc] {
  display: inline-block;
  width: 100%;
  color: inherit;
}
.funs-list a span[data-v-378337fc] {
  vertical-align: middle;
}
.funs-list a[data-v-378337fc]:before {
  content: "";
  display: inline-block;
  height: 20px;
  width: 20px;
  vertical-align: middle;
  margin-right: 20px;
}
.funs-list a[data-v-378337fc]:hover {
  text-decoration: none;
}
.funs-list .bg[data-v-378337fc]:before {
  position: relative;
  top: -2px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAqCAYAAADxughHAAAAAXNSR0IArs4c6QAABClJREFUaAXtWUFsG0UUfTPezcZOAxQ3wUqatogLoRTUgITKhWPhgFpaeqESUi89AOIWBBwqcwGknCmoiBtIFRXQhgtCggOCA6QKUoAWWpqWuGmdgJOmcdZex7vDn9msabaW1956u5XwWOv9M/P/3//+/zO7M8NwBxVx+LBeyef3OkLsZYw9TqYNrJl3RQhxmjN2siuTOcmOHVv1m838DXHVrT17niNjx+h6oJENBPACXaPGqVNf3MgXOxCRzXJrcvJdAjB6o2FBNIEZM0ZGXmfZrCN5tSCBqPvDgJA2SeAkK8nX5F+sEZHp5DjO59KQsIVzvk+mWWxA5MC28vmzQWMiCKAcM0YmM8yDGKPql7PTrYKQtkkdUldsQOQU2y4nSV2xAaGUkO+JthSpKzYghMB72bUDzICW/VTc+9ufC9+cyVV3LJvitgEzF19BElY7QCgd2tS5wnc/nF3d3jaNTSrKs3twv5hrkjuQ7Qqf+sselmz7n9Sxe6euJBQ94tL7dul45jGXDlTXAsNUYmsL3I1ZaeY6zZdNR6XTI9s0PLjZzawdWxN4aCihpB8meniNbqyutd6vtZ2tCTTglh+T7L6DV0UDnsi6NNj4tngEW5y/b+kZ3gtRG0zftvHtM5jjg+QBvD131NfeWpWAjMrPenZ5fiWWiHjmpk58guRXX3rVlu4EYqx7fFx9NMYVjprB5vMvoPT0s7V6s4QEIT/jPf7YI+IZ0jU5gZ4TH4PPN56S5ZiQ6XTTwiru1PKAqLttw/h5AjqB0i5Ngy8tgltWkfqCl7p3FJB1qNzK5v6eppYasY+ROraHauoACeW2CIU6EYnQuaFUdyISym0RCnUiEqFzQ6nuRCSU2yIU6kQkQueGUv0/jAgdpwh54OVbGDtUt9VRi8+RNjELe12jFF2FQz+fknVc4SpNHfSUZxgmnuqGvQJ0Dwk88VMZjHaLxn+s4K3jZfVkuRf25oGkou8+/io2fP+RMvfawfdh7npRte+e/xBnKnkYTMN43yFs78qEs7qOVFNArl+qKhBSvpxjmJleAE8J/DIt977c7PwjZyE3a6pH9M78qu5yRWRemEJuS0HVzwt368cSVVwsL7QVSOAYKZUquO5QKNYKNwSY7qZGimivJI3/FnJV4y6vGbbRW6M3oKtG20UbVuWmw9laf6sEm51f+YfMSdcTNEsWCgtyyQxUzumwlzm0/ir0ITf3qzQ2zucZHIdhW5+DHsPVkrCWkJr7HYJzrAw8SncXQB5FXMUybV7Trib6QJsI2JTuRbdRf0uWXFMY7O/Z5Gpt/E9AzPcExEt+NtMkEIsuCH9fO+sSTB+BMeqAYWBHB/tTLzfzPEYbwMnZQukdGpn76VKRKVur/NpSUY9gcqlvE4FJb+yt6HrCzVWGAh3TfjaYTr5BQEv1hda3/gvUtG2INYqigwAAAABJRU5ErkJggg==)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
  height: 21px;
  width: 25px;
}
.funs-list .switch[data-v-378337fc]:before {
  background: url(data:image/png;base64,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)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.funs-list .fans[data-v-378337fc]:before {
  background: url(data:image/png;base64,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)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.funs-list .download[data-v-378337fc]:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAAjJJREFUWAntWUsvA1EUPmcotbUj/AX8A1ZC2Alp7UtE0BCP1Jp4ROIRC/0B2kQsseUn+AueK9aYdq5z6NQ05s6tOV1Y3Js0c+49r+9+57TJnCJErO3D866y97EDCP1KQWeE6Z9ViPAEgNfJFmdlcWbiURcAdQoGV/LcWwDVrrNpxDkBfWnClr7V+bGHsHjNYYd8Vlbu7jc4vEom1PTSbPpeZxvnfO+40P1egjxVZqisqEoAk2FxtACVUv3s0NbqZMJKsHlQvGB9biE1ws+N/eIlXWiY5epCuFhfSI9W9wGBL0xVypTUx70CGAioakSnZle76eBtGDjfTAHd31+oPF+sPhVGxYdAWb9yVf0CgpbBgE2o6DPnK3VM+fq4TyPAjf3CD0txswj8jAAR8EwQ3+hKbTIeZWQEmMumJqICSHWmCkU2sTR5I/wtQCmLlkHLoJQBqb/tQcuglAGpv+1By6CUAam/7UHLoJQBqb/tQSmDxrc601uXFIDJ/9+X2MjgejatHdGZbl+P3lQhI8B6krDN1lFx2PNUnmXHwam1udQVy9LVMIAMjmZdXQyoArRbCo79/30PRgF85hvwKJifpsVlpXHuA39YNtmzPhD7K1eYj7bEiHhDU9YUzanzNK41joArPVd3WXkE/Oa6JwyKc4WB4zMtwCZMLJeUO8hj3TcX7ujbposR65xi0uLRI75yLl0QbYl5PEvz6R663en3Xwa6EPHOOSb9fhWanURvYBT8K9gnekek0naOOwcAAAAASUVORK5CYII=)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.funs-list .help[data-v-378337fc]:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA/xJREFUWAnNmE1oFEkUx/9vZpLoJuBKFGXZDR78OKxfB0FEBb3ougcFozHO4AyI4iqEiHjQ29wUQaImuiB78SPJEEE9qCgICrs3PSm6N9mLH4cZBUVknel5/mtiz/R0ujOdpDtal3pVr+q9X7+qelUzgu+sHL2nrf/n0QlBhmht8j3wqar0jmBD2apAdULRZrhigqvfFPBIThcXLewhS1qBDnew4oJN0w54bFBnfxR0ESjDSK1xQ1XbgpdzdqMjUe2IUMg+0EThDTZrGRnCbVVFSyN3MeBKVqQcKWBPTlegjHThNVKEmmegWAcqsRgum4GhA/YO6TxLkBRFRi2sCETjGsR99+hMt/wbGmDPHW3Rd9gqTA1lYDOjlggYKBfaaFNiuGQrphTBw0O6pqRI4x26afDHoMtnO/eq+ZGfW1uQs3UTBuwd0Q4tYY85hYRbZAxNJVo2SLVW3DqxXQp2OxBgdkTb3pbQyQhlrBI2kCiy9CTx0cPREDCrGnubw0ZCpQtFwgGtlUmhhsvGGK25vPlfF+KOs3dMBLmES3jlpPPDzPCKX5yDI5cVQwdWSdHppwJYye5At/IUWkWsdg6YTjker51e26/0DOoAd9Q+LmXD7G5PiqQWPBtIylK3bT4YkOdSfnYrprtNjmruc/qOnUtJtr0JP3HAISqeOpXTJgusmYJBL3/kqi+8qtZZioM8UTu47M312mha9HW3PylbvKzz0VBfzibln4GUpHhL/8y9eZyT/6sfEUmr8jDwsjwmgu5BJh8WctjCaB7iA+A3psExH+WeM5E2Ad4nmjC/r0s+ec1rCOicdHhYF1hl/MHI7iXwXKdusjJX6C8u736/+RMCtI3w6mvm7bKT7YOM6Fq7fzI1n/XrzbbymzspQKcxHqrlPFSX2LfS2R9QftGfxEIRbh6fMuX9xK9/wl150sf++N18NY8HZyZPGdAYWbYI17kv3xg5cBFoUxlXGo0PBdBc8NwrFxs5q9Mr/u5LyYu6Po9GKIDGbiKBizyRJQ8f3l1ffxR5K2u9oQEyj72k2Zs10/4SP+STzMI1/xE1TWiAxiRfwxdqpv0l5tAb/b/Le/8RNU2ogOd2yQPuxec1894SP8SkpUAlVEDjkT8Zx4+i4FX7LtwPRMdBoQPO+IG5DfjgB0CHV81fGn56d3/ogKe2yQceAt/8pongy2tgQwc0RuPwWWbB4/4uabhHjQ27RALYl5RnvFke2k7sms4u23LQOhJA45zLfN4FUWwChl19DZuRAbbPZ9LmibUJCHz7dFLydjtoHRlgdqOUCFi9n/meCpz7nPCRARonieYKoPmnoLBsMW47HQeVIwU80ymvmRP/5I/vPvdfGkEBvwCNnQe3eHKecwAAAABJRU5ErkJggg==)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.funs-list .question[data-v-378337fc]:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAYAAAATFf3WAAAAAXNSR0IArs4c6QAAA4hJREFUWAnNl9tOE0EYx/8ze2y3lBZoCxUPYBE1SqjGqBhFjBiMJnrh6Q280acwPoKXvgAvoDEmptEYvfDCcKVXEoyhHOSQBkoPu36zpcC29LBtU5yLdmdn5pvffKf5lllfLvrXlpIJMzU/YuXTHP9BY5JucqPve2cwOs43jfgLJneM/i9wQj82i6TGt/ynX7KNmefz9CqSX/2BzO8PgJk7WB0yDiV6FXL3WeJgSVnACSIpMAxN70Fm9g2srdUDgWSKAfXobXBv7/b+VsThc1zvhj70CFLn8bYDcuMQtKHHe+AKCA5A+xVX7VMofVdIw6wtoHIoDm3wHpjsLduPTLx/E4u4N0Imfwsrt7H/pGbfcgXqkZuQ/JUtVq7BPZtyI0pqfwLui+5525pHpgUL7lQFTuxUFVBMYIoX2sB9CI22qkmBGME9hICs1Sqa2LFQhD75pIiuzNx7SkVZx3DdHfJppXfM1WHrA9wmENGtU6SLVGSml+vmEhOZ4iF/m4KIVjetpolLhTEtAC32wM6bpWOV+kLzWoxSiEs4Ic+VBncA7OibRM7oRfbPR8r15s5Q6YPcM2K7B5hUOlRXvzHAbdHiOuLeMLKz72Bm1pwbchlq/4QrTTsFFHpNAQoRcs845PAktn6+Rm7xqy2VdwxCH35q5wgrPVfYqcFfKhaeWY2t5eCB82B7vMTKpijCM5Q+unZEWmYK5vrMTt/tQ2Ma5B5I3dcIJEK3zDqQXqB9LYpUn2N/JvvB9BipOQhz5TNNcV8puQZkWghS13Uqfzw2jICAV4eVWQLsK5FAuQaopEW5AMy9xwg+AHM5QYwlvuo4UnnHFSDznSSnv0BSSooIKjCYLq5D8hbhMPsUGQJQCt+xNWlu/qJJ9bX6AClF8OAYRexADakEXsLuWECRzYVrpELIr36jocrpqbiuJiB9DpDQCdtExUXN/jPfKUhKN/J/E0B+s6q4qjcJ8/STWe62FK5Iw7Qw5AjJpkCr1ioAMnB/nCL1BuUypdr65sZENgjdAu84U1FOuYkpAgsppK/iotYOkDI6z4Gp5Jcrn8oqJacGyS9sk2rtgts9KvMc3nYnZ41IgCwppnHjBF1ZU/RdYOyuavOTCEgpTF91RvETgCU5ZHWad1EKCV4i1sYqjpaeg1EqClJxHLws/H+aWQuvfNl8JAE1PAquO03e0p1dCDMzJrKLM4qaHf8HqjS1MBc0OpAAAAAASUVORK5CYII=)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.funs-list .about[data-v-378337fc]:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAndJREFUWAntmUFPE0EUx/9v26VQagkNQlL1gDExXjh4MfHgST15M9FPwBfwg/g9PHAxnjyYGA7eNIFgNBQbEVJrbANSaWnZHd8UNi4snX3rVFmTvqTZ3ff+++bXNzM72ympb2sF/PCegughlCohDUbUZJYlFDNPsn04YJEdaUA7Yjgq1CKzgdTGaiM1lTtdIq6kk1o4DcuVdE5Dp+16BGjbI6MK2lYwa5sguF816/Dr2/y8J9DcFdD0TBCyOtoDdvbRe/0cXmX1BEjm+k24dx4AY7kT/qQX1mOw9/JZBE5DeB/fovdqKSlPRG8F6Fffw/tSiSQNHN7GGvytT8HlHx3tAGubsY2qr59jNSaBFSAO2qbc/ZjqdmI1JoEVIM1eMuXux5yZcqzGJLACzFxbAE0WB+Z3iiU48zcGxiUBK0DkxuHeewSayEfaovwFuPcfA+5YJJbEQaqyYv+m2m7hcOUNVH0LcBzQ7GVkF24D4xNJWM7UDgfwzNTDcdp18XAYjFmSL3W9LrDXBNo/AX0eZ8Q1yPEYzReA4nScOhJPBrjzHajxg9f3IomMjtYu0GBFYQoozyeaOPIu3uNGtnnZSgoXJtegm+v6t0bYazyXAfqcsFY1JhIHOzw0GnWxXAZ4sC8bb9JmWztSJWSA+luHzfe5m/gjNY/HbLhb9QQTmgxQNxCy7rtlHFY/hDzm087yC6hdnvmBJRjHMsAg8TkcZYB0DmTHTcqeg1MXeY39Lc3yrKb8JFCaE5G7t+6CyleB4KXCdUX3adFoLRaXaoBQNgYH3Pwv3CNA2yr/BxXUG9ZpteMtYPv9ib/1BXmnP6u3+vVuelr/hvgFm826bm9weuIAAAAASUVORK5CYII=)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.funs-list .logout[data-v-378337fc]:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABbZJREFUWAnlWUuPFFUUPvd2dz26+jUz3TPT9AxK3GCiG2IQYaeJC4TEsNEY0IWJ0Y1bjXHhghD9By50xSTCRmNQdroDX4kJYoIkCMFhYLAfw/SjqvpRdf1OQXdmhnlUDVPRxLOYfp1z71fn3vOdxwhaR25V3SOC/FeVoufw8y4iZayjtgNfCReL3BaCflAkz8yUjG/WLipWfnG71t2rfO9z3/cPtu0u2U6XBgOflPIpkZCk6ymyTAOvyZVmO/ZekLgoZOLNXUX9j+GiI4ALDfuQ8tQ51+mNNe51yPN86vsN6vhXyCOHDDlDltwb2KVNncYLFgk5Mh+u9+ivgpZEQhytjKcv8GLBDgt1e5Y89avt9Iq1RgtvO3TdPUW1/tekyB9tasrd9IR5knKJZ0hLJWmylCOB89lpwYo1Soh9lYn0vOTFla8+7Q+8Yn2pTY5/gy51jlG1/9UqcKzn+H/R7503aKH3GfX6A1qCp+MQRVRkTLy2uFOz93u++ok95+DOXe68Ri3v0pb7PmXNwZP7aGqyAG8mttTfjkJCimclIvUVvm+O06PF3tlQ4HizP92P8FdRu8OBGI8wNukr9YLb7QU7VHHnworjXaO2d5kQVGFNIusppZ7nOJxhKmHp+FcjLcL6ns80FMksivKsVEJkcSFhhHhV3SjGiHYn0GeejEMYG3vwrkxyMAvSZCnSPpqcDPSlDMggkm0Y5QAbzueKlrwfhYUEZ7ZwIkhSXu6PLYIDFMAGD4rzuq6RxLsZ/W1sq4dCWNZep5QcJzMdTj/UomuUgO1baenmaZxQM5s1kc4eA8h31qg9/FFH2tutvxs8VMaKp45AgmoC25zM50UD+epU1jKD9DWjv0V7jA829GQ+eYCeTs+RFAbycQavuClxCDAxtmB18I1cqNnnQNiHq/UW9XsDYp670/8i4DqPXDLEDE0kX6RJ7eUATgHFQjYm7yFez1eK6aPI8/7o8QHSXKg6c8r3jy23HGQIZ11+S6FIKOTTZKD0ikfEl5WSeRzgAg4bAeTNAFIs1t0TyC4n4c1Zx+3RoO+hnlGUwEXlelDXYqoFhZjHdflwesI4DXAj6l8FcOgRPvI7VfeQEuqAElQhhQsXhwjlAsqCUOLHcsm4wEcaxzb/7zX/3SMm5QDA7c2OeBXAlUGC97NxnB0aMtSefRp4Hlfy95sxQ+Pg2zxIACigGcTysViAoSZbbtrUbq9f4DJ9ject0vTUwzTDUctEDTY5HAc4rtirtSah76FcRqfpYoasNPI/spCLpFBfsmmx1g62HkMCyGSM1UQNcO/B3R/HAQ4PT3erTfTXA5ot56lcyq7bCbY6Xbp2s07dnkfFYpbQ2r6PbPKJWF5W4+2efQPr5OIAyMfaRGZ6vFKgaYDbTNzugH67uhg8QLlcaOY0a4/sdJ0TcYFDRqIWmqoMjnMKx7qVGJhYzE7ng6FBu93NAdtxqUjFcu8YjOv2g0itTIdv8KdLGUQ27iaaMWB7ScKfT271ZNv9vY/mniVnhS9qke5QJem4i7AFNniQprYLYCs7z8PMCpU6D56iCA8COLjQi01JoVQrinEUXe7IfJAxbxZFmJY4g6CoabEHb0UxjqKbeDASsZE5okjH7lMyETRy8zgB8V0U4yi65oOi9m79PgmHsW0i0zB562aK6eZ7JvOzYQy3o5NEO8tF7t/1Duhm66EAX4fr80vBVtyM4YjPyHIx/TP3ANsBEMZmDO0B91XXbjbIBu1sJDxCuT7fICZrBpdKJc6Xi9YvQTUzHGDiPhY3WuBRvu/Ae417bT4y2r0rT5MTVtBCDNfkY2XPMThuKaZK+dEAMwDIisMRMNhxbGi4k6883uPRMpdbfK9MIxlQEIPqPxheWeC/8bHMEkbLRzBdvcj7jwDyh+EQHcRwkD/vtHDq43LLRTPGlQ3TTzCc1zRicIaW2niIvhLMf+nfEP8A/Jif5H3nMTEAAAAASUVORK5CYII=)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.funs-list .update[data-v-378337fc]:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAMNQTFRFAAAA////n5+/jqqqlZWqiZ2xhpSuhpKqi5euhZCxiZOxjJSth5enh5ath5KshpSqiJGqhpKnh5OnhZGph5Kph5GqiJKphpOph5GqhpKohZGphZGnhpGphpCnh5GphZGohZCphpGohpGph5Knh5Gnh5GphZGphpGohpGohpCohpCohpGnhZGohpGnhpGohpGohpGohpGnhpGohZGnhpCohZGohpCnhpCohZGnhpGohZCohpGnhZCohpGohZCnhpGohZCnpgRGRwAAAEB0Uk5TAAEICQwNExUWFxofICIxOTw9QEFESE1QUVJWWl9jaG1xcnZ3fX+Ckqeqr8DF0dPZ4ejq8fLz9Pb3+Pn6+/z9/pBHSBgAAAGxSURBVDjLjZV9Y4FQFMaPrWFraPaGbRgVRgllaOr5/p9qNdy3Yt0/cM/9dY/z9kQkrVp/PJ0HwXw67tfo7Lq1XSRr53m79Nu1q7mYZgWIZoN6OfldKtcHswiBpWW59gK+KV1RNX0s2gpWsuJwVFEfrozC2CqJlusJlkbe/zGWmFwL903g6PkB6g4m/E4LjnYuFTcOLBZHvNTPJ01fxseItEVo0IVlhAvt6Hgkn5imvB8dnFcDX87LEBjKWfKDNME25As+0/J9yi5gJ59uJNWjhw2wRU+qUeQm/YKZaOti9Qp0VuiK1hlq1MdAsHzEfuMOuG/48YdgHqBPY9S54T1aG5SC9LCO3rm9jjFNUWb7t+i7SQeQmt/RGzsoY0rzHdt29psnOoH0tNl32NFuToF32rR+ts/EQXre/rROZ17AwZcwfCER5JY/kLn+Oj3PwMTHF3fNgrl6JBWkxysejJQeFRTTIyf8DJgmXClhPpiWUG2KPPCvKTJtlgMe2izTuBnw2LiZUciAx1HIDJcKsuFSx1UB+bheFgBNEIDiklJYpIrLXnEhVaSZLkhzcbH/5/XxC+gvTbgPDmPvAAAAAElFTkSuQmCC)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
}
.new-ver-alert[data-v-378337fc] {
  position: fixed;
  width: 137px;
  height: 137px;
  left: 50%;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  -webkit-border-radius: 10px;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  padding-top: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-left: -68px;
  margin-top: -68px;
}
.new-ver-alert[data-v-378337fc]:before {
  content: "";
  display: inline-block;
  width: 62px;
  height: 45px;
  margin-bottom: 25px;
  background-image: url(data:image/png;base64,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);
  -webkit-background-size: contain;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>
<style type="text/css">
.features-wrapper {
  height: 410px;
  font-size: 0;
  overflow: hidden;
  color: #8590a7;
  white-space: nowrap;
}
.features-preview {
  display: inline-block;
  position: relative;
  width: 378px;
  height: 410px;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 14px;
  vertical-align: top;
  white-space: normal;
}
.features-preview-slider {
  position: absolute;
  width: 340px;
  bottom: 20px;
}
.features-preview-slider .features-swipe__item {
  width: 340px;
}
.features-preview-slider .features-swipe__pagination {
  padding-top: 10px;
  padding-bottom: 6px;
  text-align: center;
  cursor: default;
}
.features-preview-slider .swiper-wrapper {
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
}
.features-preview-slider .swiper-pagination-bullet {
  width: 6px;
  height: 6px;
}
#xmt-options {
  display: inline-block;
  width: 220px;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 9px;
  font-size: 14px;
  vertical-align: top;
  white-space: normal;
}
.features-list {
  list-style-type: none;
  border-top: 1px solid #e8e8e8;
}
.features-list:first-child {
  border-top: none;
}
.features-list-head {
  padding: 15px 15px 7px;
  color: #aaa;
  font-size: 12px;
}
.features-item {
  position: relative;
  border-bottom: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
  padding: 0 15px;
  line-height: 50px;
  height: 50px;
  cursor: default;
  white-space: nowrap;
}
.features-item.active,
.features-item:hover {
  background-color: #f2f9ff;
}
.features-item.active:before,
.features-item:hover:before {
  border-right: 9px solid #ebeef5;
  left: -9px;
}
.features-item.active:after,
.features-item.active:before,
.features-item:hover:after,
.features-item:hover:before {
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  content: "";
  display: inline-block;
  top: 17px;
  position: absolute;
}
.features-item.active:after,
.features-item:hover:after {
  border-right: 8px solid #f2f9ff;
  left: -7px;
}
.features-item.features-item_dark .darkreader-switcher {
  display: none;
  line-height: 30px;
  font-size: 12px;
}
.features-item.features-item_dark .darkreader-switcher span {
  vertical-align: middle;
  margin-right: 20px;
  cursor: pointer;
}
.features-item.features-item_dark .darkreader-switcher span:before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  padding: 2px;
  margin-right: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -webkit-background-clip: content-box;
  background-clip: content-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: -1px;
}
.features-item.features-item_dark .darkreader-switcher span.off:before {
  border: 1px solid #ebeef5;
  background-color: transparent;
}
.features-item.features-item_dark .darkreader-switcher span.on:before {
  border: 1px solid #1b93fb;
  background-color: #1b93fb;
}
.features-item.features-item_dark.expand {
  height: 80px;
}
.features-item.features-item_dark.expand .darkreader-switcher {
  display: block;
}
.features-help {
  text-align: center;
  float: right;
  width: 18px;
  height: 18px;
  margin-left: 5px;
  cursor: pointer;
  background: url(data:image/png;base64,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)
    no-repeat;
  -webkit-background-size: 100% 100%;
  background-size: 100%;
  vertical-align: -3px;
}
.features-help:hover {
  background-image: url(data:image/png;base64,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);
}
.features-switch {
  position: relative;
  float: right;
  height: 24px;
  width: 38px;
  margin-top: 13px;
  cursor: pointer;
}
.features-switch .switch-bg {
  display: inline-block;
  position: absolute;
  margin-top: 8px;
  width: 32px;
  height: 8px;
  left: 3px;
  -webkit-transition: background-color 0.1s linear;
  -o-transition: background-color 0.1s linear;
  transition: background-color 0.1s linear;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
.features-switch .switch-handle {
  display: inline-block;
  width: 14px;
  height: 14px;
  top: 5px;
  position: absolute;
  -webkit-box-shadow: #cacaca 1px 1px 3px 0;
  box-shadow: 1px 1px 3px 0 #cacaca;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  -webkit-border-radius: 8px;
  border-radius: 8px;
}
.features-switch.on .switch-bg {
  background-color: #d7e8fb;
}
.features-switch.on .switch-handle {
  background-color: #1b93fb;
  left: 24px;
}
.features-switch.off .switch-bg {
  background-color: #ebebeb;
}
.features-switch.off .switch-handle {
  background-color: #dcdcdc;
  left: 0;
}
.features-popup {
  position: absolute;
  opacity: 0;
  display: block;
  padding: 8px 10px;
  line-height: 1.4;
  color: #fff;
  -webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
  -webkit-border-radius: 3px;
  border-radius: 3px;
  background-color: #333;
  right: 15px;
  top: -43px;
  left: -9px;
  font-size: 12px;
  -webkit-transition: opacity 0.2s linear;
  -o-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
}
.features-popup:after {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  bottom: -4px;
  right: 27px;
  border-top-color: #333;
  border-bottom-width: 0;
}
</style>
<style type="text/css">
.page-header[data-v-7a24b700] {
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  text-align: center;
  border-bottom: 1px solid #ebeef5;
}
.page-header .page-title[data-v-7a24b700] {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #8590a7;
}
.page-header .page-back[data-v-7a24b700] {
  position: absolute;
  left: 15px;
  color: #8590a7;
  cursor: pointer;
}
.page-header .page-back span[data-v-7a24b700] {
  vertical-align: middle;
}
.page-header .page-back[data-v-7a24b700]:before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 17px;
  margin-right: 5px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAABGdBTUEAALGPC/xhBQAAAthJREFUSA3NVt1qE0EUPmcSFF8iPw/QbnLbbHrnVSmpRWqlYESKiIiKioh/oCIiKioWEWlBEG+kVKVY/EEvks11En2A7PoQam27x3Mis84mm2QTb5ybOfPtmW++mTlnzgL8b63a9A5V6q1nRKREW/JfBNbqrcM+0QpzKCZOMmkZRyWsNtwjPHeZSQIORHzeljksqdN0FzvJAHCHkDYC9rik1YZ3FICemMqYbFshLti59MuhFDqN1rEoMlB4UMhEVOxLqTbd40SwZCrj7W0hwrxtpdf0DhPa6Nc7DfcEEy2xT3BEQgaIB4q5zCtzbuBggqbN4XCSfP+hibGqX0ol5grjqTcmLnbfM3TqrdNRZIBqfxRZX0KOszM+wP2QAoRNRThbtNLrIdwYRCrkODvHZ3bP8JPT21QKZwv5zNsQ3jHoIqzUvfO+T3dCfog/+dxm7PHMRgiPGIQuhePsgk9wK+THZElQMxO51PsQ3mMQxGGl6V5kZTdNPwT8gQksTYylPpp4P7u9Zb6AyxBBRgqn7bF0bDJZCCsN7yqQf81clZV9VwqmC1bms4nHsTmn/0Z/nAmDfNqXwql1hR/K66aznJ9sedJKfzLxQXb7DO1c5ga/GJdMZwLagz6tO1+9vSY+yI4VNglQpUIu9WEQmXwPEQoggQ3g3xY7aO3Apn1FK/suwHoYXYTiJ6nXnS1/Um9QtnSlnhDaVuYuF5yzYgeNYDcvslaru1MBFmFEKtR+8nx1vjjyFsrz1evFiVSoCe189gEqdUqPpecysIsTYbX25VvJxLXdV6F2khLAcfpIj6XniVsEMDeZz77uwM1hb1uKFEQWKZznOA6KVCyFehkpowT42Kx8rHVbyihn1Kr4DUUoEwYV+qEJhVR+RfhynnYo3VGoFvreskyOahyny4wvcqxyVOlGCQJ/aiSFmqL9O4e4wkoVF/0XHJtl/W3k3ml6ZfOHc2SiXhN/AzLsKx6i8daEAAAAAElFTkSuQmCC)
    no-repeat 50%;
  -webkit-background-size: contain;
  background-size: contain;
  vertical-align: middle;
}
</style>
<template>
  <div id="app" class="features-root" style="width:600px;">
    <div
      class="container features-page app-view"
      userinfo="[object Object]"
      phone="750690217"
    >
      <header data-v-7a24b700="" class="page-header">
        <a href="#/me"
          ><span data-v-7a24b700="" class="page-back"
            ><span data-v-7a24b700="">返回</span></span
          ></a
        >
        <h1 data-v-7a24b700="" class="page-title">功能开关</h1>
      </header>
      <div class="features-wrapper">
        <div class="features-preview">
          <p class="features-preview-desc">
            直接将导航展示在Chrome插件中，便于查找对应网站&方便操作。
          </p>
          <div class="features-preview-slider">
            <img
              src="http://qcybnir4u.bkt.clouddn.com/1593962724846.jpg"
              alt=""
              class="features-swipe__item"
            />
          </div>
        </div>
        <div id="xmt-options" class="main-content scroll-wrapper">
          <ul class="features-list editor-features">
            <li class="features-item active">
              <span>导航面板</span>
              <span class="features-switch on" style="margin-top:0px;">
                <i-switch size="small" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
