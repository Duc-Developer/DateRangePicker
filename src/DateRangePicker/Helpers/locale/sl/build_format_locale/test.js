// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('sl locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'jan')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'feb')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'mar')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'apr')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'maj')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'jun')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'jul')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'avg')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'sep')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'okt')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'nov')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'dec')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'januar')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'februar')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'marec')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'april')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'maj')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'junij')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'julij')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'avgust')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'september')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'oktober')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'november')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'december')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'ne')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'po')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'to')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'sr')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === '??e')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'pe')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'so')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'ned')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'pon')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'tor')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'sre')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === '??et')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'pet')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'sob')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'nedelja')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'ponedeljek')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'torek')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'sreda')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === '??etrtek')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'petek')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'sobota')
      })
    })

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'AM')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'AM')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'PM')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'PM')
      })
    })

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'am')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'am')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'pm')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'pm')
      })
    })

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'a.m.')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'a.m.')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'p.m.')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'p.m.')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1.')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2.')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === '3.')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}) === '11.')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}) === '101.')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}) === '111.')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1.')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2.')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === '3.')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}) === '11.')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}) === '101.')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}) === '111.')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1.')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2.')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === '3.')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}) === '11.')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}) === '101.')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}) === '111.')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1.')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2.')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === '3.')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 11 }}) === '11.')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 101 }}) === '101.')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 111 }}) === '111.')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1.')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2.')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === '3.')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}) === '11.')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}) === '101.')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}) === '111.')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1.')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2.')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === '3.')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}) === '11.')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}) === '101.')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}) === '111.')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
