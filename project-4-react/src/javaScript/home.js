const handleLogin = () => {
    const userLoginInfo ={
        unameValue: '',
        pwdValue: ''
    }

    console.log('Firing handleLogin');
    const unameElement = document.getElementById('username');
    const pwdElement = document.getElementById('password');
    if (unameElement && pwdElement) {
        console.log('Found both elements');
        const unameValue = unameElement.value;
        const  pwdValue = pwdElement.value;
        console.log('unamevalue',unameValue);
        console.log('pwdvalue',pwdValue);
        userLoginInfo.unameValue = unameValue;
        userLoginInfo.pwdValue = pwdValue;
        console.log('userLoginInfo', userLoginInfo);
    }
};
