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
* npm install --save firebase

#  Http link
    *  firebase https://ng-recipe-book-1ef56.firebaseio.com/
    *  shared folder holds data-storage-service to connect to firebase backend
    *  note :
        * here i did not use "rxjs-compat": "^6.1.0" therefore we need to 
            * import { map } from 'rxjs/operators'; 
            * and use pip( 
                map(()=>{})
                )
#   Auth
    *  Initialize the firebase sdk in app.component.ts

