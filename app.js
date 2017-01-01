// Sort Array
var array =[12,22032,1473,34,555,65,67,864,79,74,2315,68,83,502];
function sortArray(sortarray) {
var count = array.length-1;
var h;
    for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
            if (array[j] < array[j + 1]) {
                h = array[j + 1];
                array[j + 1] = array[j];
                array[j] = h;
            }
        }
    }
    return sortarray;
  }  
document.getElementById("result").innerHTML = array;
