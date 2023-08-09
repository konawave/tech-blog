# Tech Blog Pseudocode

## Pages
* Homepage
    * Includes existing posts (seeds)
    * Nav links to homepage & dashboard, login button (becomes logout button if login = true)
* Login Page
* Signup page
    * prompted to create username and password
    * saves credentials to database and logs user in
* Pages for each blog post? (OR MODAL INSTEAD HELL YEAH)
    * presented with post title, contents, post creator's username, and date created for the post. 
    * option to leave a comment
* Dashboard
    * Self-created blog posts
    * option to add a new blog post
    * When create blog post is clicked, prompted for title and contents
    * Option to delete your own blog post

## Misc
* Times out if idle for a certain amount of time

## Front End
* Homepage
    * established with handlebars and css
    * event listener for navbar buttons
    * validator for log-in?
* Public
    * CSS
    * JavsScript
* Views
    * All pages above
    * Partials?
        * Login button/sign-up button
        * Make post/add comment?

## Backend
*  Routes
    * HTML routes
        * Default route for homepage
        * Login route
        * Signup route
        * Dashboard
    * API
        * Modals?
        * Posting info to be saved to the database?
* Database
    * Models
        * Users
            * Has many posts
        * Posts
            * Has many comments
            * Belongs to users
        * Comments
            * Belongs to posts
    * Seeds


