#IMPORTANT
for using project have to install globaly:
- node.js
- npm package manager
- install gulp globaly ()
- bower (if you need download packeges from bower) с флагом --save
- if you want use SASS need install RUBY(https://www.ruby-lang.org), COMPASS (gem install compass), SASS-GLOBBING (gem install sass-globbing)
- all additional library(jquery, canJs, sliders, etc.) should put into src/library/{LIBRARY_NAME}
when you install vendor's stuff using bower and npm DON'T FORGET to do it with --save-dev flag
all vendor's stuff should be in dev dependencies

#General
- Begin to work - write "npm install" in console (install nesesary packeges) then write "gulp" or "npm start" to start project
- base(console "gulp") or "default" task runs watch task witch consist:
	- [connect] - start server: localhost:8050 (port configurate in config.js)
	- [watch] - spy to your files and reload when they change
	- css builder by default less. [LESS], [SASS]
	- html compiller by default heandelbars. [heandelbars], [JADE]
	- [JS]
- prod(console "gulp prod")
	- css builder by default less. [LESS], [SASS]
	- html compiller by default heandelbars. [heandelbars], [JADE]
	- [JS]

#If you have problem:
- check console for errors
- make shure that all main library was instaled (see "important" point)
- reinstall all packages by command npm install

- filter portfolio



- in top module centered by translate
- hamburger animation
- picture
- mix-blend-mode
- background-blend-mode
- hover effect menu for mobile
- flex element
- vw vh
- filter grayscale
- column
- invalid
- svg icon


- canvas
- css animation
- 3d transformation
- XPath
- object-fit

gulp
- PurifyCSS
- https://github.com/addyosmani/critical
- gulp-webp
- http://vanamco.com/ghostlab/
- postcss
- Picturefill
- bower переделать
- yomen
- responsive img
- клиенкие UI tests
- pre-commit
- удаленный доступ к gulp tasks
- haml


- http://mootools.net/core/builder
- https://developer.mozilla.org
- http://paperjs.org/   ---  svg library

при создании less не билдит
