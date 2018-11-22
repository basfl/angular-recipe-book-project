# project structure
* app
    * header
    * recipes
        * recipe-detail
        * recipe-list
    * shopping-list
        * shopping-edit
# generate component

* ng g c recipes --spec false
* ng g c recipes/recipe-list  --spec false
* ng g c recipes/recipe-detail  --spec false
* ng g c recipes/recipe-list/recipe-item  --spec false
* ng g c shopping-list  --spec false
* ng g c shopping-list/shopping-edit  --spec false

# generate directives

* ng g d shared/dropdown

# Installed Packages

* npm install --save bootstrap@3

#  Http link
    *  firebase https://ng-recipe-book-1ef56.firebaseio.com/
    *  shared folder holds data-storage-service to connect to firebase backend

