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
  color: #8590a7;
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

#app {
  position: relative;
  margin: 0 auto;
  color: #2c3e50;
  width: 630px;
  min-height: 460px;
  font-size: 14px;
  overflow: hidden;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-perspective-origin: 50%;
  perspective-origin: 50%;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: width 0.2s linear;
  -o-transition: width 0.2s linear;
  transition: width 0.2s linear;
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
.main-content.main-content_tastehall {
  overflow: initial;
}

a {
  color: inherit;
}

.placeHolder {
  height: 89px !important;
  width: 89px !important;
  background-color: #fff !important;
  border: 1px dashed #519fff !important;
}

.platform-list,
.platforms-wrap {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
}

.platform-list {
  position: relative;
  overflow: auto;
  height: 484px;
}

.platform-list::-webkit-scrollbar {
  width: 4px;
}

.platform-list::-webkit-scrollbar-thumb {
  background-color: #62a3eb;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

.platform-list .category {
  position: relative;
  margin-top: -1px;
  overflow: hidden;
  height: auto;
}

.platform-list .category.collapsed .category-bar .collapse-btn {
  border-top: 6px solid transparent;
  border-bottom: 6px solid #d8d8d8;
  top: -8px;
}

.platform-list .category.collapsed ul {
  height: 0 !important;
}

.platform-list .category .category-bar {
  position: relative;
  height: 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 16px;
  padding: 4px 0 4px 10px;
  font-size: 12px;
  border-top: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
  background-color: #f2f5fa;
  text-align: left;
  color: #8590a7;
}

.platform-list .category .category-bar .collapse-btn {
  position: absolute;
  top: -2px;
  right: 0;
  display: inline-block;
  margin: 10px 15px;
  float: right;
  border: 6px solid transparent;
  border-top: 6px solid #d8d8d8;
  cursor: pointer;
}

.platform-list .category ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 660px;
  -webkit-transition: height 0.15s;
  -o-transition: height 0.15s;
  transition: height 0.15s;
}

.th-platform-item {
  display: table;
  width: 90px;
  float: left;
  height: 90px;
  border-right: 1px solid #f8f8f8;
  border-bottom: 1px solid #f8f8f8;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  color: #8590a7;
  font-size: 12px;
}

.th-platform-item .platform-item-info {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
}

.th-platform-item .platform-item-info .hot-tag {
  position: absolute;
  top: 3px;
  left: 2px;
  width: 25px;
}

.th-platform-item .platform-item-info .new-tag {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 35px;
}

.th-platform-item:hover {
  background-color: #f2f9ff;
}

.th-platform-item .platform-logo {
  width: 30px;
  margin-bottom: 10px;
  position: relative;
}

.vote-link {
  width: 50%;
  line-height: 130px;
  float: left;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  color: #1b93fb;
  text-decoration: none;
}

.vote-link:hover {
  text-decoration: underline;
}

#taste-item_shop .platform-logo {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

#taste-item_shop.active .platform-logo {
  -webkit-transition: -webkit-transform 0.4s linear;
  transition: -webkit-transform 0.4s linear;
  -o-transition: transform 0.4s linear;
  transition: transform 0.4s linear;
  transition: transform 0.4s linear, -webkit-transform 0.4s linear;
  -webkit-transform: rotateY(1turn);
  transform: rotateY(1turn);
  -webkit-animation: shopAnim 0.4s cubic-bezier(0, 0.38, 1, 0.61);
  animation: shopAnim 0.4s cubic-bezier(0, 0.38, 1, 0.61);
}

.func-search {
  position: relative;
  padding: 15px;
  border-bottom: 1px solid #eee;
  font-size: 12px;
}

.func-search .search {
  width: 426px;
  display: inline-block;
  background: #f4f8fb;
  padding: 0 5px;
}

.func-search .search-change {
  width: 248px;
}

.func-search .search-list {
  position: absolute;
  top: 50px;
  width: 90px;
  padding: 1px;
  background: #fff;
  -webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.14);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.14);
  z-index: 99;
}

.func-search .search-list li {
  height: 30px;
  line-height: 30px;
  color: #8590a7;
  font-size: 12px;
  cursor: pointer;
}

.func-search .search-list li:hover {
  background: #f2f9ff;
}

.func-search .search-list li:before {
  content: "";
  display: inline-block;
  height: 16px;
  width: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -2px;
}

.func-search .search-list li span {
  display: inline-block;
}

