/* jquery.stylevalidate.js v.1.0.0
 ** http://stephanjaeger-public.sharepoint.com
 ** stephan@stephanjaeger.onmicrosoft.com
 ** https://github.com/stephanj79/styleValidate
 ** https://www.npmjs.com/package/styleValidate
 ** Live-demo: none
 **
 **
 ** Copyright (c) 2015 Stephan Jäger
 ** Available under the MIT license
 ** https://github.com/stephanj79/styleValidate/blob/master/LICENSE-MIT
 */
if (typeof jQuery === 'undefined') {
    throw new Error('stylevalidate.js requires jQuery')
}
+function ($) {
    'use strict';
    var version = $.fn.jquery.split(' ')[0].split('.');
    if ((version[0] < 1 && version[1] < 11 || (version[0] == 1 && version[1] == 11 && version[2] < 2))) {
        throw new Error('stylevalidate.js requires jQuery version 1.11.2 or higher')
    }
}($);
String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x])
    }
    return retStr
};
String.prototype.contains = function (it) {
    return this.indexOf(it) != -1;
};

jQuery.fn.stylevalidate = function (options) {
    $(window).resize(function () {
    });
    var v = $.extend({
        silent: true
    }, options);
    var elmArray = [];

    function getZeileString(x) {
        var lastLine, lastColumn, firstColumn, firstLine;
        $ret = "";
        if (x.length == 3) {
            return "";
        }
        else if (x.length == 4) {
            if ((x[0].text == "info")) {
                return "";
            }
            else {
                lastLine = x[0].text;
                lastColumn = x[1].text;
                $ret = "Fehler in Line:" + lastLine + ", column:" + lastColumn;
            }
        }
        else if (x.length == 7) {
            lastLine = x[1].text;
            lastColumn = x[2].text;
            $ret = "Fehler in Line:" + lastLine + ", column:" + lastColumn;
        }
        else if (x.length == 8) {
            lastLine = x[1].text;
            lastColumn = x[2].text;
            firstColumn = x[3].text;
            $ret = "Fehler in Line:" + lastLine + ", column:" + firstColumn + " bis  column:" + lastColumn;
        }
        else if (x.length == 9) {
            lastLine = x[1].text;
            lastColumn = x[2].text;
            firstColumn = x[3].text;
            $ret = "Fehler in Line:" + lastLine + ", column:" + firstColumn + " bis  column:" + lastColumn;
        }
        else if (x.length == 10) {
            lastLine = x[1].text;
            firstLine = x[2].text;
            lastColumn = x[3].text;
            firstColumn = x[4].text;
            $ret = "Fehler in Line:" + firstLine + ", column:" + firstColumn + " bis zu Line:" + lastLine + ", column:" + lastColumn;
        }
        return $ret;
    }

    function getMsgString(x) {
        var msg;
        if (x.length == 8) {
            msg = x[4].text;
        }
        else if (x.length == 2) {
            msg = x[1].text;
        }
        else if (x.length == 9) {
            msg = x[5].text;
        }
        else if (x.length == 10) {
            msg = x[6].text;
        }
        else if (x.length == 7) {
            msg = x[3].text;
        }
        else if (x.length == 4) {
            msg = x[3].text;
        }
        else if (x.length == 3) {
            msg = x[2].text;
        }
        msg = msg.allReplace("\\t", "");
        msg = msg.allReplace({"&gt;": "≥"});
        msg = msg.allReplace({"&lt;": "≤"});
        return msg;
    }

    function getv(x) {
        var extract, hilist;
        if (x.length == 8) {
            extract = x[5].text;
            hilist = x[6].text;
        }
        else if (x.length == 9) {
            extract = x[6].text;
            hilist = x[7].text;
        }
        else if (x.length == 10) {
            extract = x[7].text;
            hilist = x[8].text;
        }
        else if (x.length == 2) {
            extract = x[1].text;
        }
        else if (x.length == 3) {
            extract = x[2].text;
        }
        else if (x.length == 4) {
            extract = x[3].text;
        }
        else {
            extract = x[4].text;
            hilist = x[5].text;
        }
        extract = extract.allReplace("\\t", "");
        extract = extract.allReplace({"&gt;": "≥"});
        extract = extract.allReplace({"&lt;": "≤"});
        var v = extract.substr(0, hilist);
        return v;
    }

    var s, e;

    function getm(x) {
        var extract, hilist, hilila;
        if (x.length == 8) {
            extract = x[5].text;
            hilist = x[6].text;
            hilila = x[7].text;
        }
        else if (x.length == 9) {
            extract = x[6].text;
            hilist = x[7].text;
            hilila = x[8].text;
        }
        else if (x.length == 10) {
            extract = x[7].text;
            hilist = x[8].text;
            hilila = x[9].text;
        }
        else if (x.length == 3) {
            extract = x[2].text;
        }
        else if (x.length == 2) {
            extract = x[1].text;
        }
        else if (x.length == 4) {
            extract = x[3].text;
        }
        else {
            extract = x[4].text;
            hilist = x[5].text;
            hilila = x[6].text;
        }
        extract = extract.allReplace("\\t", "");
        if (extract.length > 100) {
            s = extract.substr(hilist, 30);
            e = extract.substr(extract.length - (30 + hilila), extract.length - hilila);
            e = e.allReplace({"&gt;": "≥"});
            e = e.allReplace({"&lt;": "≤"});
            s = s.allReplace({"&gt;": "≥"});
            s = s.allReplace({"&lt;": "≤"});
            var m = s + "..." + e;
        }
        else {
            extract = extract.allReplace({"&gt;": "≥"});
            extract = extract.allReplace({"&lt;": "≤"});
            var m = extract.substr(hilist, hilila);
        }
        return m;
    }

    function getn(x) {
        var extract, hilist, hilila;
        if (x.length == 8) {
            extract = x[5].text;
            hilist = x[6].text;
            hilila = x[7].text;
        }
        else if (x.length == 9) {
            extract = x[6].text;
            hilist = x[7].text;
            hilila = x[8].text;
        }
        else if (x.length == 10) {
            extract = x[7].text;
            hilist = x[8].text;
            hilila = x[9].text;
        }
        else if (x.length == 2) {
            extract = x[1].text;
        }
        else if (x.length == 3) {
            extract = x[2].text;
        }
        else if (x.length == 4) {
            extract = x[3].text;
        }
        else {
            extract = x[4].text;
            hilist = x[5].text;
            hilila = x[6].text;
        }
        extract = extract.allReplace("\\t", "");
        extract = extract.allReplace({"&gt;": "≥"});
        extract = extract.allReplace({"&lt;": "≤"});
        var n = extract.substr((parseInt(hilist) + parseInt(hilila)), extract.length);
        return n;
    }

    return this.each(function (i, d) {
        if ($(this).length > 0) {
            $.each($('.w3cinner'), function (index, div) {
                if (div.children.length > 0) {
                    elmArray.push({id: index, kindElemente: div.children});
                }
            });
        }
        $.each(elmArray, function (ind, div) {
            if (div.kindElemente.length > 0) {
                if ((div.kindElemente[0].className == "w3cinfo info-type") || (div.kindElemente[1].className == "w3cinfo info-type")) {
                    if (div.kindElemente[0].nextElementSibling != null) {
                        var i = 0;
                        var x = [];
                        while (div.kindElemente[i] != undefined && div.kindElemente[i].nextElementSibling != null) {
                            x.push({id: i, text: div.kindElemente[i].nextElementSibling.innerHTML});
                            div.kindElemente[i].nextElementSibling.className += " hide";
                            i++;
                        }
                        var msgs = getMsgString(x);
                        var msgz = getZeileString(x);
                        var codev = getv(x);
                        var codem = getm(x);
                        var coden = getn(x);
                        if (codem == coden) {
                            if (codem == codev) {
                                codev = "";
                                coden = "";
                                codem = "";
                            }
                        }
                        var divz = document.createElement("div");
                        var htmldivz = document.createTextNode(msgz);
                        divz.className = "w3cinfo";
                        divz.appendChild(htmldivz);
                        if ($(this)[0].kindElemente[0].className != "w3cinner-key") {
                            var tmp = document.createElement("div");
                            var htmltmp = document.createTextNode(tmp);
                            tmp.className = "w3cinner-key";
                            tmp.appendChild(htmltmp);
                            $('#w3cfails > div:nth-child(3)').prepend(tmp);
                        }
                        $(this)[0].kindElemente[0].appendChild(divz);
                        var div = document.createElement("div");
                        var htmldiv = document.createTextNode(msgs);
                        div.className = "w3cinfo";
                        div.appendChild(htmldiv);
                        $(this)[0].kindElemente[0].appendChild(div);
                        var b = document.createElement("div");
                        var htmlb = document.createTextNode(codem);
                        b.className = "makiert";
                        b.appendChild(htmlb);
                        var v = document.createElement("div");
                        var htmlv = document.createTextNode(codev);
                        v.className = "vorher";
                        v.appendChild(htmlv);
                        var n = document.createElement("div");
                        var htmln = document.createTextNode(coden);
                        n.className = "nachher";
                        n.appendChild(htmln);
                        var code = document.createElement("div");
                        code.appendChild(v);
                        code.appendChild(b);
                        code.appendChild(n);
                        code.className += "codeblock w3cinfo";
                        $(this)[0].kindElemente[0].appendChild(code);
                    }
                }
                else if ((div.kindElemente[0].className == "w3cerror error-type") || (div.kindElemente[1].className == "w3cerror error-type")) {
                    if (div.kindElemente[0].nextElementSibling != null) {
                        var i = 0;
                        var x = [];
                        while (div.kindElemente[i] != undefined && div.kindElemente[i].nextElementSibling != null) {
                            x.push({id: i, text: div.kindElemente[i].nextElementSibling.innerHTML});
                            div.kindElemente[i].nextElementSibling.className += " hide";
                            i++;
                        }
                        var msgs = getMsgString(x);
                        var msgz = getZeileString(x);
                        var codev = getv(x);
                        var codem = getm(x);
                        var coden = getn(x);
                        if (codem == coden) {
                            if (codem == codev) {
                                codev = "";
                                coden = "";
                                codem = "";
                            }
                        }
                        var divz = document.createElement("div");
                        var htmldivz = document.createTextNode(msgz);
                        divz.appendChild(htmldivz);
                        divz.className = "w3cerror";
                        $(this)[0].kindElemente[0].appendChild(divz);
                        var div = document.createElement("div");
                        var htmldiv = document.createTextNode(msgs);
                        div.className = "w3cerror";
                        div.appendChild(htmldiv);
                        $(this)[0].kindElemente[0].appendChild(div);
                        var b = document.createElement("div");
                        var htmlb = document.createTextNode(codem);
                        b.className = "makiert";
                        b.appendChild(htmlb);
                        var v = document.createElement("div");
                        var htmlv = document.createTextNode(codev);
                        v.className = "vorher";
                        v.appendChild(htmlv);
                        var n = document.createElement("div");
                        var htmln = document.createTextNode(coden);
                        n.className = "nachher";
                        n.appendChild(htmln);
                        var code = document.createElement("div");
                        code.appendChild(v);
                        code.appendChild(b);
                        code.appendChild(n);
                        code.className += "codeblock w3cerror";
                        $(this)[0].kindElemente[0].appendChild(code);
                    }
                }
            }
        });
    });
};