let chuoi, nut;
$("div._2a_i").each(function () {
    chuoi = $(this).find('div[data-sigil="comment-body"]').text();
    if (chuoi.includes("*")) {
        nut = $(this).find("a._1l26._2b0a");
        nut[0].click();
        $("a._54k8._55i1._58a0.touchable")[1].click();
        // return false;
    }
});
