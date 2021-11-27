function SignUp({formData, setFormData}) {
    return (
        <div className="sign-up-container">
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})}/>
            <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}/>
            <input type="password" placeholder="Confirm" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword:e.target.value})}/>
        </div>
    )
};
export default SignUp;