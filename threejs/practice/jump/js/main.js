/**
 * Created by lenovo on 2018/5/26.
 */
var game = new Game()
game.init()
game.addSuccessFn(success)
game.addFailedFn(failed)
var mask = document.querySelector('.mask')
var restartButton = document.querySelector('.restart')
var score = document.querySelector('.score')

restartButton.addEventListener('click',restart)

function restart(){
    mask.style.display='none'
    game.restart()
}
function failed(){
    console.log('fail la');
    score.innerText=game.score
    mask.style.display='flex'
}
function success(score){
    var scoreCurrent=document.querySelector('.score-current')
    scoreCurrent.innerText=score
}