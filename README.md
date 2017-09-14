# E-filter.js Filter html elements with bootstrap dropdowns
Jquery e-filter.js enable to filter data inside a div container, fading in/out the elements, using bootstrap dropdowns. You can use any amount of filters/dropdowns! 

Current Version: 1.0


## Demo and Examples

Demo:
https://e-filter.thedemos.tk/

Example:
```js
//Dropdown
<div class="dropdown float-left">
            <button class="btn btn-default" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Company
              <i class="fa fa-caret-down"></i>
            </button>
            <ul class="dropdown-menu">
              <li class="active" data-catego="">
                <a>ALL</a>
              </li>
              <li data-catego="company1">
                <a>Company1</a>
              </li>
              <li data-catego="company2">
                <a>Company2</a>
              </li>
              <li data-catego="company3">
                <a>Company3</a>
              </li>
            </ul>
 </div>
 
 //Items to filter, fade in/out.
 <div class="row containerItems">
         

         <div data-filter="company1 provider1" class="col-12 col-sm-6 col-md-4">
         
            <div class="card card-lg">

              <div class="card-img">
                <a>
                  <img src="img/example.jpg" class="card-img-top" alt="Company 1"> </a>
                <div class="badge badge-pc">Company 1</div>
              </div>
              
              <div class="card-block">
                <h4 class="card-title">
                  Silly Bombs
                </h4>
              </div>

            </div>
          </div>
   </div>
```

## How it Works?

1. Add jquery library, e-search.js and bootstrap.
```js
<head>
   <link href="css/bootstrap.min.css" rel="stylesheet">
   <script src="js/jquery-3.1.0.min.js"></script>
</head>
    <body></body>
<script src="e-filter.js"></script>
<script src="js/bootstrap.min.js"></script>

```
2. Add your dropdowns  with id eFilter and the data-catego attribute, this will declare your search attribute. 
```js
<div class="dropdown float-left">
            <button class="btn btn-default" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Company
             <i class="fa fa-caret-down"></i>
            </button>
            <ul id="eFilter" class="dropdown-menu">
              <li class="active" data-catego="">
                <a>ALL</a>
              </li>
              <li data-catego="company1">
                <a>Company1</a>
              </li>
              <li data-catego="company2">
                <a>Company2</a>
              </li>
              <li data-catego="company3">
                <a>Company3</a>
              </li>
            </ul>
</div>
```


3. Add containerItems class to the container of your items.
```js
<div class="row containerItems">
```

4. Add data-filter attribute to the items of your containerItems. Add your search words for each item. 
```js
<div data-filter="company1">
```


## jQuery
jQuery Use the plugin when you import the e-filter.js script and adding the eFilter id in your dropdowns. New editable options coming with the version 1.1.


