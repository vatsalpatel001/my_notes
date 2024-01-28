
$(document).ready(function () {
    search(" ")
    $("#searchInput").on("keyup", function () {
        var searchTerm = $(this).val().toLowerCase();
        search(searchTerm)
    });
    Prism.highlightAll();
});

function search(searchTerm) {


    $(".question-container").each(function () {
        var questionText = $(this).find(".question").text().toLowerCase();
        var answerText = $(this).find(".answer").text().toLowerCase();
        if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}
