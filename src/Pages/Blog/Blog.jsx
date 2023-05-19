import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <h3 className='text-5xl font-bold text-center my-10'>Welcome To Our Blog</h3>
            <div>
                <h3 className='text-2xl'>Question(1) : What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p>Ans : An access token is a string of characters that is used to authenticate and authorize an application to access an API. It is usually short-lived and expires after a certain amount of time. A refresh token is also a string of characters that is used to obtain new access tokens when the current access token expires. Refresh tokens are usually long-lived and can be used to obtain new access tokens for an extended period of time.

                    The main reason to use both access token and refresh token is to minimize the risks of a hacker requesting resource on behalf of somebody else. Client uses a refresh token along with the access token when making API calls. Client uses the refresh token only when the access token has expired and needs to be renewed.
                    <br /><br />
                    Cookies are small text files that are stored on the client-side by the user’s browser. They are used to store user-specific information such as login credentials, preferences, and shopping cart contents. Cookies are sent with every request to the server and can be accessed by both the client-side and server-side.

                    Cookies can be stored in different ways on the client-side. The most common way is to store them in the user’s browser. The browser stores cookies in a cookie jar that is associated with a specific domain.
                </p>
            </div>
            <div className='my-10'>
                <h3 className='text-2xl'>Question(2) : Compare SQL and NoSQL databases?</h3>
                <p>Ans : SQL and NoSQL databases are different types of databases that store and retrieve data in different ways. SQL databases are table-based and use a relational model and a structured query language. NoSQL databases are non-relational and can use various formats such as document-oriented, key-value pairs, graph structures, or wide-column stores.

                    SQL databases are suitable for applications that need multi-row transactions, consistency, and predefined models. NoSQL databases are suitable for applications that need scalability, performance, and flexibility</p>
            </div>
            <div>
                <h3 className='text-2xl'>Question(3) : What is express js? What is Nest JS (google it)?</h3>
                <p>Ans : Express.js is a minimal and flexible node.js web application framework that provides a robust set of features for building single and multi-page, and hybrid web applications1. NestJS is a rapidly growing NodeJS framework that is built on top of ExpressJS. It offers multiple functionalities and out-of-the-box APIs. NestJS enables developers to build amazing, organized, and lightweight microservices. It depends heavily on Angular architecture2.</p>
            </div>
            <div className='my-10'>
                <h3 className='text-2xl'>Question(4) : What is MongoDB aggregate and how does it work (google it)?</h3>
                <p>Ans : MongoDB aggregate is used to process data or records and return the combined output as a result. It is significant in MongoDB to return a single result of data from multiple documents. Aggregates are used to group the values from the multiple documents with each other. After grouping the values, it will perform various operations on grouped data and then return the result.

                    An aggregation pipeline consists of one or more stages that process documents. Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values. The documents that are output from a stage are passed to the next stage</p>
            </div>
        </div>
    );
};

export default Blog;