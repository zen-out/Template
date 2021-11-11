function manipulateData(array, begId, featureId) {
  for (let i = 0; i < array.length; i++) {
    // console.log(i);
    let num = begId + i;
    array[i]["feature_id"] = featureId;
    array[i]["id"] = num;
  }
  //   console.log(array);
  return array;
}

// manipulateData(arr, 29, 8);
