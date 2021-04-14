import React, {Component} from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.util'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault()

        // this.setState({
        //     email: '',
        //     password: ''
        // })

        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target

        this.setState({ 
            [name]: value
        })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="Email"
                        required
                    />
                    <FormInput 
                        handleChange={this.handleChange}
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="Password"
                        required
                    />

                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>

                    <CustomButton type="button" onClick={signInWithGoogle}>
                        Sign in with Google
                    </CustomButton>
                    
                </form>
            </div>
        )
    }
}

export default SignIn