import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 pb-5'>
            <h3>Blog</h3>
            <div className='container'>
                <div className='blog text-center mt-4'>
                    <h5>Q.1: What is purpose of React Router ?</h5>
                    <p>Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>


                </div>
                <div className='blog text-center mt-4'>
                    <h5>Q.2: How does Context Api works ?</h5>
                    <p>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br></br>
                        <strong> How it works?</strong><br></br>
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </p>


                </div>

                <div className='blog text-center mt-4'>
                    <h5>Q.3: What is useRef ?</h5>
                    <p>Answer: The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                      <br></br>
                        Syntax:
<br></br>
                        const refContainer = useRef(initialValue);
                        <br></br>
                        The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                    </p>


                </div>

            </div>
        </div>
    );
};

export default Blog;