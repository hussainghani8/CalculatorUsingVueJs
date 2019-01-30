    var app = new Vue({
      el: "#root",
      data: {
        display: "0",
         result: "",               
           
      },
    methods: {     
        number: function(item){ 
         this.display="0" ;
         var item = item;
         if(this.result.length < 10){
          this.result += item; 
        } else{
            this.result ="Digit Limit 10";
        }             
      
        },
        unique: function(item){          
          this.display="0" ; 
          if (this.result.indexOf('.') === -1) {
          this.number('.');
          }          
        },
        back: function(){                 
        var str = this.result;       
        
        if(this.result == "Digit Limit 10"){
          this.result = "";
        }else{
          this.result= str.substr(0,str.length-1);
        }
        },
        clear: function(){
          this.display="0" ; 
          this.result = "";
        },
        finalResult: function(){         
         this.display= eval((this.result*8)/100);         
         this.result= "";
        },  
  
  },
    });
