var myApp = require('./minMax.js');
(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [4, 40] for [6, 4, 20,40]', function () {
        expect(myApp.findMinMax([6, 4, 20,40])).toEqual([4, 40]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [1, 99] for [78, 8, 68, 1,89,30,40,99]', function () {
        expect(myApp.findMinMax([78, 8, 68, 1,89,30,40,99])).toEqual([1,99]);
      });

      it('should return [50,999] for [823,720,540,450,900,1200,900,999,50]', function () {
        expect(myApp.findMinMax([823,720,540,450,900,1200,900,999,50])).toEqual([50,999]);
      });

      it('should return [4, 200] for [67, 62, 150, 44, 7, 78, 200, 68, 8]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 40])).toEqual([4, 200]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [10] for [10, 10, 10, 10]', function () {
        expect(findMinMax([10, 10, 10, 10])).toEqual([10]);
      });

      it('should return [2] for [2]', function () {
        expect(findMinMax([2])).toEqual([2]);
      });

    });

  });

})();