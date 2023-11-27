
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
        yes.forEach((el)=> el.style.cssText = 'display:block;animation:zoom 1s ease');
    })

    let clients = $('.about-area .client-row');
    let radios = $('.about-area .radio')
    
    function classSlider(){
        for(let j=0;j<clients.length;j++){
            if(clients[j].classList.contains('d-none')){
                clients[j].classList.remove('d-none');
            }else{
                clients[j].classList.add('d-none');
            }
        }
    }

    // setInterval(() => {
    //     classSlider();
    // }, 5000);

    for(let i=0;i<=radios.length-1;i++){
        radios[i].onclick = ()=>{
            if(i === 1){
                classSlider();
            }else{
                classSlider();
            }
            console.log(i);
        }
    }

    // sticky navbar
    let header_off_top = $('.header_area').height() + 50;
    function navbar_fixed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= header_off_top){
                    $('.header_area .main-menu').addClass('fixed-nav');
                    console.log(header_off_top);
                }else{
                    $('.header_area .main-menu').removeClass('fixed-nav');
                }
            })
        }
    }
    navbar_fixed();
});