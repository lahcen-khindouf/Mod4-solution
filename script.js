var names= new Array();
names[0]= "Yassin";
names[1]= "Jimse";
names[2]= "Johan";
names[3]= "jamal";
names[4]= "mona";
names[5]= "sofia";
names[6]= "brahim";
names[7]= "lahcen";
names[8]= "mohamed";
names[9]= "jim";


for (var i=0; i < names.length; i++){
    if(names[i].charAt(0)==="J"|| names[i].charAt(0)==="j"){
      console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }
}