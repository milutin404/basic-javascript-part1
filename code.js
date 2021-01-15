var changePlaces = function () {
    var a = 1;
    var b = 2;

    console.log(a, b);

    var temp = a; // Use temporary variable to store value, so we dont override it
    a = b;
    b = temp;

    console.log(a, b);

    /**
     * This can be used only with numbers
     * We cannot subtract strings
     * 
     * p.s. but we can combine strings with + operator
     * 'a' + 'b' => 'ab'
     * 'ab' - 'b' => NaN
     * 
     */
    a = a + b;
    b = a - b;
    a = a - b;

    console.log(a, b);

};

var sortArray = function () {
    var array = [5, 7, 3, 1, 4];
    var temp;
    for (var i = 0; i < array.length; i++) {
        for (var c = i + 1; c < array.length; c++) {
            if (array[i] > array[c]) {
                temp = array[i];
                array[i] = array[c];
                array[c] = temp;
            }
        }
    }
    console.log(array);
};