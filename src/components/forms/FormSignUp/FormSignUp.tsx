import { Checkbox, Layout } from 'antd';
import './FormSignUp.less'
import React from 'react';
import EyeIcon from '../../../assets/icons/eye.svg'
import SignUpButton from '../../buttons/ButtonAccount/ButtonAccount'
import SignUpGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';

const FormSignUpPage: React.FC = () => {
    return ( 
        <Layout className="signup">
            <h1 className='signup-title'>Sign Up</h1>
            <form className='signup-from'>
                <label className='signup-from-name'>
                    <input type="text" placeholder='FullName' />
                </label>
                <label className='signup-from-email'>
                    <input type="email" placeholder='Email' />
                </label>
                <label className='signup-from-password'>
                    <input type="password" placeholder='Password' />
                    <img src={EyeIcon} alt="Eye" />
                </label>
            </form>
            <Checkbox className='signup-checkbox'>I accept the Terms and Conditions.</Checkbox>
            <div className='signup-button'>
                <SignUpButton className='signup-button-account' title='Sign Up Account'/>
                <div className='signup-button-or'>OR</div>
                <SignUpGoogle className='signup-button-google' title='Continue with Google' />
            </div>
            <div className='signup-content'>
                <span>Already using DockChat?</span>
                <span>Sign in to an existing workspace</span>
            </div>
        </Layout>
    );
}

export default FormSignUpPage;