import {useFormik} from "formik";
import Validations from "./Validations";


const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '', password:'' , passwordConfirm:'',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema : Validations
    });
    return (
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />


            <br/><br/><br/>


            <label htmlFor="email">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            <br/><br/><br/>


            <label htmlFor="email">Password Confirm</label>
            <input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
            />




            <button type="submit">Submit</button>

            <br/><br/><br/>
            <code>{JSON.stringify(formik.values)}</code>
        </form>
    );
};


export default SignupForm;