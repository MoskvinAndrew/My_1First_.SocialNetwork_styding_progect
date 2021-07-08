import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {FilterType} from "../../../Redux/user_reducer_test_selectors/users-reducer";

type UsersSearchPropsType = {
    onFilterChanged:(filter:FilterType)=>void
}
type UserSearchFormType = {
    term:string,
    friend:'true'|'false'|'null'
}

const UsersSearchForm: React.FC<UsersSearchPropsType> = (props) => {
    const validateSearchForm = (values:FilterType) => {
            // const errors = {};
            // if (!values.email) {
            //     errors.email = 'Required';
            // } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            // ) {
            //     errors.email = 'Invalid email address';
            // }
            // return errors;
        }

    const onSubmit = (values:UserSearchFormType, {setSubmitting}:{setSubmitting:(isSubmitting: boolean) => void}) => {
        const filter = {
            term:values.term,
            friend:values.friend==='null'?null:values.friend==='true'?true:false
        }
        setTimeout(() => {
            props.onFilterChanged(filter)

            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    return (<div>
        <div>
            <h1>Lets find someone!)</h1>
            <Formik
                initialValues={{term: '',friend:'null'}}
                // validate={validateSearchForm}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Followed</option>
                            <option value="false">Unfollowed</option>
                        </Field>
                        <ErrorMessage name="term" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            SEARCH
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    </div>)
}
export default UsersSearchForm