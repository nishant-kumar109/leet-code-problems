// Check If It Is a Straight Line
// You are given an array coordinates, coordinates[i] = [x, y], 
// where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

var checkStraightLine = function(coordinates) {
    let point1 = coordinates[1];
    let point2 = coordinates[0];
    let gslope = slope(point1, point2);
   
   for(let i=1; i<coordinates.length; i++){
       p1 = coordinates[i];
       p2 = coordinates[0];
       let newslope = slope(p1, p2)
       if(gslope!= newslope) return false;
   }
   
   return true;
};

let slope = (p1, p2)=>{
   if(p1[0] - p2[0] == 0) return 0;
   return (p2[1] - p1[1]) / (p2[0] - p1[0]);
}

// time complexity = O(N) we are itrating to every coordinates
// space complexity = O(1)

module.exports = checkStraightLine;