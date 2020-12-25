import React from 'react';

function Resume(props) {
    return(
        <p>Converting old code just for the sake of it isn’t the smartest idea.
        When our team set out to introduce React to a few of our pages we wanted to see performance benefits, faster development, and happier developers.
        Our frontend project is large and we suffer from problems that any software company has. We have legacy Javascript frameworks, abundant jQuery plugins, and code that is difficult to refactor. When adding React to our list of growing libraries we wanted to make sure something was on its way out.
        We had an Angular 1 app that had not been updated in a few years and thought replacing these pages first would be a good start. I would recommend taking this approach and replace an entire page or feature so you have a benchmark rather than working on something brand new.
        This way you can make comparisons between React and your previous code.
        Getting Configured
        Create React App
        If you are just learning React, chances are you have installed create-react-app provided by Facebook. This is a great playground to get up and running but we chose to install everything from scratch. I would recommend doing a manual install because you will gain valuable knowledge and know exactly what is going on. It is also less likely you are creating an empty project and more likely you are integrating React into an existing project.
        Webpack
        Our team had recently introduced Webpack as part of our frontend build process and were enjoying the benefits of bundling, versioning, and minification. Webpack is not just important for a React project but any large project that is made up of dozens of files. With this step completed we moved on to bringing in Babel.
        Babel
        Babel is a Javascript compiler. It basically allows you to write in the latest Javascript coding standards and have it work in older browsers. This is a critical step because React utilizes the latest coding standards and most of the tutorials you will come across will assume you are using Babel. Just like Webpack, Babel is a great addition to any project as it takes the work out of writing code for specific browsers. You can specifying what browser you want to support.
        React
        Finally, the good stuff. Now that Webpack and Babel are installed, it’s a simple npm install react and react-dom and you can begin writing your first component.
        Make Everything a Component
        Components
        Before writing any code, it’s best to determine the components you want to create. Since we were converting features to React we could screen capture a page and easily draw out what we think should be broken out. If we felt that something could be reused in the future, it was a candidate for its own component. A button, image path builder, avatar, input, user card, these would all become their own presentational components. The obvious benefits of this were that they could be reused many times. If they contained any logic or state management they could be tested once and we would feel confident reusing them.
        Sometimes it’s not as black or white to determine if something deserves to be a component. We had one page that was built for a client and was styled completely differently then the rest of our app. This page and its features would most likely not be reused, but we felt the logic and scope of the page deserved to be broken down for readability. We ended up breaking up tile that was being iterated over and categorized this as a probably not reusable component.
        File Structure
        The best advice on file structure is from the official React documentation and it’s simple. Don’t overthink it. We decided to structure our Components by feature and after over 20 components we are still happy with this approach. Something that we had not done in the past was include the spec in the same folder as the component. We found this very helpful as we didn’t have to go to a different tests folder to see which components had test coverage.</p>
    )    
}

export default Resume