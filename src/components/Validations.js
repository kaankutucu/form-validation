import {object, ref, string,} from 'yup';


const Validations = object({
    email: string().email(),
    password: string ().min(5),
    passwordConfirm : string().oneOf([ref('password')])
});



export default Validations;