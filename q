[1mdiff --git a/src/assets/style/main.css b/src/assets/style/main.css[m
[1mindex 335becb..97d8974 100644[m
[1m--- a/src/assets/style/main.css[m
[1m+++ b/src/assets/style/main.css[m
[36m@@ -17,11 +17,11 @@[m [mbody {[m
   background-color: #fff;[m
 }[m
 [m
[31m-a.link {[m
[32m+[m[32mbutton.link {[m
   transition: filter 0.1s linear, transform 0.1s ease-in-out;[m
 }[m
 [m
[31m-a.link:hover {[m
[32m+[m[32mbutton.link:hover {[m
   background: linear-gradient(to right, #06ab8c, #02ae5c, #53ba69);[m
   color: white;[m
 }[m
[1mdiff --git a/src/index.pug b/src/index.pug[m
[1mindex a9d9906..a7b93c0 100644[m
[1m--- a/src/index.pug[m
[1m+++ b/src/index.pug[m
[36m@@ -22,7 +22,7 @@[m [mhtml(lang="en" class="dark")[m
       //- h1(class="font-bold font-sans text-center text-lg lg:text-2xl custom-gradient") ANKURA'23[m
       div#links(class="flex flex-col items-stretch justify-center w-10/12 lg:w-3/12")[m
         each value in links[m
[31m-          a.link(href = value.link target="_blank" data-name = value.name data-id = value.id class="block text-center my-2 lg:my-3 py-3 lg:py-4 rounded-lg bg-gray-50 text-gray-800 font-bold text-sm lg:text-base cursor-pointer w-full transform hover:-translate-y-1 flex items-center justify-center")[m
[32m+[m[32m          button.link(data-url = value.link data-name = value.name data-id = value.id class="block text-center my-2 lg:my-3 py-3 lg:py-4 rounded-lg bg-gray-50 text-gray-800 font-bold text-sm lg:text-base cursor-pointer w-full transform hover:-translate-y-1 flex items-center justify-center")[m
             box-icon(type = value.type name = value.icon)[m
             span.ml-3= value.name[m
 [m
