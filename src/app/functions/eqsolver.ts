
class Complex {

    _x:number;
    _y:number;

    // *** Complex
    // ***
    // ***     A Simple Complex Number Class
    // ***     By Kurt Cagle
    // *** The Base constructor takes two arguments, a real number and
    // *** an imaginary number, and generates an immutable complex 
    // *** number. All comments assume one or two complex numbers:
    // *** let c1 = new Complex(4,-3) // e.g., 4 - 3i
    // *** let c2 = new Complex(5,2)  // e.g., 5 + 2i
    constructor(x:number,y:number){
             this._x = x;
             this._y = y;
        }
    // *** toString() generates a complex number in mathematic notation,
    // *** e.g., "x + iy"
    toString(){
            return `${this._x}${this._y>0?` + ${Math.abs(this._y)}i`:this._y<0?` - ${Math.abs(this._y)}i`:''}`
        }
    // *** re is a read-only property that returns the real part 
    // *** of a complex number
    // *** e.g., c1.re => 4
    get re(){return this._x}
    // *** im is a read-only property that returns the imaginary part 
    // *** of a complex number
    // *** e.g., c1.im => -3
    get im(){return this._y}
    // *** magnitude gets the length of a complex number vector 
    // *** from the origin 0+0i
    // *** e.g.,, c1.magnitude => 5
    get magnitude(){return Math.sqrt(this._x**2 + this._y**2)}
    // *** add() is a static function that adds two complex numbers
    // ** Complex.add(c1,c2) => 9 - 1i
    static add(c1:Complex,c2:Complex){return new Complex(c1._x + c2._x,c1._y + c2._y)}
    // *** sub() is a static function that subtracts the second complex
    // *** number from the first
    // ** Complex.sub(c1,c2) => -1 - 5i
    static sub(c1:Complex,c2:Complex){return new Complex(c1._x - c2._x,c1._y - c2._y)}
    // *** mult() is a static function that multiplies two complex 
    // *** numbers
    // ** Complex.mult(c1,c2) => 26 - 7i
    static mult(c1:Complex,c2:Complex){return new Complex(c1._x * c2._x - c1._y * c2._y,c1._x * c2._y + c1._y * c2._x)}
    // *** div() is a static function that divides the second complex 
    // ** number from the first
    // ** Complex.div(c1,c2)=> 0.6 + 0.8i
    static div(c1:Complex,c2:Complex){
            let squares = c1._x**2 - c2._y**2;
            return new Complex(c1.re/squares,-c1.im/squares)
        }
    //https://math.stackexchange.com/questions/44406/how-do-i-get-the-square-root-of-a-complex-number
    
    static sqrt(c1:Complex){
        let real_add = Complex.add(c1, new Complex(c1.magnitude,0));
    
          if(real_add.magnitude == 0)
          {
            return new Complex(0,Math.sqrt(c1.magnitude))
          }
          else
          {
            return Complex.mult(real_add, new Complex(Math.sqrt(c1.magnitude)/real_add.magnitude,0))
          }
        
        }
    
  get argument(){return Math.atan2(this._y,this._x)}
}
    
    
    
    
    
export function CubicFormula1(a1:number, b1:number, c1:number, d1:number, dam1:number) {

        var a = b1/a1;
        var b = c1/a1;
        var x1;
    
        var c = (d1 - dam1)/a1;
    
        var p = (-a*a/3.0 + b) / 3.0;
        var q = -(2.0*a*a*a/27.0 - a*b / 3.0 + c)/ 2.0;
    
        var d = p*p*p + q*q;
        let comp_d = new Complex (d,0);
        let sqrt_d = Complex.sqrt(comp_d);
    
        let A3 = Complex.add(new Complex(q,0),sqrt_d);
        let B3 = Complex.sub(new Complex(q,0),sqrt_d);
    
        var arg_A3 = A3.argument;
        var arg_B3 = B3.argument;
        var arg_A, arg_B;
    
        if(arg_A3 - Math.PI == 0)
        {
          arg_A = Math.PI;
        }
        else
        {
          arg_A = arg_A3/3;
        }
        if(arg_B3 - Math.PI == 0)
        {
          arg_B = Math.PI;
        }
        else
        {
          arg_B = arg_B3/3;
        }
    
         
    
        let A1 = new Complex(Math.cos(arg_A) * Math.pow(A3.magnitude,1/3), Math.sin(arg_A) * Math.pow(A3.magnitude,1/3));
        let B1 = new Complex(Math.cos(arg_B) * Math.pow(B3.magnitude,1/3), Math.sin(arg_B) * Math.pow(B3.magnitude,1/3));
    
        let t = Complex.add(A1,B1);
    
        x1 = t.re - a/3;
    
    
    
        
      x1 = Math.floor(x1*10000);
    
    
      return x1;
      
}