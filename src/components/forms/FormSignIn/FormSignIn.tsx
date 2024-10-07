import { Checkbox, Layout } from 'antd';
import './FormSignIn.less'
import React from 'react';
import EyeIcon from '../../../assets/icons/eye.svg'
import SignUpButton from '../../buttons/ButtonAccount/ButtonAccount'
import SignUpGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';

const FormSignInPage: React.FC = () => {
    return ( 
        <Layout className="signin">
            <h1 className='signin-title'>Sign In</h1>
            <form className='signin-from'>
                <label className='signin-from-email'>
                    <input type="email" placeholder='Email' />
                </label>
                <label className='signin-from-password'>
                    <input type="password" placeholder='Password' />
                    <img src={EyeIcon} alt="Eye" />
                </label>
            </form>
            <Checkbox className='signin-checkbox'>I accept the Terms and Conditions.</Checkbox>
            <div className='signin-button'>
                <SignUpButton className='signin-button-account' title='Sign In'/>
                <div className='signin-button-or'>OR</div>
                <SignUpGoogle className='signin-button-google' title='Continue with Google' />
            </div>
            <div className='signin-content'>
                <span>Already using DockChat?</span>
                <span>Sign in to an existing workspace</span>
            </div>
        </Layout>
    );
}

export default FormSignInPage;