.func-search .search-list .sogou:before {
  background: url(data:image/png;base64,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)
    no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
}

.func-search .search-list .toutiao:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAFmElEQVRoQ+1aTXbaVhS+VyCcQZPSWc+pcfGkgVHdFcReQfAK4qwgzgririB0BaUrsL2C0hUEj3DaQahJz+kQ2x20COnreU8/fnpIPElQcB1xjgdI4t373e/+y0yf2Ic/MbxUAn7ojJcMlww/MAuULv3ACJ2DUzL8f2F4+CU1q9Xq16q+rsV7TFxXrwHYV7+vleFfv7L3mPF5XiWJuUlE4m/pjxHwhzrVZ59Vv82vJNWJeG9pDVd8AF827J+jM/l+KrlKzHy5U8MqD7zvZ5WAN8kQgF+YaY+IY4ltlTrdG4ZB9Hv7atoUSfLvJ7VjIjpioljZCYELw8RKDWgAiyfRNaDJzC+SDHV/AHveQfvjrK8qKcrYN384g7wMD3dqJ0z05j8HDM87iITMZiOy7R4zPzMpDOCn9tg5Mj2X9f7ltt0li18VAwxcgMh3F2bJABOOk+KsdTWN1fVhw+6bAeN668Zp7k4CGQtQpTUurSvnB/Vni+SaXRp01hpPD3VX8yrU10EXAQzgZXvs9MLzRQz/89g+pQw9gYh7C+7x07F7puq3HMNEBKLv21fTE82KR8z8o3otL2CRfNpjJ9brXjZqpyB8sShbC6AEnKiGCvUQXuBV+DStFTUzHJwk4lNPKsOGjNEoGxYAHGN3uF3dZ+JO66MjsjQNG/aR+E5Mz8V3E1BY9ArMC3NBZsBEmGDqfNf+k0Yx92nYA2KWvXZewME5IybqsYtz16Luo1uno8ezmIwqFbuelLGlkZjfEHPMU9JSQQ7A8ogRAXeANSEFASu6YcBE3dqNc25KYtJ1LXqbFWgoxAhYxC95nszOwqVlY/DY7iYV9uUBh/FD51u30yMT6PeNSscjq5PWZBQrSymunJT6lwUsOyiRjLQGxFR/AxI6It5BqIv5Oa1LMzLsC8Ng68Y5UC0uy8cTe6SWpmKAcU3gPuB1k4C+37FfgEjU/T2hRxaXX0mnxUDv6dh5OV+P+V14LS/gpMwfnuUDZVEKEzcdQh+Qd9Yau+e6B6wEsOywgJ4FRE2CZ3Hzzvr5s3QS4DmgwAWB+tFwMDcYYEKgHpHXr8AfIFy2jompUzCGTREUJhpctMZObKUj6miwjyKZ3YERW8I1+W0QKscVD3I48I03z6huFJGdRfmKsi7xBEyxAYMJkzsZcf1TY1g09MTsl6BA2dhPZ7ORXpOzmEbWTcvy10qgc13ZsCKEZ+VNYOJ3MRmaUumAEzqrLIBMz6jKLIph0zmL7q8VsOiKuGY/V/fDAMSu2Hd3ZeVaBLC6RU3aQxPQhL81SdyYpjIsEpR0aXGAnimZ95NmWL9U1d4x3NdekECiWLP4TJ+uIhkyauILcyK+JsYzeDhU3TrOHl4jyAHSlqLvTpmDIz0KbS2Bi61bZ1/vhOTKVxgj43R155a4hodODFgwmOheEAuJBDmXSm+/oiyNa8ulfb2Rj9c+TLZunN25IWCnJgaFuT2VbqBgxJP1fRFgeX863VWT56L4lV6Ql2F9YE/LitlZnt94hJ6SBTAB/dbYuVst+WNlbGxVmc4FOD1u7Q+kvcQS42QWlnXD6AyZGJaswT1Utx5Jba8xhmUdDrqqcEpKml5UNvSYMbO8mN1MDPsFfVLxEHVWInuLNW9Spk6vwwkJQQe0aHfkP5u8NBiGsQx0K0C0j/IV5aiLCs4YEJQFX8ZBP61OFwL823b1WbJyiWL8pcGSii7TiGSN4UDRh/VGMVfSWpWVN3lOCXiT1l+H7AfBcLCvjq2Pw9dCkRHDeTxvp7VqFvRXn3IVHM7h/nusiTogCPmP/poNTBvN3GXJCEx9yeZPKnObBwvuQJ2axAqmyOtPoy45HmCxbk2jXz2nyOYhhx5re9T4b0tr02RNgkrAazL0xsSUDG/M9GsSXDK8JkNvTEzJ8MZMvybB/wJWHIWmx/j3wAAAAABJRU5ErkJggg==)
    no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
}

