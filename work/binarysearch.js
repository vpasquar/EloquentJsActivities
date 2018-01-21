var array = [1,
  23,
  43,
  56,
  77,
  89,
  211,
  212,
  789,
  972,
  1001,
  4567,
  4599,
  83784];

  var searchTerm = 77;

  binarySearch = (arr,searchElement) => {
     var currentElement;
     var currentIndex;
     var maxIndex = arr.length - 1;
     var minIndex = 0

     //main loop goes while min index is less than max index of the search
     while (minIndex <= maxIndex) {


      currentIndex = Math.floor((minIndex + maxIndex) / 2)     
      //find position in the middle between max and min

      //get middle element
      currentElement = arr[currentIndex];

      // see if middle element is smaller or larger than search element
      if (currentElement < searchElement) {
      	 minIndex = currentIndex + 1;
      } else if	(currentElement > searchElement) {
      	 maxIndex = currentIndex - 1;
      } else {
         return currentIndex;
      }
      
      // if smaller, increase min index by 1 and do the loop over finding a new middle position
      // if bigger, decrease max index by 1 and redo loop
      //if middle element is the same as search Element, return the index
     } 
  }

  console.log(binarySearch(array,searchTerm));