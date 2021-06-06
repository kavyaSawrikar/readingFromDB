function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  getContestantCount()
  updateContestantCount()
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function getContestantCount(){
  firebase.database().ref('contestantCount').on('value', function(contestantCount){
  var contestantCount = contestantCount.val()
  
  console.log(contestantCount) 
  })

}

function updateContestantCount(){
firebase.database().ref('/').update({
  contestantCount: 1
})

}
