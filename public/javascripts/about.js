function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$( document ).ready(function() {
	$("#link").click(function() {
	   scrollToAnchor('my_story');
	});
})


/*<a id="link" href="#">click me to scroll to id3</a><br>

<a name="id1"/>
<b>ID1</b>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam no\
<a name="id2"/>
<b>ID2</b>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam errgren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
<a name="id3"/>
<b>ID3</b>
Lorem ipsum dolor sit amet, consetetur */