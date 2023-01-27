import {Field, Form} from "uniform";
import {z} from 'zod';

function isEmailUnique(val: string) {
    return new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
            const isUnique = !val.startsWith("crutchcorn");
            if (isUnique) {
                resolve(true);
            } else {
                reject("That email is already taken");
            }
        }, 20)
    })
}

function App() {
    return (
        <Form onSubmit={(values) => {
            alert("Form was submitted with: " + JSON.stringify(values));
        }}>
            {({isValid, submit}) => (
                <>
                    <Field name="email"
                           onChangeValidate={z.string().email("This must be an email")}
                           onSubmitValidate={isEmailUnique}>
                        {({value, setValue, onBlur, errors, isTouched, isDirty}) => {
                            return <div>
                                <input value={value} onBlur={onBlur} onChange={e => setValue(e.target.value)}
                                       placeholder={"Email"}/>
                                {errors.map(error => <p key={error}>{error}</p>)}
                                {isTouched && <p>Is Touched</p>}
                                {isDirty && <p>Is Dirty</p>}
                            </div>
                        }}
                    </Field>
                    <Field<string> name="password"
                                   onChangeValidate={z.string().min(8, "Must be at least 8 characters long")}
                    >
                        {({value, setValue, onBlur, errors}) => {
                            return <div>
                                <input value={value} onBlur={onBlur} onChange={e => setValue(e.target.value)}
                                       placeholder={"Password"} type="password"/>
                                {errors.map(error => <p key={error}>{error}</p>)}
                            </div>
                        }}
                    </Field>
                    <Field<string> name="confirmpassword"
                                   listenTo={["password"]}
                                   onChangeValidate={(val, form) => {
                                       if (val === form.getFieldValue("password")!.value) {
                                           return Promise.resolve(true);
                                       } else {
                                           return Promise.reject("Passwords must match");
                                       }
                                   }}
                    >
                        {({value, setValue, onBlur, errors}) => {
                            return <div>
                                <input value={value} onBlur={onBlur} onChange={e => setValue(e.target.value)}
                                       placeholder={"Password Confirmation"} type="password"/>
                                {errors.map(error => <p key={error}>{error}</p>)}
                            </div>
                        }}
                    </Field>
                    <button disabled={!isValid} onClick={submit}>Submit</button>
                </>)}
        </Form>
    )
}

export default App