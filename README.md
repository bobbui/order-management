#Overview 
##Tech stack:
-  **Client**: Polymer, Lodash
-  **Backend**: Node.js, ExpressJS, Mongoose
-  **Database**: MongoDB

##Deployment
Application is live at: [https://orders-management-system.herokuapp.com](https://orders-management-system.herokuapp.com )
-  The application is deployed on **Heroku** using source code pulled directly from GitHub.
-  The database is deployed on **mlab.com** cloud. 
    -  You can access database using this connection string: 
[mongodb://orders:orders@ds029665.mlab.com:29665/orders](mongodb://orders:orders@ds029665.mlab.com:29665/orders)
    -  Database can be repopulate using exported JSON files in /database folder

#Application
##Assumption
I assumed that an order only contains one type of drink.

##Source code structure
-  Back-end
    -  **routes/rest.js**: communicate with database and expose data/functionality to frontend via JSON RESTful web service.
-  Front-end
    -  **public/index.html**: application’s main page 
    -  **public/add-order-form.html**: custom element for adding new order.
    -  **public/all-orders.html**: custom element for tracking all orders.
    -  **public/shared-styles.html**: shared styles and custom SVG icon set.

##Data model
Database includes two following collections:
-  Drinks: contains information for all drinks type
```
{
"type" : <drink type>,
"name" : <drink name>,
"size" : <drink size>,
"price" : <drink price>
}
```
-  Orders: contains information for all orders:
```
{
"type" : <drink type>	,
"name" : <drink name>,
"size" : <drink size>,
"price" : <drink price>,
"quantity" : <quantity>,
"amount" : <total amount>,
"time" : <order date>,
}
```

##Main requirement
###0) Adding orders
-  Add new order on desktop
![alt text](https://raw.githubusercontent.com/thangbn/order-management/master/screenshot/add_Order.png "Add new order on desktop")
-  Add new order on mobile

<img src="https://raw.githubusercontent.com/thangbn/order-management/master/screenshot/add_Order-M.png" width="600">

###1)Keep track of all orders (total sales)
All orders are displayed in a table, default sorted by order time in descending order.
-  View all orders on desktop:
![alt text](https://raw.githubusercontent.com/thangbn/order-management/master/screenshot/All_Orders.png "All orders on desktop")

-  View all orders on mobile:

<img src="https://raw.githubusercontent.com/thangbn/order-management/master/screenshot/AllOrders-M.png" width="600">

###2) Group orders by type of orders (coffee or tea)
Using “filter by type” to group order by drinks’ type: coffee or/and tea

![alt text](https://raw.githubusercontent.com/thangbn/order-management/master/screenshot/All_Orders-GroupByType.png "Group orders by drink type")

###3) Group orders by type of size (tall, grande or venti)
Using “filter by size” to group order by drinks’ size: tall, grande and/or venti

![alt text](https://raw.githubusercontent.com/thangbn/order-management/master/screenshot/All_Orders-GroupBySize.png "Group orders by drink size")

##Additional question

###0)	What if we want a new type of coffee, a new type of tea?

A new type of drink can be easily added from the database. Front-end is implemented in a way that dynamically read all drink type and display on UI.
For example, I added following a new drink type “Americano”:
```
{
	"size" : "Tall",
	"price" : "1.98",
	"name" : "Americano",
	"type" : "Coffee"
}
```
![alt text](https://raw.githubusercontent.com/thangbn/order-management/master/screenshot/Add_New_Drink_Type.png "After add new drink type")

###1)	What if we want a new size?
New size can be added in the same way as adding new drink type except we need to add CSS code for new drink size. CSS can be added to add-order-form.html file as follow:
```
iron-icon.<name of new size> {
    height: <desired height which is relative to other sizes>;
    width: <desired width which is relative to other sizes >;
}
```
For example: I add a “Mini” size for “Cappuccino” into database:
```
{
	"size" : "Mini",
	"price" : "2.75",
	"name" : "Cappuccino",
	"type" : "Coffee"
}
```
And as new CSS to add-order-form.html file as follow
```
iron-icon.Mini {
    height: 24px;
    width: 24px;
}
```

![alt text](https://raw.githubusercontent.com/thangbn/order-management/master/screenshot/Add_New_Drink_Size.png "After add new drink size")

###2)	How would you change the model to add hot/cold options?
Add hot/cold will require adding a new property in drink model. On the frontend, we also need to add a new input field such as radio button group for users to select the hot/cold option. 

###3)	 (optional) How would you change the model to support adding condiments to drinks (perl, grass jelly,...)
We can follow either of two below methods to support condiments:
-  First method:  We will treat condiments just like properties of drink same as adding hot/cold options. We will need to add a new property in the database and add new input field on the front end. This way is simple to implement but may create a large number of drinks result from combinations of multiple drinks and multiple  condiments.
- Second method: we will treat condiment as separate items that have their own price. They will be ordered separately from drinks. Order total amount will be the sum of drink amount and condiments amount. We will need to add separate condiments section to add order screen. This method requires considerable effort on front-end side but will eliminate the complexity of management of a large number of drinks like the first method.
