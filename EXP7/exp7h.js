function createCar() {
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
      return this.make + " " + this.model + " (" + this.year + ")";
    };
    Object.defineProperty(this, 'age', {
      get: function() { return new Date().getFullYear() - this.year; }
    });
  }

  let car1 = new Car("Toyota", "Corolla", 2015);
  let info = "Car Info: " + car1.getCarInfo() + "<br>";
  info += "Car Age: " + car1.age + " years<br>";
  document.getElementById("output").innerHTML = info;
}
