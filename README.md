
# styleValidate.js
- Stylt das W3C ergebnis von http://html5.validator.nu/?out=json&doc=

# Hier gehts zur [Live Demo] - none

## Getting Started
This plugin is developed with `jquery-1.11.2`
> Test it with other Versions!!!

Add to your HTML
```html

<link rel="stylesheet" href="css/stylehistory.css">

<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="jquery.stylevalidate.min.js"></script>
```

#How to use:
```html
<head>
<script>
         $(document).ready(function(){
                    $('#w3cfails').styleValidate({silent: false});
                });
</script>
</head>

<body>
<div id="w3cfails" class="collapse in" aria-expanded="true">
<h4>Fehler in Ihrem Code sind:</h4>
    <div class="w3c -url">http://www.google.de</div>
    <div class="w3cinner">1:</div>
    <div class="w3cinner">1:
        <div class="w3cinfo info-type">info</div>
        <div class="w3cinfo info-url">http://www.google.de/</div>
        <div class="w3cinfo info-subType">warning</div>
        <div class="w3cinfo info-message">Using “windows-1252” instead of the declared encoding “iso-8859-1”.</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">2:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cinfo info-type">info</div>
        <div class="w3cinfo info-url">http://www.google.de/</div>
        <div class="w3cinfo info-subType">warning</div>
        <div class="w3cinfo info-message">Legacy encoding “windows-1252” used. Documents should use UTF-8.</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">3:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">3</div>
        <div class="w3cerror error-lastColumn">1968</div>
        <div class="w3cerror error-firstColumn">1948</div>
        <div class="w3cerror error-message">The “bgcolor” attribute on the “body” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">pt&gt;&lt;/head&gt;&lt;body bgcolor="#fff"&gt;&lt;scrip</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">21</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">4:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">52</div>
        <div class="w3cerror error-firstColumn">47</div>
        <div class="w3cerror error-message">Element “nobr” not allowed as child of element “div” in this context. (Suppressing further errors from this subtree.)</div>
        <div class="w3cerror error-extract">v id=gbar&gt;&lt;nobr&gt;&lt;b cla</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">6</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">5:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">127</div>
        <div class="w3cerror error-message">“&amp;” did not start a character reference. (“&amp;” probably should have been escaped as “&amp;amp;”.)</div>
        <div class="w3cerror error-extract">.de/imghp?hl=de&amp;tab=wi"&gt;Bilder</div>
        <div class="w3cerror error-hiliteStart">15</div>
        <div class="w3cerror error-hiliteLength">1</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">6:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">198</div>
        <div class="w3cerror error-message">“&amp;” did not start a character reference. (“&amp;” probably should have been escaped as “&amp;amp;”.)</div>
        <div class="w3cerror error-extract">e.de/maps?hl=de&amp;tab=wl"&gt;Maps&lt;/</div>
        <div class="w3cerror error-hiliteStart">15</div>
        <div class="w3cerror error-hiliteLength">1</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">7:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">265</div>
        <div class="w3cerror error-message">“&amp;” did not start a character reference. (“&amp;” probably should have been escaped as “&amp;amp;”.)</div>
        <div class="w3cerror error-extract">ogle.com/?hl=de&amp;tab=w8"&gt;Play&lt;/</div>
        <div class="w3cerror error-hiliteStart">15</div>
        <div class="w3cerror error-hiliteLength">1</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">8:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">331</div>
        <div class="w3cerror error-message">“&amp;” did not start a character reference. (“&amp;” probably should have been escaped as “&amp;amp;”.)</div>
        <div class="w3cerror error-extract">tube.com/?gl=DE&amp;tab=w1"&gt;YouTub</div>
        <div class="w3cerror error-hiliteStart">15</div>
        <div class="w3cerror error-hiliteLength">1</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">9:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">404</div>
        <div class="w3cerror error-message">“&amp;” did not start a character reference. (“&amp;” probably should have been escaped as “&amp;amp;”.)</div>
        <div class="w3cerror error-extract">.de/nwshp?hl=de&amp;tab=wn"&gt;News&lt;/</div>
        <div class="w3cerror error-hiliteStart">15</div>
        <div class="w3cerror error-hiliteLength">1</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">10:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">699</div>
        <div class="w3cerror error-firstColumn">675</div>
        <div class="w3cerror error-message">Attribute “width” not allowed on element “div” at this point.</div>
        <div class="w3cerror error-extract">obr&gt;&lt;/div&gt;&lt;div id=guser width=100%&gt;&lt;nobr&gt;</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">25</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">11:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">705</div>
        <div class="w3cerror error-firstColumn">700</div>
        <div class="w3cerror error-message">Element “nobr” not allowed as child of element “div” in this context. (Suppressing further errors from this subtree.)</div>
        <div class="w3cerror error-extract">idth=100%&gt;&lt;nobr&gt;&lt;span</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">6</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">12:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">1003</div>
        <div class="w3cerror error-message">“&amp;” did not start a character reference. (“&amp;” probably should have been escaped as “&amp;amp;”.)</div>
        <div class="w3cerror error-extract">viceLogin?hl=de&amp;continue=http:</div>
        <div class="w3cerror error-hiliteStart">15</div>
        <div class="w3cerror error-hiliteLength">1</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">13:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">1157</div>
        <div class="w3cerror error-firstColumn">1150</div>
        <div class="w3cerror error-message">The “center” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">    &lt;/div&gt;&lt;center&gt;&lt;span</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">8</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">14:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">1200</div>
        <div class="w3cerror error-firstColumn">1196</div>
        <div class="w3cerror error-message">Element “div” not allowed as child of element “span” in this context. (Suppressing further errors from this subtree.)</div>
        <div class="w3cerror error-extract">y:block"&gt; &lt;div&gt;&lt;style</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">5</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">15:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">3105</div>
        <div class="w3cerror error-firstColumn">3088</div>
        <div class="w3cerror error-message">The “border” attribute on the “table” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">ay:none"&gt; &lt;table border="0"&gt; &lt;tr&gt; </div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">18</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">16:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">3170</div>
        <div class="w3cerror error-message">“&amp;” did not start a character reference. (“&amp;” probably should have been escaped as “&amp;amp;”.)</div>
        <div class="w3cerror error-extract">"google.promos&amp;&amp;google.promos.</div>
        <div class="w3cerror error-hiliteStart">15</div>
        <div class="w3cerror error-hiliteLength">1</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">17:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">3347</div>
        <div class="w3cerror error-firstColumn">3301</div>
        <div class="w3cerror error-message">An “img” element must have an “alt” attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.</div>
        <div class="w3cerror error-extract">span="2"&gt; &lt;img src="/images/icons/product/chrome-48.png"&gt; &lt;/td&gt;</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">47</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">18:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">6</div>
        <div class="w3cerror error-lastColumn">3615</div>
        <div class="w3cerror error-message">“&amp;” did not start a character reference. (“&amp;” probably should have been escaped as “&amp;amp;”.)</div>
        <div class="w3cerror error-extract">"google.promos&amp;&amp;google.promos.</div>
        <div class="w3cerror error-hiliteStart">15</div>
        <div class="w3cerror error-hiliteLength">1</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">19:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">58</div>
        <div class="w3cerror error-firstColumn">33</div>
        <div class="w3cerror error-message">The “clear” attribute on the “br” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">v&gt; &lt;/span&gt;&lt;br clear="all" id="lgpd"&gt;&lt;div i</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">26</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">20:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">252</div>
        <div class="w3cerror error-message">“&amp;” did not start a character reference. (“&amp;” probably should have been escaped as “&amp;amp;”.)</div>
        <div class="w3cerror error-extract">ad="window.lol&amp;&amp;lol()"&gt;&lt;div no</div>
        <div class="w3cerror error-hiliteStart">15</div>
        <div class="w3cerror error-hiliteLength">1</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">21:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">259</div>
        <div class="w3cerror error-firstColumn">105</div>
        <div class="w3cerror error-message">The “align” attribute on the “div” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">px 0 3px"&gt;&lt;div style="height:110px;width:276px;background:url(/images/srpr/logo9w.png) no-repeat" title="Google" align="left" id="hplogo" onload="window.lol&amp;&amp;lol()"&gt;&lt;div n</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">155</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">22:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">363</div>
        <div class="w3cerror error-firstColumn">260</div>
        <div class="w3cerror error-message">Attribute “nowrap” not allowed on element “div” at this point.</div>
        <div class="w3cerror error-extract">l&amp;&amp;lol()"&gt;&lt;div nowrap="" style="color:#777;font-size:16px;font-weight:bold;position:relative;top:70px;left:218px"&gt;Deutsc</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">104</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">23:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">473</div>
        <div class="w3cerror error-firstColumn">435</div>
        <div class="w3cerror error-message">The “cellpadding” attribute on the “table” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract"> name="f"&gt;&lt;table cellpadding="0" cellspacing="0"&gt;&lt;tr va</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">39</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">24:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">473</div>
        <div class="w3cerror error-firstColumn">435</div>
        <div class="w3cerror error-message">The “cellspacing” attribute on the “table” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract"> name="f"&gt;&lt;table cellpadding="0" cellspacing="0"&gt;&lt;tr va</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">39</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">25:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">490</div>
        <div class="w3cerror error-firstColumn">474</div>
        <div class="w3cerror error-message">The “valign” attribute on the “tr” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">acing="0"&gt;&lt;tr valign="top"&gt;&lt;td wi</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">17</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">26:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">506</div>
        <div class="w3cerror error-firstColumn">491</div>
        <div class="w3cerror error-message">The “width” attribute on the “td” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">ign="top"&gt;&lt;td width="25%"&gt;&amp;nbsp;</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">16</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">27:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">546</div>
        <div class="w3cerror error-firstColumn">518</div>
        <div class="w3cerror error-message">The “align” attribute on the “td” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">nbsp;&lt;/td&gt;&lt;td align="center" nowrap=""&gt;&lt;input</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">29</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">28:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">546</div>
        <div class="w3cerror error-firstColumn">518</div>
        <div class="w3cerror error-message">The “nowrap” attribute on the “td” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">nbsp;&lt;/td&gt;&lt;td align="center" nowrap=""&gt;&lt;input</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">29</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">29:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">1309</div>
        <div class="w3cerror error-firstColumn">1255</div>
        <div class="w3cerror error-message">The “align” attribute on the “td” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">span&gt;&lt;/td&gt;&lt;td class="fl sblc" align="left" nowrap="" width="25%"&gt;&lt;a hre</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">55</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">30:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">1309</div>
        <div class="w3cerror error-firstColumn">1255</div>
        <div class="w3cerror error-message">The “nowrap” attribute on the “td” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">span&gt;&lt;/td&gt;&lt;td class="fl sblc" align="left" nowrap="" width="25%"&gt;&lt;a hre</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">55</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">31:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">1309</div>
        <div class="w3cerror error-firstColumn">1255</div>
        <div class="w3cerror error-message">The “width” attribute on the “td” element is obsolete. Use CSS instead.</div>
        <div class="w3cerror error-extract">span&gt;&lt;/td&gt;&lt;td class="fl sblc" align="left" nowrap="" width="25%"&gt;&lt;a hre</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">55</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">32:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">1644</div>
        <div class="w3cerror error-firstColumn">1617</div>
        <div class="w3cerror error-message">Element “div” not allowed as child of element “span” in this context. (Suppressing further errors from this subtree.)</div>
        <div class="w3cerror error-extract">="footer"&gt;&lt;div style="font-size:10pt"&gt;&lt;div s</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">28</div>
    </div>
    <div class="w3cinner">
        <div class="w3cinner-key">33:
            <div class="typevalArray"></div>
        </div>
        <div class="w3cerror error-type">error</div>
        <div class="w3cerror error-lastLine">7</div>
        <div class="w3cerror error-lastColumn">2091</div>
        <div class="w3cerror error-firstColumn">2053</div>
        <div class="w3cerror error-message">Element “p” not allowed as child of element “span” in this context. (Suppressing further errors from this subtree.)</div>
        <div class="w3cerror error-extract">div&gt;&lt;/div&gt;&lt;p style="color:#767676;font-size:8pt"&gt;&amp;copy;</div>
        <div class="w3cerror error-hiliteStart">10</div>
        <div class="w3cerror error-hiliteLength">39</div>
    </div>
</div>
</body>
```




### Release History
* 1.0.0 Final Release