.func-search .search-list .zhihu:before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAFCElEQVRoQ+WaTVbbSBDH/yXeE8v4403MbpwTTDjBwAniOUGcE8TZxLAKs8KaDeQEkBOEnCBwApwTBHYW82zsJc6zKq9lZGSpWh/+og1e2rK6fl1dXZ+EZ/ahPLxl5+YtwDWAi93m1k6e/5rybCbgwn83ry3P+0pEVSU4A196zUrdFIg8cqQCFw5vq5Y1vCSgEHrxP91m5SzPQqY8mwpcctxTAt4GAjNj0NurhOFNYckkRyKw0u6GNfwZftM6H2fFkQhcanWOieh9ZOvW9jhnAf4ZXFQB9Mi2i/0PxX6m82PgQ1oNq5t5g/lyWma+WKY7KrU670FWldh7vei9YuBHb2+roQXWHOeFyMFA3/Ps7f5+8Sr8wrLj8kIWEF8yVpYe2HFvI65oobIw82e140YAlx23BuDrQgljL4ubx6NpOOp7lwNuCHDh6LawMRzexiH5gkHnwvd1Av05CUzA1wCdpm0SeXTV3X859Zyk4W6zkhocSWvF36Wx4fLhTR0Wn2S9nctO5xygvx+en/0mfxTgUqsT873w6F1UGwHgWgMXDv/f2bC879OhJF/3mlt+liQfnTXWsHRZjYi2+x9ftp8csJQoJB3lYAPiJrAmNhzWLoOvPbJqSZp9sOFodLQmwOWWe8bgKyI6z5Pc667/NLeUzZUAS3dLeQV99sBSjJx1Ex/FD2cVTmfDDPzba1YO8r5HPW88sKYE9JSBpUDlSWv4mQFLeTODP/SaW8drYcP3qeEJmDPVnRmoRot8aaCqvEPM41CV6HPY56/80io7rqpyqGrHaj6Mb929ymS9lQLLVcrlcitt95qVoj5MXWKktZqyTnwDw6HjSjU8LssiZz04XOkIYPgiz7kY2Zu1oLC/UuA8QmqjrDkbbUYDS9URYPbU0PjQUi4HzdcoN1rDJafTINBR2BTmCTqM17BY//Ks3f7+H0LtOtsNYbaGhXKucjEqWsOvX9Us5aHoNhgLLAUpzPjhWVS32C/iVz2i3bzQxgKXHPeAgE/T9gsVH1eDjqPfEs0JbS6w1J0QzFTXB9ZZtJHAojtiDIig5rZiLVYG2p5t72YZkzASuNzqfAfR1BReMNkjN+L8QbZ2r1nZTrurjQNOyKgmkz26JIQZp729yrskaOOAZe3Gm22lltsmwl9RuLSKplHAcuwMSHVo5Yut4V073CgPwWvnvOKt19nyYbFPdh/nZ+6ulxxXzVvG0seRZ7+KTuMouPFAKp8T4UXEfU0l/eHfJGD1e7RQEPzH39i74REItfQBnJQpnrAgkt+9FyRxqjZhOEbUsg5YrTWKhK1qlJnBx+mgD3l64tjSZBfFAbXxrzrtpm2WzpaTgAPTUaZlWd6RdNqSvUAGDY+PzN2lVJnMM2SqOpMgvJnstaYdkwgMtMFQl+GMc9oZgKVb2T/KjIG3aVezBBO+PY9tTdmzf3NrNawGaohroHGZ2C8DhyaEJA2qXjYxtZn80Fb7IaCtSsIJo4fuiW43Z8l7/UFzGioNvYjao05KKeeenBKVrLDVyJuOisCllh4WkVpyWvQ0fQuPJ/yyAovNOsYAxAezdjdiwEmwfgq4ae9kPcrSZqjwUzcCJT0/FcQwvo027fo8608Bp8AOPIt28ua4eU6ACOy4B2A0lHnlGcXQresDBw5csll1QYFw5tl2Y56dnRXcr6AAWNTaPnB4NlodWyLuq7nK4GabVVgT/5c5tDRR+FlkenbAvwGvWB95AySkagAAAABJRU5ErkJggg==)
    no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
}

