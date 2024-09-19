import {z} from 'zod'
export const usernameValidation=z
.string()
.min(2,'username must be at least 2 characters')
.max(20,'username must be no more then 20 characters')
.regex(/^[a-zA-Z0-9_]+$/,'username must not contain secial character')


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:'Invalid Email address'}),
    password:z.string().min(6,{message:'password must be at least 6 characters'})
})