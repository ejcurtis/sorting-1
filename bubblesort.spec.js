describe('Bubble Sort', function() {
    beforeAll(function () {
      spyOn(swapper, 'swap').and.callThrough();
    });

    it('swap n2 times', function () {
      bubbleSort([6, 8, 4, 9, 1]);
      expect(swapper.swap.calls.count()).toBeLessThan(25);
    });

    // it('has bigO of one with an array of one', function (){
    //   bubbleSort([1]);
    //   expect(swapper.swap.calls.count()).toEqual(0);
    // })

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one element', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('handles an array with multiple elements', function() {
    expect(bubbleSort([6, 8, 4, 9, 1])).toEqual([1, 4, 6, 8, 9]);
  });

});

describe('Split Array function', function () {
  it('returns an empty array if array is empty', function () {
    expect(split([])).toEqual([])
  });
  it('returns array if length is one', function () {
    expect(split([1])).toEqual([1])
  });
  it('is able to split an odd array into two halves', function () {
    expect(split([1, 5, 7, 3, 4])).toEqual([[1, 5], [7, 3, 4]])
  });
  it('is able to split an even array into two halves', function () {
    expect(split([1, 5, 7, 3, 4, 9])).toEqual([[1, 5, 7], [3, 4, 9]])
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    expect(merge([3, 27, 38, 43], [9, 10, 82])).toEqual([3, 9, 10, 27, 38, 43, 82])
  });
});