.func-search .search-list .weibo:before {
  background: url(data:image/png;base64,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)
    no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
}

.func-search .search-list .qq:before {
  background: url(data:image/png;base64,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)
    no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
}

.func-search .search-list .baidu:before {
  background: url(data:image/png;base64,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)
    no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
}

.func-search .search-type {
  cursor: pointer;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  float: left;
}

.func-search .search-type:after {
  content: "";
  margin-left: 5px;
  display: inline-block;
  width: 8px;
  height: 16px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACvElEQVR4Xu2Xz2oTURTGvzMJqYu4EoQWrBkhm2ZhO7gq6cR2VdBFl/55AIsvYH0C6xOoDyC6zEKhq+okWQhKEhctQsAZXbQi6MYKVpIcmcRS1GAn994kDHNmfc53v/u737nDJST8o4TvHwJAEpBwAjICCQ+AXIIyAjICCScgI5DwAMhfQEZARiDhBGQEEh4A+QvICOiMgNcIFi1wRkdDt7edwbvlgv1JVUcrAZW6fw2ExwAsVQM6fQx+PZPtLOXz+UNVHS0A4aJe079FjIeqBjT6dtKZtLtYOPdVQ8PMJejV/Q0i3NMxMmTve0xR0Z3L7Q/Z90+5dgKOFL26v0mEO7qGTuxn7HGKiqWLOf/E2ggFxgCEa1Xq/gMQ1iOsq1TCjC8Ey3Wd87tKAgOajAJgZqo2g/BSvG7K4LEOf7M4vVJ0Zt+Y1DYKIDTGzKlq0y8DdNWUUWb8IGDVdWzPlOaRjnEAoXCr1ZraP0hvAbisa5iZ20TWmruQe66rNah/JADChV7sfM6mfn5/BaCgYbwLxk3XsZ9qaPy3dWQAepfibjCNQ64BuKCyASasl+btRyq9UXtGCiA04b0NbOpwDYSZqKb6dwnulhx7c5geldqRA+j/Hj/MMboVIpyJYpIZ90uOvRGlVrdmLABCk7X6x0tdam8DdPoE00/cBfuG7sai9o8NQD8JfomBLSKcGmyQny3N22tE1Im6Ad26sQLoQWgEV5i7ZSJK/2X+5XS2varzslOBMXYAv5PwxzM6fNZ2M9mV5cLZA5VN6PRMBEDv73D8jDbyrFWFMDEAoeFqI7hNbJWLzuye6gZ0+yYKQNe8iX4BYIJinDUkAXE+PRPeJQEmKMZZQxIQ59Mz4V0SYIJinDUkAXE+PRPeJQEmKMZZQxIQ59Mz4V0SYIJinDUkAXE+PRPeJQEmKMZZI/EJ+AVjCKBBICQWwgAAAABJRU5ErkJggg==)
    no-repeat 50%;
  -webkit-background-size: cover;
  background-size: cover;
  vertical-align: middle;
}

.func-search .search-type img {
  vertical-align: middle;
  width: 16px;
  height: 16px;
}

.func-search input {
  border: none;
  height: 30px;
  width: 324px;
  background: #f4f8fb;
  padding-left: 10px;
  outline: none;
  font-size: 12px;
  vertical-align: top;
  float: left;
}

.func-search .input-change {
  width: 195px;
}

.func-search ::-webkit-input-placeholder {
  color: #c2cfdf;
}

.func-search a {
  float: right;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  width: 72px;
  line-height: 30px;
  text-align: center;
  vertical-align: top;
}

.func-search .num {
  -webkit-border-top-right-radius: 2px;
  border-top-right-radius: 2px;
  -webkit-border-bottom-right-radius: 2px;
  border-bottom-right-radius: 2px;
  color: #fff;
}

.func-search .sg {
  background: #519fff;
}

.func-search .sg:hover {
  background-color: #40a9ff;
}

.func-search .tt {
  background: #f75856;
}

.func-search .tt:hover {
  background: #ea2826;
}

.func-search .zh {
  background: #24a2fa;
}

.func-search .zh:hover {
  background: #0b90ed;
}

.func-search .wb {
  background: #ff8140;
}

.func-search .wb:hover {
  background: #f0590c;
}

.func-search .ql {
  background: #ff6428;
}

