/* *** Calculate the The number of characters in the sentence*** */

function CharCount(str){
  
    var numC =0;
    for(let i =0;i<str.length;i++){
      if(str[i]&&str[i]!=" "&&str[i]!="."){
        numC++
      }
     
   
    }
    return numC
  }


/* *** Calculate the The number of Words in the sentence*** */

function WordCount(str){
  
    var numW =0;
    for(let i =0;i<str.length;i++){
      if(str[i]===" "&&str[i]!="."){
        i++;
      }
      else{
       numW=str.split(" ").length;
        
      }
   
    }
    return numW;
  }







/* *** Calculate the The number of vowels in the sentence*** */

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;
  
    // return number of vowels
    return count;
  }
  ///[aeiou]/ig is a regular expression that will match any vowel.
  // It will match any of a, e, i, o, u,
  // the i flag (/[aeiou]/ig) makes it case-insensitive 
  // the g flag stands for "global" or in other words "don't stop after the first match".