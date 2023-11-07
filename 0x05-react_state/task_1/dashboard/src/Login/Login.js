import React, {Component} from "react";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
    container: {
        fontSize: '1rem',
        fontFamily: 'Arial, Helvetica, sans-serif',
        margin: 'auto',
        height: '13rem',
        padding: '3rem',
        "@media (max-width: 900px)": {
            display: "flex",
            flexDirection: "column",
        },
    },
    input: {
        marginRight: '5px'
    }
});

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            enableSubmit: false
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleLoginSubmit() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleChangeEmail(e) {
        const email = e.target.value;
        this.setState({ email }, () => this.updateEnableSubmit());
      }

    handleChangePassword(e) {
        const password = e.target.value;
        this.setState({ password }, () => this.updateEnableSubmit());
    }

    updateEnableSubmit() {
        const { email, password } = this.state;
        const enableSubmit = email !== '' && password !== '';
        this.setState({ enableSubmit });
    }

    render() {
        return (
            <>
                <div className={css(styles.container)}>
                    <form>
                        <p>Login to access the full dashboard</p>
                        <label htmlFor='email'>Email: </label>
                        <input
                            className={css(styles.input)}
                            type='email'id='email' autoComplete="on"
                            value={this.state.email} onChange={this.handleChangeEmail}>
                        </input>
                        <label htmlFor='password'> Password: </label>
                        <input
                            type='password' id='password' autoComplete="on"
                            value={this.state.password} onChange={this.handleChangePassword}></input>
                        <input type='submit' onSubmit={this.handleLoginSubmit} disabled={!this.state.enableSubmit}></input>
                    </form>
                </div>
            </>
        );
    }
}

// Function Method 
// export default function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [enableSubmit, setEnableSubmit] = useState(false);

//     const handleLoginSubmit = () => {
//         setIsLoggedIn(true);
//     };

//     const handleChangeEmail = (e) => {
//         setEmail(e.target.value);
//         updateEnableSubmit(e.target.value, password);
//     };

//     const handleChangePassword = (e) => {
//         setPassword(e.target.value);
//         updateEnableSubmit(email, e.target.value);
//     };

//     const updateEnableSubmit = (newEmail, newPassword) => {
//         setEnableSubmit(newEmail !== "" && newPassword !== "");
//     };

//     return (
//         <>
//             <div className={css(styles.container)}>
//                 <form>
//                     <p>Login to access the full dashboard</p>
//                     <label htmlFor='email'>Email: </label>
//                     <input
//                         className={css(styles.input)}
//                         type='email'id='email' autoComplete="on"
//                         value={email} onChange={handleChangeEmail}>
//                     </input>
//                     <label htmlFor='password'> Password: </label>
//                     <input
//                         type='password' id='password' autoComplete="on"
//                         value={password} onChange={handleChangePassword}></input>
//                     <input type='submit' onSubmit={handleLoginSubmit} disabled={!enableSubmit}></input>
//                 </form>
//             </div>
//         </>
//     );
// }
