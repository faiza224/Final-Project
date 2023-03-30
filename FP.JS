const box1 = document.getElementById('box1');
box1.addEventListener('click', function() {
    window.location.href = 'Projects.html' ;
});

const box2 = document.getElementById('box2');
box2.addEventListener('click', function() {
    window.location.href = 'Skills.html' ;
}) ;

const box3 = document.getElementById('box3');
box3.addEventListener('click', function(){
    window.location.href = 'AboutMe.html' ;

});

// const linkH = document.getElementById('linkH');
// const infoH = document.getElementById('infoH');

// linkH.addEventListener('click', function(e) {
//     e.preventDefault();
//     infoH.style.display= 'block';

// });
  
// linkA.addEventListener('click', function(e) {
//     e.preventDefault();
//     infoA.style.display= 'block';
// });

// linkC.addEventListener('click', function(e) {
//     e.preventDefault();
//     infoC.style.display= 'block';
// });

function openNewPage() {
    var newPage = window.open();
    newPage.document.open();
    newPage.document.write('<html><body><div><img src="/home.img.jpg" alt="My Image" height= "250px" width= "1380px"></div>');
    newPage.document.writeln('<div><p style= "font-size: 40px; font-weight: bolder; color:"#000; background-color:#83bf5f">MAXIMIZE YOUR POTENTIAL</h1></div></body></html>');
    newPage.document.close(); 

}
// const canvas = document.getElementById('myCanvas');
// const image = document.getElementById('myImg');
// const context = canvas.getContext('2d');

// context.drawImage(image, 0, 0);

// context.font = 'bold 30px Arial';
// context.fillStyle = '#bbb';
// context.textAlign ='center';
// context.fillText('MAXIMISE YOUR FULL POTENTIAL', canvas.width / 2, canvas.height / 2);

// function addImage() {
//     var image = document.getElementById('myImg'); 
//     // #id can be add in <img> tag in html before src // ANOTHER METHOD
//     image.src = '/home.img.jpg';
// }


function newPage() {
    var aboutPage = window.open();
   aboutPage.document.write('<p>This is about page</p>');
}

function contactPage() {
    var contactPage = window.open();
    
    contactPage.document.write('<html><body style= "background-color:#e9967a;"><div><form>');
    contactPage.document.write('<label for= "name">Name:</label>');
    contactPage.document.write('<input type="text" id= "name" name="name" style= "padding: 10px ; margin:10px 5px 0px 5px; border-radius= 5px;">');
    contactPage.document.write('<label for="email">Email:</label>');
    contactPage.document.write('<input type= "email" id= "email" name= "email" style= "padding: 10px; margin:10px; border-radius= 5px;">');
    contactPage.document.write('<div><label for= "message">Message:</label>');
    contactPage.document.write('<textarea id= "message" name= "message" style= "padding: 20px; ; border-radius= 5px;"></textarea>');
    contactPage.document.write('<button type= "submit" style= "padding: 10px; margin:5px 5px 5px 5px; background-color: #666; color: #fff; border-radius:10px;">Submit</button></div>');
    contactPage.document.write('</form></div></body></html>');

}