/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var a=0,b=0,c=0;
  var arr=[];
  for(var i=0;i<preferences.length;i++){
  	  
	  arr[i+1]=preferences[i];
  }
  for(var i=0; i<arr.length; ){
  i++;
  b=arr[i];
  c=arr[b];
  
  if(arr[c]==i){
  	  a++;
  }
  
  }
  
  return Math.floor(a/3);
};
