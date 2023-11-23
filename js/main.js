
let items = $('.element-item');

$('document').ready(function(){
    let $btns = $('.project-area .button-group button');

    $btns.click((e)=>{
        $('.project-area .button-group button').removeClass("active");
        e.target.classList.add('active');


        let selector = $(e.target).attr('data-filter');
        let yes = [];
        let no = [];
        //maping on the array items
        for(let i=0; i<items.length;i++){
            if(items[i].classList.contains(selector) == true){
                yes.push(items[i]);
            }else if(selector == "*"){
                yes = [...items];
            }
            else{
                no.push(items[i]);
            }
        }
        
        no.forEach((el)=> el.style.display = 'none');
        yes.forEach((el)=> el.style.display = 'block');
    })
});