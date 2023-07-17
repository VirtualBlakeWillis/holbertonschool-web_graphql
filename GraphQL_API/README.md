# Project: GraphQL API | Holberton Tulsa, OK, USA Intranet



Background Context
------------------


In this project, you will create an application using a query language, designed to make APIs fast, flexible and developer-friendly.
In the first part, you will create the back-end part using ExpressJs and set up GraphQl with all the parts (schema, root query and resolve function).
In second part, you will connect your back-end to mongoDB and test your queries to GraphQL server using Graphiql.
In the last part, you will create the front-end part using ReactJS and the GraphQL Client Apollo.


![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/1/db9754182c33dd1e221d1e47477dec107b0aa50b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230717%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230717T194525Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d42b40acb90db3d142d0d5a7913d46675825416b6c26395d44ebe12c580c8656)


Resources
---------


**Read or watch**:


* [GraphQL](/rltoken/FJgUd5EOz5SFuIuRLdvwUw "GraphQL")
* [GraphQL: Schemas and Types](/rltoken/F97hGO0ahG1QAuGSDgOVkA "GraphQL: Schemas and Types")
* [GraphQL: Queries and Mutations](/rltoken/nGwteBVGvpZ1z9klAz0DhQ "GraphQL: Queries and Mutations")
* [Mongoose](/rltoken/4PJr2zAAi9xoqI30vB_dIw "Mongoose")
* [Apollo-boost](/rltoken/BljVKJza-hTi3tJuZ-8xcQ "Apollo-boost")
* [Apollo Client (React)](/rltoken/uRzsfusrBGysli5nH1bcLw "Apollo Client (React)")


Learning Objectives
-------------------


At the end of this project, you are expected to be able to [explain to anyone](/rltoken/iDQXbhrFbLNwYHLI2brw1w "explain to anyone"), **without the help of Google**:


* What GraphQL means
* What is Graphiql
* How to test queries using Graphiql
* What is Apollo
* How to connect to mongoDB
* How to make queries from React
* How to make GraphQL server accept request from another server


Requirements
------------


* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `js` extension


Setup
-----


### Install NodeJS


(in your home directory): 



```
sudo apt install nodejs 

```


```
$ node -v
v12.x.x
$ npm -v
...

```

### Setup Express and GraphQL


In your folder **server** of GraphQL server:


* Add package.json using: `npm init`
	+ Install Express in the directory and save it in the dependencies list using: `npm install express --save`
	+ Set up GraphQL using: `npm install graphql express-graphql`


### Setup Apollo



```
npm i apollo-boost graphql react-apollo --save

```

Walk of the final graph
-----------------------


![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/1/500c4c0214d7a9dfcc16be81033a0d68d2aa2c6f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230717%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230717T194525Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d976b66854f514b9f68ba5fa0d00fa84690673bc6859851ff05880dae3ba0d68)



