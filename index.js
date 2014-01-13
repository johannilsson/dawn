var ace = require('brace');
require('brace/mode/markdown');
require('brace/theme/chrome');
var marked = require('marked');

var editor = ace.edit('editor');
editor.getSession().setUseSoftTabs(true);
editor.getSession().setUseWrapMode(true);
editor.getSession().setWrapLimitRange();
editor.getSession().setMode('ace/mode/markdown');
editor.setShowPrintMargin(false);
editor.setHighlightActiveLine(false);
editor.renderer.setShowGutter(false);
editor.setTheme('ace/theme/chrome');

editor.getSession().on('change', function(e) {
  console.log(e.type);
  preview();
});

preview();

function preview() {
  marked(editor.getValue(), function(err, content) {
    var previewEle = document.getElementById('preview');
    previewEle.innerHTML = content;
  });
}

editor.getSession().on('changeScrollTop', function(scrollTop) {
  var previewEle = document.getElementById('preview');
  var windowHeight = window.innerHeight;
  var ratio = scrollTop / windowHeight;
  var previewScrollRange = previewEle.scrollHeight;
  previewEle.scrollTop = ratio * previewScrollRange;
});

var editorEle = document.getElementById('editor');
var previewEle = document.getElementById('preview');

editorEle.addEventListener('scroll', function() {
  console.log('on scroll');
}, false);

previewEle.addEventListener('scroll', function() {
  console.log('preview on scroll');
}, false);





