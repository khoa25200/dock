import './FormAuth.less'
import './FormAuth.media.less'
import React from 'react';
import { Layout } from 'antd';
import VerifyButton from '../../buttons/ButtonAccount/ButtonAccount';

const FormAuthPage: React.FC = () => {
    return ( 
        <Layout className="auth">
            <h1 className='auth-title'>Please check your email</h1>
            <p className='auth-email'>we’re send a code to <strong>namework@gmail.com</strong></p>
            <form className='auth-from'>
                <label className='auth-from-auth'>
                    <input type="text" maxLength={1} pattern="[0-9]" placeholder='7' />
                </label>
                <label className='auth-from-auth'>
                    <input type="text" maxLength={1} pattern="[0-9]" placeholder='1' />
                </label>
                <label className='auth-from-auth'>
                    <input type="text" maxLength={1} pattern="[0-9]" placeholder='2' />
                </label>
                <label className='auth-from-auth'>
                    <input type="text" maxLength={1} pattern="[0-9]" placeholder='4' />
                </label>
                <label className='auth-from-auth'>
                    <input type="text" maxLength={1} pattern="[0-9]" placeholder='5' />
                </label>
                <label className='auth-from-auth'>
                    <input type="text" maxLength={1} pattern="[0-9]" placeholder='8' />
                </label>
            </form>
            <VerifyButton className='auth-button' title='Verify' />
            <div className='auth-content'>
                Didn’t receive an email?<strong> Resend</strong>
            </div>
        </Layout>
    );
}

export default FormAuthPage;