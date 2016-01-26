//JavaScript Code for a simple Addition and Subtraction

 window.Calculator = {
    
    current: 0,

   //Addition  Function
    add: function (  ){
   
       var sum =  this.current;

       for( var i =0, len = arguments.length; i < len; i++ ) {
       	  sum = sum + arguments[i];
       }
    	this.current = sum;
    	return sum;
    },

   //Subtracting Function
    subtract: function (  ){
   
       var result =  this.current;

       for( var i =0, len = arguments.length; i < len; i++ ) {
       	  result = result - arguments[i];
       }
    	this.current = result;
    	return result;
    },
    //The Reset Function
     reset: function () {
       this.current = 0;
     }

 };
