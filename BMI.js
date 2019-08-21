export default class BMI {
    calculate(w,h){
      return w/(h**2);
    }
    
    q (w,h,re){
    let b=(w/(h**2));
    if(re=='asian'){
      if(b <= 18.5)
      {
        return "Under Weight"
      }
      else if(b> 18.5 && b<= 24.9 )
      {
        return "Normal Weight"
      }
      else if(b> 24.9 && b<= 29.9 )
      {
        return "Overweight"
      }
      else if(b> 29.9 )
      {
        return "Obesity"
      }
    }
    else if(re=='western'){
      if(b<=19.5)
      {
        return "Under Weight"
      }
      else if(b> 19.5 && b<= 34.9 )
      {
        return "Normal Weight"
      }
      else if(b> 34.9 && b<= 39.9 )
      {
        return "Overweight"
      }
      else if(b> 39.9 )
      {
        return "Obesity"
      }
    }
  }
}