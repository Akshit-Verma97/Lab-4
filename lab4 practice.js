function checkOddOrEven ()
    {   let result
        const numberToCheck= parseFloat(document.getElementById("numOddEven").value)
        if ((numberToCheck%2)=== 0)
            result="Even"
        else 
            result="Odd";
        document.getElementById("resultOddEven").innerText= numberToCheck + " is an " + result + " number."
    };

function largestNum()
    {
        const num1=parseFloat(document.getElementById("Q2num1").value);
        const num2=parseFloat(document.getElementById("Q2num2").value);
        const num3=parseFloat(document.getElementById("Q2num3").value);
        let largest=num1;
        if (num2>largest)
            {largest=num2};
        if (num3>largest)
            {largest=num3};
        document.getElementById("largestNumResult").innerText="The largest of the three entered numbers is " + largest;
    }

function createFiboSeries()
    {
        const numOfTerms=parseFloat(document.getElementById("numberOfFiboTerms").value);
        let fiboSeries=[0, 1];
        if (numOfTerms===1)
            fiboSeries=[0];
        else if (numOfTerms===2)
            fiboSeries=[0,1];
        else
        for(i=2;i<numOfTerms;i++)
        {
           fiboSeries.push(fiboSeries[i-1]+fiboSeries[i-2]);
        }
            document.getElementById("fiboResult").innerText=fiboSeries.join(", ");
    }

function replaceChar()
    {
        let inputStr=document.getElementById("stringToChange").value;
        let charReplace=document.getElementById("charToReplace").value;
        let newChar=document.getElementById("newChar").value;
        let modStr=""
        let NumOfChars=inputStr.length;
        for(i=0;i<NumOfChars;i++)
           { if (inputStr[i]===charReplace)
                modStr=modStr+newChar
             else 
                modStr=modStr+inputStr[i]
           }
        document.getElementById("newStrResult").innerText=modStr;
    }

function checkPalindrome()
    {
        let numToCheck=document.getElementById("noForPalindrome").value;
        const hundreds=Math.floor(numToCheck/100);
        const units=numToCheck % 10;
        if (hundreds===units)
            result= "Number is a Palindrome";
        else 
            result="Number is not a Palindrome";
        document.getElementById("resultPalindrome").innerText=result;
    }

function countVowels()
    {
        let strToCheckVowels=document.getElementById("textToCountVowels").value;
        var countVowels=0;
        strVowelsLength=strToCheckVowels.length;
        for(i=0;i<strVowelsLength;i++)
            {
                if (strToCheckVowels[i]==='a'||strToCheckVowels[i]==='e'||strToCheckVowels[i]==='i'||strToCheckVowels[i]==='o'||strToCheckVowels[i]==='u')
                    {countVowels=countVowels + 1};
            }
        document.getElementById("resultCountVowels").innerText=countVowels;
    }
