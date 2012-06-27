//var toString = Object.prototype.toString;

function subject1()
{
    $("div#subject01_result").html($("div#yamada_name").html());
}

function subject2()
{
    if(this["id"] === "add_sakurako"){
	$($('div#subject2 ul#member_list li')[0]).before("<li>櫻子</li>");
    }else{
	$($('div#subject2 ul#member_list li')[0]).before("<li>向日葵</li>");
    }
}


function subject3()
{
    $("div#subject3 ul#member_list_remove li").each(function (){
	if(this['id'] === "akari"){
	    $(this).remove()
	}
    });
}



function subject4()
{
    $("div#subject4 div#stealth_momo").toggle();
}


function subject5()
{
    $("div#subject5 h2").html("【" + $("div#subject5 h2").html() + "】");
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