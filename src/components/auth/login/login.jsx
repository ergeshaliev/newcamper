import React from 'react'
import { BtnW, BtnWrapp, Container, Email, Forget, Image1, Image2, Image3, ImageWrapp, InfoWrapper, Line1, Line2, LineWrapp, MainCon, Password, SignIn } from './style'
import img1 from "../../../assets/naver-logo.svg"
import img2 from "../../../assets/google-logo.svg"
import img3 from "../../../assets/kakao-logo.svg"
import { Link } from 'react-router-dom'

const LoginComponent = () => {
  return (
    <MainCon>
      <Container>
            <InfoWrapper>
                   <SignIn>
                    <h3>Sign in</h3>
                   </SignIn>
                  <Email>
                   <p>Email</p>
                   <input type="Email" placeholder='Your email'/>  
                  </Email>
                  <Password>
                   <p>Your password</p>
                   <input type="password" placeholder='Your password'/>
                  </Password>
                  <Forget>
                        <input type="checkbox" />
                        <p>Keep me logged in</p>
                        <h4>Forget your password?</h4>
                  </Forget>
                  <Link to = {"/motor"}>
                    <BtnWrapp>
                        <button>SIGN IN</button>
                    </BtnWrapp>
                  </Link>
                  <LineWrapp>
                        <Line1>
                              <p></p>
                        </Line1>
                        <p>OR</p>
                        <Line2>
                              <p></p>
                        </Line2>
                  </LineWrapp>
                  <ImageWrapp>
                        <Image1>
                             <img src={img1} alt="icon" />
                        </Image1>
                        <Image2>
                              <img src={img2} alt="icon" />
                        </Image2>
                        <Image3>
                              <img src={img3} alt="icon" />
                        </Image3>
                  </ImageWrapp>
                  <Link to = {"/register"}> 
                    <BtnW>
                        <button>CREATE ACCOUNT</button>
                    </BtnW>
                  </Link>


            </InfoWrapper>

      </Container>
    </MainCon>
  )
}

export default LoginComponent