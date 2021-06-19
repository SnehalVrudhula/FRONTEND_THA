function myFunction() {
    var student = { name : "David Rayy",
                  sclass : "VI",
                  rollno : 12
                 };
   document.write(student.name,"  ",student.sclass,"  ",student.rollno);
  
   function myFunction() {
    var student = { name : "David Rayy",
                  sclass : "VI",
                  rollno : 12
                 };
  delete(student.rollno)
  document.write(student.name," ",student.sclass,"",student.rollno);
  
  function myFunction() {
    var student = { name : "David Rayy",
                  sclass : "VI",
                  rollno : 12
                 };
  
  document.write(student.name.length," ",student.sclass.length,"",student.rollno.length);
  }

  var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
for (var i = 0; i < library.length; i++) 
{
 var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
 if (library[i].readingStatus) {
   console.log("Already read " + book);
 } else
 {
  console.log("You still need to read " + book);
 }
}

function myFunction(r,h) {
    var num= 2*Math.PI*r*r*h;
    var n = num.toFixed(4);
    document.getElementById("demo").innerHTML = n;
  }

  function compare_to_sort(x,y) 
  {
   if (x.title < y.title)
     return -1;
   if (x.title > y.title)
     return 1;
   return 0;
  }
 
 console.log(library.sort(compare_to_sort));