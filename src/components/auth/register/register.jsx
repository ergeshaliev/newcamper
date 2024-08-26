import React from 'react'
import { BtnWrapp, Container, Email, KeepCon, MainCon, Password, Password2, Register, RegisterWrapp } from './style'
import img from "../../../assets/X-icon.svg"
import { Link } from 'react-router-dom'

const RegisterComponent = () => {
  return (
    <MainCon>
      <Container>
            <RegisterWrapp>
                  <Register>
                        <h3>Registrate</h3>
                        <img src={img} alt="" />
                  </Register>
                  <Email>
                        <p>Email</p>
                        <input type="text" placeholder='Your email' />
                  </Email>
                  <Password>
                        <p>Password</p>
                        <input type="password"  placeholder='Your password'/>
                  </Password>
                  <Password2>
                        <p>Repeat your password</p>
                        <input type="password" placeholder='Your password'/>
                  </Password2>
                  <KeepCon>
                        <input type="checkbox" />
                        <p>Keep me logged in</p>
                  </KeepCon>
                  <Link to = {"/login"}>
                    <BtnWrapp>
                        <button>REGISTRATE</button>
                    </BtnWrapp>
                  </Link>
            </RegisterWrapp>

      </Container>
    </MainCon>
  )
}

export default RegisterComponent