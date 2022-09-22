


const monthCodes = {
   "1":1 , "2":4, "3":4, "4":0, "5": 2, "6":5, "7":0, "8":3, "9":6, "10":1, "11":4, "12":6
    
}

const weekdays = ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];


// function leapYear(year, Calculo, month) {
        //const DoisPrimeiros = year % 100;
    
//if((year) && month == "1"  (year) && month == "2") {
  //Calculo -= 1;
// };
  //if ( (year) == 16 (year) == 20) {
 //Calculo += 6; // Calculo = Calculo + 6
 //} else if ((year) == 17 || (Year) == 21) {
   //Calculo += 4;
//} else if ( Year == 18) {
//Calculo += 2;
// };
    
//return Calculo;    
    //}



function getDayOftheWeeK(Year, month, day) {
 // Step 1
 //var result = Calculo


//let year =
 
 let step1 = Math.floor((Year  % 100) / 12);

 // Step 2
 let step2 = (Year  % 100) % 12; 

 // Step3
 let step3 = Math.floor(step2 / 4);

 // Step4 // ADD DAY OF MONTH
 let step4 = day 
 // day 

 // Step5 get month code
 // FROM 9...how do we get 6?
 const monthCode = monthCodes[month];



 // Step 6...add all and mod by 7
const step6 = (((step1 + step2 + step3 + step4 + monthCode) % 7)+1);

// Step 7
return  weekdays[step6];



const finalAnswer = getDayOftheWeeK (Year, month, day);

console.log(finalAnswer); 
}



 function makeCalendar(){
var mes = month
        if (mes === 3 || mes === 5 || mes === 8 || mes === 10) {
               return 30;
              }
            
              if (mes === 1) {
                if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                  return 29;
                } else {
                  return 28;
                }
              }
            
              return 31;
            };

        // for (let i = 1; i <= 31; i++) {
        //     console.log(`January-${i}- is 2022 ${getDayOftheWeeK(2022, 1, i)}`)
        // }
         //for (let i = 1; i <= 29; i++) {
        //    console.log(`February-${i}-is 2022 ${getDayOftheWeeK(2022, 2, i)}`)
        //}
      //for (let i = 1; i <= 31; i++) {
     //    console.log(`March-${i}-is 2022 ${getDayOftheWeeK(2022, 3, i)}`)
        //}
      //for (let i = 1; i <= 30; i++) {
     //    console.log(`April-${i}-is 2022 ${getDayOftheWeeK(2022, 4, i)}`)
             //}
      //for (let i = 1; i <= 31; i++) {
     //    console.log(`May-${i}-is 2022 ${getDayOftheWeeK(2022, 5, i)}`)
             //}
      //for (let i = 1; i <= 30; i++) {
     //    console.log(`June-${i}-is 2022 ${getDayOftheWeeK(2022, 6, i)}`)
             //}
      //for (let i = 1; i <= 31; i++) {
     //    console.log(`July-${i}-is 2022 ${getDayOftheWeeK(2022, 7, i)}`) 
                //}
        //for (let i = 1; i <= 31; i++) {
     //    console.log(`August-${i}-is 2022 ${getDayOftheWeeK(2022, 8, i)}`) 
                //}
        //for (let i = 1; i <= 30; i++) {
     //    console.log(`September-${i}-is 2022 ${getDayOftheWeeK(2022, 9, i)}`) 
                //}
        //for (let i = 1; i <= 31; i++) {
     //    console.log(`October-${i}-is 2022 ${getDayOftheWeeK(2022, 10, i)}`) 
                //}
        //for (let i = 1; i <= 30; i++) {
     //    console.log(`November -${i}-is 2022 ${getDayOftheWeeK(2022, 11, i)}`) 
                //}
        //for (let i = 1; i <= 31; i++) {
     //    console.log(`Dezember-${i}-is 2022 ${getDayOftheWeeK(2022, 12, i)}`) 
                //}



makeCalendar();

 module.exports ={ getDayOftheWeeK, makeCalendar };




