import React from 'react'
import {Button, Dimmer, Form, Grid, Header, Loader, Message, Segment} from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Validator as ReeValidate} from 'ree-validate'
import AuthService from '../../services'
import './index.css'
import {storeService} from "../../services/storeService";
//import PageHeader from '../../common/pageHeader'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new ReeValidate({
            name: 'required|min:3',
            password: 'required|min:6',
            email: 'required|min:3',
            avator: 'required|min:6',
        
        });
        this.state = {
            credentials: {
                name: '',
                password: '',
            },
            responseError: {
                isError: false,
                code: '',
                text: ''
            },
            isSuccess: false,
            isLoading: false,
            errors: this.validator.errorBag
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const {credentials} = this.state;
        credentials[name] = value;

        this.validator.validate(name, value)
            .then(() => {
                const {errorBag} = this.validator;
                this.setState({errors: errorBag, credentials})
            });
    }

    async handleSubmit(event) {
      event.preventDefault();
      const {credentials} = this.state;

      await storeService.register(credentials)
      this.setState({
        isAuthenticated:true
      })
    }

    submit(credentials) {
        // this.props.dispatch(AuthService.register(credentials))
        //     .then((result)  => {
        //         this.setState({
        //             isLoading: false
        //         });
        //         this.setState({
        //             isSuccess: true,
        //         });
        //     })
        //     .catch(({error, statusCode}) => {
        //         const responseError = {
        //             isError: true,
        //             code: statusCode,
        //             text: error
        //         };
        //         this.setState({responseError});
        //         this.setState({
        //             isLoading: false
        //         });
        //     })
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }

    render() {
        if (this.state.isAuthenticated) {
            return <Redirect to='/' replace/>
        }
        const {errors} = this.state;
        return (
            <div className='center'>
                {/*<PageHeader heading="Register"/> */}
                <Segment className='page-loader' style={{display: this.state.isLoading ? 'block' : 'none'}}>
                    <Dimmer active inverted>
                        <Loader size='large'>Registering...</Loader>
                    </Dimmer>
                </Segment>

                <Grid
                    textAlign='center'
                    verticalAlign='middle'
                    className='login-form'
                >
                    <Grid.Column style={{maxWidth: '450px'}}>
                        <Header as='h2' color='yellow' textAlign='center'>
                            Register for new account
                        </Header>
                        {this.state.responseError.isError && <Message negative>
                            <Message.Content>
                                {this.state.responseError.text}
                            </Message.Content>
                        </Message>}
                        {this.state.isSuccess && <Message positive>
                            <Message.Content>
                                Registered Successfully ! <Link to='/login' replace>Login</Link> here
                            </Message.Content>
                        </Message>}
                        <Form size='large' error={errors.any()}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    
                                    error={errors.has('email')}
                                    icon='envelope'
                                    iconPosition='left'
                                    name='email'
                                    placeholder='Email'
                                    onChange={this.handleChange}
                                />
                                {errors.has('name') &&  <Message
                                    error
                                    content={errors.first('name')}
                                />}
                                <Form.Input
                                    fluid
                                    error={errors.has('password')}
                                    icon='lock'
                                    iconPosition='left'
                                    name='password'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handleChange}
                                />
                              <Form.Input
                                fluid

                                icon='user'
                                iconPosition='left'
                                name='name'
                                placeholder='Name'
                                onChange={this.handleChange}
                              />
                              <Form.Input
                                fluid

                                icon='image'
                                iconPosition='left'
                                name='avator'
                                placeholder='Give the link of image of your Avator'
                                onChange={this.handleChange}
                              />
                                {errors.has('password') &&  <Message
                                    error
                                    content={errors.first('password')}
                                />}
                                <Button color='yellow' fluid size='large' onClick={this.handleSubmit}>Register</Button>
                            </Segment>
                        </Form>
                        <Message>
                            Already register ? <Link to='/login' replace>Login</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

Page.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default Page;