

var dugma1= [];  // מגדירה מערך רגיל, הוא מתרחב לפי הצורך
var dugma2 = [10];

// במקרה שאת רוצה שהמערך יתחיל מאיזה שהו מספר, אבל הוא יהיה ריק, וגם מתרחב לפי הצורך
// תלחצי בגוגל כרום ctrl+shift+I 
// מימין תראי קונסולה, (טאב שני)
// הפקודה הזאת כותבת לשם דברים, ישתמש בה בשביל שתביני יותר טוב, נותן כמה דוגמאות

var mila = "HI Mila";
var mispar = 10;
var misparVeMila = "Hi, amispar: " + mispar + " ve po efshar leosif";
var maarahRek = []
var maarahRek10Mekomot = [10];
var maarahImErachimShonim = [1, "hi", false, "ani afilu yahol leahnis et kol a mishtanim mi lemala", mispar, mila, misparVeMila];
var maarahBeMaarach = ["Hitzoni[0]", "Hitzoni[1]", ["pnimi[0]", "kotvim et ze hitzoni[3][0]", "pnimi[2], ki a[1] ze oraa"], "hitzoni[4] ki maarah nihshav ke ereh ehad", "hitzonu[5]"];


console.log(mila);
console.log(mispar);
console.log(misparVeMila);
console.log(maarahRek);
console.log(maarahRek10Mekomot)
console.log(maarahBeMaarach);

console.log("Ve gam kan efshar lihtov [" + mispar + "]");
console.log("Leorid shura ze \nPo shura lemata simi lev al revah \n");
console.log("lihtov \\n be string");


var inputArray = [10]; // כותבים 10 כי אנחנו יודעים את כמות הקלט, זה חוסך למחשב תנועות מיותרות בשביל להרחיב מערך

//Targil 1

for(let i = 0; i < 10; i++) // או למשל for(let i =0; i < inputArray.length; i++) היה עובר על כל המערך בי תלות למספר
{
    inputArray[i] = prompt("Please enter your " + (i+1) + " number");
    // מתחיל מ 0 ומסתיים ב 9 כי קטן מ 10 ולא קטן שווה i פלוס אחד כי  
    // חישוב בסוגריים, אחרת מתייחס לזה כמו למילה
}


var output1 = inputArray;
alert(output1);

//Targil 2

var output2 = ""; // מגדיר כטקסט ריק, לא חובה   

for(let i = 0; i < inputArray.length; i++)
{
    output2 += (inputArray[i]/10) + "\n"; // שורה למטה
}

alert(output2);

// Targil 3

var count3 = 0;

for(let i = 0; i < inputArray.length; i++)
{
    if(inputArray[i] > 80 || inputArray[i] < 20)
    {
        count3++;
    }
}

alert("Answer3: ", count3);

//targil 4


var maxIndex = 0; 
// נשמור את המיקום של המספר הכי גדול
// נניח שהמספר הראשון הוא הכי גדול
// נבדוק אם יש מספרים יותר גדולים
for(let i = 1; i < inputArray.length; i++)  // שימו לב מתחילים ממיקום 1 שזה האלמנט השני, כי אין צורך לבדוק את הראשון
{
    if(inputArray[maxIndex] < inputArray[i] ) // i בודקים אם יש מספר יותר גדול במיקום 
    {
        maxIndex = i; //אם כן, מחליפים מספר של מיקום מקסימלי 
    }
}

alert("Maximum value: " + inputArray[maxIndex]);


//Targil 5

var zugiim = []; // לא יודעים אורך

for(let i = 0; i < inputArray.length; i++)
{
    if(inputArray[i] % 2 == 0) // אם זוגי
    {
        zugiim.push(inputArray[i]); //מוסיף לסוף המערך, והוא מתרחב בהתאם 
    }
}

alert(zugiim);

//Targil 6 basicall oto davar kmo 5

var mithalkimBe3 = []; // לא יודעים אורך

for(let i = 0; i < inputArray.length; i++)
{
    if(inputArray[i] % 3 == 0) // אם זוגי
    {
        mithalkimBe3.push(inputArray[i]); //מוסיף לסוף המערך, והוא מתרחב בהתאם 
    }
}

alert(mithalkimBe3);


