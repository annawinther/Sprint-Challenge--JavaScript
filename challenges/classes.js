// 1. Copy and paste your prototype in here and refactor into class syntax.
/*
function CuboidMaker(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  }

  CuboidMaker.prototype.volume = function() {
    let sum = this.length * this.width * this.height;
    return sum;
  }

  CuboidMaker.prototype.surfaceArea = function()  {
    let surface = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return surface;
  }
*/
  class CuboidMaker2 {
      constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
      }
      volume(){
        let sum = this.length * this.width * this.height;
        return sum;
      }
      surfaceArea(){
        let surface = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return surface;
      }
  }
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(length, width, height){
    super(length, width, height);
    }
    volume2(){
        let vol = 
    }
}