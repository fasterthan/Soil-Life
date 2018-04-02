Soil Life 2.0
=============

Don't like these instructions or know of a better way to do things? Offer your suggestions to the team on [Slack](https://fertileunderground.slack.com)!



Server
------

Express is a minimalist framework for Node that simplifies a lot of common tasks for building web applications. Front end folks won't need to know much about Express or Node except for how the templating system works in Express.


### Express

Deep dive into part of a guide provided by Mozilla: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website


### Templates

With a templating engine the "logic" to display server content in the HTML is handled on the server. This is different from React where the logic is handled on the client's device. This doesn't mean much for static content on the site, where `<p>`'s and `<h1>`'s for instance are hard-coded with values in HTML, but for content that is fetched from a database and placed into the HTML this is where the template engine comes in.

Templates live in the **views** folder of our Express app and since we are using EJS their file names end with `.ejs`. EJS files are just HTML files that you can add special EJS code to add logic. In fact, we don't have to use EJS at all in the .ejs files, and for most of the website we probably won't. The power is in how easy Express makes it to serve these html files in its framework.

Learn about EJS syntax here: https://github.com/mde/ejs#features 



HTML
----

### Sections

Use HTML `<section>` tags to separate the different sections of the website with an id tag for each section to style all components within that section: `<section id="introduction">`.


### CSS

For now each section is going to have its own CSS files that way they are easier to manage.

Use the following syntax to help make the files more manageable:
```
/* BEGIN main components  */
  body {
    margin: 0px;level
    padding: 0px;
    font: 16px "Lucida Grande", Helvetica, Arial, sans-serif;
  }
  h1, h2 {
    margin: 0px;
    text-align: center;
    font-weight: lighter;
  }
/* END main components  */
```
Note how between the comments the code is indented.


To be continued...
------------------

More is coming. Stay tuned.