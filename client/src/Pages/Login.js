import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Page} from '../Components/Containers/LayoutsElements'
import { Container, Row, Col, Card } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, Badge } from "reactstrap";
function Login({ login }) {
  const [input, setInput] = useState('')
  const [password, setPassword] = useState('')

  const submitLogin = () => {
    // add axios api call...
    console.log('submitted...')
  }

  return (

    <Page>
      <Container fluid className="login-container">
        <Row className="login-form">
          <Col xs={{ size: 12 }}>
            <Card body className="login-card">
              <Form>
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="login">Email:</Label>
                      <Input
                        type="email"
                        name="email"
                        id="Email"
                        placeholder="metalmania@motorhead.com"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="password">Password:</Label>
                      <Input
                        type="password"
                        name="password"
                        id="Password"
                        placeholder="insert password"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" className="text-right">
                    <Button>Sign in</Button>
                  </Col>
                  <Col sm="12" className="text-center pt-4">
                  <Link to="/signup"><Badge>Sign up for an account</Badge></Link>
                    
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </Page>
  )
}

export default Login