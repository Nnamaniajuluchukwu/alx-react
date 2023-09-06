import $ from "jquery";
import "./body.css";
const _ = require('lodash');

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let counts = 0;

function updateCounter() {
    counts++;
    $('#count').html(`${counts} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));
