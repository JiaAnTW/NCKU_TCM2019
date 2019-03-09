# Official website of 2019 NCKU TCM wintercamp


The source code of [official static website, 2019 NCKU TCM wintercamp](http://wintercamp.tcm.ncku.edu.tw/#/), created by<code>
create-react-app
</code>.
All works in this website are made by myself.
***
## Home page
Includes a clock which counts how many days are there until the camp starts. If the camp ends, the clock will display 0.

Instructions for the members of this camp will fade in when the first and the second buttons are clicked. At the same time, the clock become transparent to let users read the contents of instruction more clearly.

Users will be directed to the "about_camp" page while clicking the third button.

![home](https://i.imgur.com/G7bevsU.png)


***


## About_TCM and others page
The navigation bar is always same in all pages. Therefore, all pages are children of a same layout page in <code>react-router</code> so that react's virtual dom can avoid unnecessary dom updates. 


Pages in this webites are quite same. Most of the contents are actually picture since there's no interactive feature at there.

However, there are still some active features:
* Hidden content : ( In "about_TCM" )
    The contents of major introduction are hidden in the topic, and will be gradully showed when mouse hover it. This feature is removed on the mobile version, where the contents are displayed directly.
    
    ![](https://i.imgur.com/oirH2kx.png)

* Profile page : ( In "about_TCM" )
    There are three menu buttons on the bottom. When clicked, the white circle will move, and the content will change into another comment by updating states.
    
    ![](https://i.imgur.com/EZfR05m.png)

***

## RWD issue

This website has a mobile version. However, it is stored at a different server/[domain](http://wintercampmobile.tcm.ncku.edu.tw/#/) from PC version because I didn't have enough front-end skills at that time. If having a chance to rebuild this, I will use css or <code>window.addEventListener</code> to design RWD feature.

![](https://i.imgur.com/OmBwVBS.png =250x)![](https://i.imgur.com/y6HkikZ.png =250x)

***
## For TCM students: How to edit this website

如果你是成大交管的學生並想修改這個網站，[請和我聯絡](https://www.facebook.com/JiaAnChang.Andy)。我會教你不需要程式 ( 如果你想要的話用程式也是可以，不過請先做好心理準備 )來建構/修改交管營網站的方法。