.func-search .ql:hover {
  background: #f24e0f;
}

.func-search .bd {
  background: #38f;
}

.func-search .bd:hover {
  background: #0a6bf3;
}

.func-search .article {
  margin-left: 10px;
  border: 1px solid #ccc;
  height: 28px;
  line-height: 28px;
  width: 70px;
  color: #8590a7;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

.func-search .article:hover {
  background-color: #f5f5f5;
}

@-webkit-keyframes shopAnim {
  0% {
    top: 0;
  }
  50% {
    top: -10px;
  }
  to {
    top: 0;
  }
}

@keyframes shopAnim {
  0% {
    top: 0;
  }
  50% {
    top: -10px;
  }
  to {
    top: 0;
  }
}
</style>
<template>
  <div id="app" class="taste-hall-root" style="height:600px;">
    <div class="container main-page app-view">
      <div class="mask"></div>
      <div>
        <tags-nav :currentNav="currentNav" />
        <main>
          <div class="main-container">
            <div
              class="main-content main-content_tastehall platforms-wrap main-view"
              results=""
              unread_message="4"
              update_url=""
            >
              <div class="func-search">
                <div class="search">
                  <input
                    type="text"
                    v-model="keyword"
                    placeholder="搜索导航"
                    name="keyword"
                    autocomplete="off"
                    class=""
                  />
                </div>
                <a class="num sg" @click="handleSearch">搜导航</a>
              </div>
              <div class="platform-list">
                <div
                  v-for="(nav, index) in navList"
                  :class="
                    nav.showContent === true ? 'category' : 'category collapsed'
                  "
                >
                  <div class="category-bar">
                    {{ nav.name }}
                    <i class="collapse-btn" @click="changeContent(index)"></i>
                  </div>
                  <ul style="" v-if="nav.showContent === true">
                    <li
                      class="th-platform-item"
                      id="btn"
                      v-for="info in nav.lists"
                    >
                      <div class="platform-item-info">
                        <a
                          :href="info.url"
                          target="_blank"
                          style="color:#8590a7;"
                        >
                          <img :src="info.icon" class="platform-logo" />
                        </a>
                        <a
                          :href="info.url"
                          target="_blank"
                          style="color:#8590a7;"
                        >
                          <p class="platform-name">
                            {{ info.name }}
                          </p>
                        </a>
                        <img
                          src="../../../images/left-new.png"
                          class="new-tag"
                          v-if="info.isNew === 1"
                        />
                        <img
                          src="../../../images/right-tuijian.png"
                          class="hot-tag"
                          v-if="info.isRecommend === 1"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <Spin size="large" fix v-if="spinShow"></Spin>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          id: 1,
          name: "测试",
          showContent: true,
          lists: [
            {
              id: 2,
              name: "测试",
              url: "http://www.baidu.com",
              icon: "http://qcybnir4u.bkt.clouddn.com/saas.png",
              isNew: 1,
              isRecommend: 1
            }
          ]
        }
      ],
      currentNav: "home",
      keyword: "",
      spinShow: false,
      username: ""
    };
  },
  mounted() {
    this.getNavigationList();
  },
  methods: {
    development() {
      this.$Message.warning("正在开发中，敬请期待！");
    },
    changeContent(index) {
      this.navList[index].showContent = !this.navList[index].showContent;
      console.log(this.navList);
    },
    // 搜索
    handleSearch() {
      this.spinShow = true;
      this.getNavigationList(this.keyword);
    },
    getNavigationList() {
      console.log("username");
      // TODO 获取cookie信息
      // chrome.cookies.get({ url: this.$config.apiUrl, name: 'username' }, async cookie => {
      //     console.log(cookie)
      //     if(cookie) {
      //         this.username = cookie.value
      //         console.log('token: ' + cookie.value)
      //     }
      // })
      // console.log(this.username)
      // TODO 获取导航信息
      // this.$http.post('nav/lists', {keyword: this.keyword})
      // .then(response => {
      //     const { data, status } = response
      //     if (status === 200) {
      //         console.log(data.errcode)
      //         console.log(status)
      //         console.log(data)
      //         if (data.errcode === 0) {
      //             this.navList = data.data
      //             this.spinShow = false
      //         } else {
      //             this.$Message.error(data.errmsg)
      //         }
      //     } else {
      //         this.$Message.error("服务开小差，请稍后再试！")
      //     }

      // })
      // .catch(error => {
      // 	console.log(error)
      // })
    }
  }
};
</script>
