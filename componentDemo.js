/**
 * Created by SPACEY on 2016/9/30.
 */
function Component(element){
    this.targetEle = element;
    this.maskEle = null;

}
Component.prototype.init = function(){
    this.maskEle = document.createElement('div');
    this.maskEle.style.width = $(window).width() +'px';
    this.maskEle.style.height = $(window).height() +'px';
    this.maskEle.style.position = 'absolute';
    this.maskEle.style.zIndex = '990';
    this.maskEle.style.top = '0';
    this.maskEle.style.left = '0';
    this.maskEle.style.backgroundColor = 'red';

    this.floatShow = document.createElement('div');
    this.floatShow.style.width = '400px';
    this.floatShow.style.height = '300px';
    this.floatShow.style.position = 'absolute';
    this.floatShow.style.zIndex = '999';
    this.floatShow.style.top = '50%';
    this.floatShow.style.left = '50%';
    this.floatShow.style.transform ='translate(-50%,-50%)';
    this.floatShow.style.backgroundColor = 'yellow';

    this.maskEle.appendChild(this.floatShow);

    //$('this.maskEle').css({'backgroundColor':'red'});

    $('body').append(this.maskEle);
};


//(function(){
//    var x = new Component();
//    x.init();
//})();


//(function(){
//    $('#show-this').html('hello world');
//    //$('body').append('!');
//
//})()