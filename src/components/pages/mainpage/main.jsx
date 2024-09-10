import React from 'react'
import { BlogImg, BlogsCon, BlogsLeft, BlogsRight, BlogsTxt,Container, LeftRightCon, MainCon, MultiCarouselCon, Recommend1, RecommendCon, Video1,VideoCon,} from './style'
import CarouselComponent from '../../carousel/carousel'
import blogimg from "../../../assets/bg1.svg"
import VideoModal from '../../modals/videoModal'
import MultiCarouselComponent from '../../multicarousel/multicarousel'

const MainComponent = () => {
  return (
    <Container>
      <CarouselComponent/>
      <MainCon>
            <RecommendCon>
                  <Recommend1>
                   <text>Recommend</text>
                   <p></p>
                  </Recommend1>
                  <MultiCarouselCon>
                   <MultiCarouselComponent/>                      
                  </MultiCarouselCon>
                  {/* <Recommend2>
                        <ImageCon>
                              <img src={img1} alt="" />
                              <p>Knaus</p>
                              <DisBtn>
                                <button><p>Discover the range</p></button>
                              </DisBtn>
                              <ChooseCon>
                               <p>Choose a model</p>
                               <img src={choose} alt="" />
                              </ChooseCon>
                        </ImageCon>
                        <ImageCon>
                              <img src={img1} alt="" />
                              <p>Knaus</p>
                              <DisBtn>
                                <button><p>Discover the range</p></button>
                              </DisBtn>
                              <ChooseCon>
                               <p>Choose a model</p>
                               <img src={choose} alt="" />
                              </ChooseCon>
                        </ImageCon>
                        <ImageCon>
                              <img src={img1} alt="" />
                              <p>Knaus</p>
                              <DisBtn>
                                <button><p>Discover the range</p></button>
                              </DisBtn>
                              <ChooseCon>
                               <p>Choose a model</p>
                               <img src={choose} alt="" />
                              </ChooseCon>
                        </ImageCon>
                        <ImageCon>
                              <img src={img1} alt="" />
                              <p>Knaus</p>
                              <DisBtn>
                                <button><p>Discover the range</p></button>
                              </DisBtn>
                              <ChooseCon>
                               <p>Choose a model</p>
                               <img src={choose} alt="" />
                              </ChooseCon>
                        </ImageCon>
                  </Recommend2> */}
                  <Video1>
                        <h3>Videos</h3>
                        <p></p>
                  </Video1>
                  <VideoCon>
                   <VideoModal/>
                  </VideoCon>
                  {/* <Video2>
                        <VideoImg>
                              <ElipseImg>
                               <img src={playicon} alt="icon" />
                              </ElipseImg>
                        </VideoImg>
                        <VideoImg>
                              <ElipseImg>
                               <img src={playicon} alt="icon" />
                              </ElipseImg>
                        </VideoImg>
                        <VideoImg>
                              <ElipseImg>
                               <img src={playicon} alt="icon" />
                              </ElipseImg>
                        </VideoImg>
                        <VideoImg>
                              <ElipseImg>
                               <img src={playicon} alt="icon" />
                              </ElipseImg>
                        </VideoImg>
                        <VideoImg>
                              <ElipseImg>
                               <img src={playicon} alt="icon" />
                              </ElipseImg>
                        </VideoImg>
                        <VideoImg>
                              <ElipseImg>
                               <img src={playicon} alt="icon" />
                              </ElipseImg>
                        </VideoImg>
                        <VideoImg>
                              <ElipseImg>
                               <img src={playicon} alt="icon" />
                              </ElipseImg>
                        </VideoImg>
                        <VideoImg>
                              <ElipseImg>
                               <img src={playicon} alt="icon" />
                              </ElipseImg>
                        </VideoImg>
                  </Video2> */}
                  <BlogsCon>
                        <BlogsTxt>
                              <p>Blogs</p>
                              <text></text>
                        </BlogsTxt>
                        <LeftRightCon>
                        <BlogsLeft>
                              <h2>Lorem ipsum</h2>
                              <h3>@Lorem ipsum</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Placerat platea mauris at turpis. <br /> Volutpat, morbi sit vitae id. Aliquam eleifend <br /> aenean neque in in a quam vivamus</p>
                        </BlogsLeft>
                        <BlogsRight>
                              <BlogImg>
                               <img src={blogimg} alt="icon" />
                              </BlogImg>
                              <BlogImg>
                               <img src={blogimg} alt="icon" />
                              </BlogImg>
                              <BlogImg>
                               <img src={blogimg} alt="icon" />
                              </BlogImg>
                              <BlogImg>
                               <img src={blogimg} alt="icon" />
                              </BlogImg>
                              <BlogImg>
                               <img src={blogimg} alt="icon" />
                              </BlogImg>
                              <BlogImg>
                               <img src={blogimg} alt="icon" />
                              </BlogImg>
                        </BlogsRight>
                        </LeftRightCon>
                  </BlogsCon>
            </RecommendCon>
      </MainCon>
    </Container>
  )
}

export default MainComponent