import React from 'react';
import { Field, reduxForm } from 'redux-form';

const BlogForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='Create Blog'>Create Blog:</label>
                <Field name='createBlog' component='input' type='text' />
            </div>
            <button type='submit'>Subit</button>
        </form>
    );
};

export default reduxForm({
    form: 'blogForm'
})(BlogForm);