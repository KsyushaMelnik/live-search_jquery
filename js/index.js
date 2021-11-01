const $leaveSearch = $('.leave-search');
const $query = $('.leave-search .query');
const $list = $('.leave-search .leave-list');

let $currentEl = "";

let listSW = ["Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader", "Leia Organa", "Owen Lars", "Beru Whitesun lars", "R5 D4", "Biggs Darklighter", "Odi-Wan Kenobi"];
let filteredList = [];

$query.on('click', function(e){
    $leaveSearch.addClass('active');
});

$('body').on('click', function(e){
    if(!e.target.closest('.leave-search')) {
        $leaveSearch.removeClass('active');
    }
});

function templateGenerator(list){
    let template ='';
    template += '<ul>';
    if (list.length == 0) {
        template = '<li>Not Found</li>';
    } else {
        list.forEach(function (el) {
            template += '<li class="item">'+el+'</li>';
        });
    }
    template += '</ul>';

    $list.html(template);
}
templateGenerator(listSW);

$('.leave-search').on('click', '.item', function(e){
    let text = $(this).text();
    $query.val(text);
    $leaveSearch.removeClass('active');
});

$query.on('input click', function(){
    let value = $(this).val();
    let query = value.toLowerCase();
    filteredList = listSW.filter(function (el){    
        if(el.toLowerCase().indexOf(query) != (-1)) return true;
        else return false;
    });
    templateGenerator(filteredList);
});




