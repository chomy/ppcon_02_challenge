function subject1()
{
    $("span#subject01_result").html($("p#yamada_name").text());
}


function subject2()
{
    if(this["id"] === "add_sakurako"){
	$('div#subject2 ul#member_list').prepend("<li>櫻子</li>");
    }else if(this["id"] === "add_himawari"){
	$('div#subject2 ul#member_list').prepend("<li>向日葵</li>");
    }
}


function subject3()
{
    $("div#subject3 ul#member_list_remove li#akari").remove();
}


function subject4()
{
    $("div#subject4 p#stealth_momo").toggle();
}


function subject5()
{
    $("h2").each(function(){
	$(this).html("【" + $(this).html() + "】");
    });
}


function init()
{
    $("div#subject1 a#get_name").click(subject1);
    $("div#subject2 a#add_sakurako").click(subject2);
    $("div#subject2 a#add_himawari").click(subject2);
    $("div#subject3 a#remove_akari").click(subject3);
    $("div#subject4 a#change_visible_momo").click(subject4);
    $("div#subject5 a#change_header_html").click(subject5);
}

$(document).ready(init);
