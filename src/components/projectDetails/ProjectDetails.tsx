import { useParams } from 'react-router-dom';
import { projects } from '../../helpers/projectsList.ts';
import Button from '../button/Button.tsx';
import demoIcon from '../../img/icons/demo.svg';
import playIcon from '../../img/icons/play.svg';
import gitHubIcon from '../../img/icons/gitHub.svg';
import './projectDetails.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useState } from 'react';


const ProjectDetails = () => {

  const [showDescription, setShowDescription] = useState(false);
  const { id } = useParams();
  const project = projects.find((el) => el.id === Number(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  const { title, skills, demoLink, gitHubLink, images, videoLink, description } = project;

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1>{title}</h1>

          <ul className="project-details__tech-list">
            {skills.map((el: string) => {
              return (
                <li key={el}>{el}</li>
              )
            })}
          </ul>

          {description && <div>
            <button className='gradient-text-button' onClick={() => setShowDescription(!showDescription)}>
              {showDescription ? "Hide Description" : "Show Description"}
            </button>
            {showDescription && (
              <p className="project-details__description">
                {description}
              </p>
            )}
          </div>}

          {images && <div className="project-details__swiper">

            <Swiper
              spaceBetween={50}
              observer={true}
              observeParents={true}
              resizeObserver={true}
              speed={4000}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false
              }}
              loop={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper: any) => console.log(swiper)}
            >
              {images.map((el: string, i) => {
                return (
                  <SwiperSlide>
                    <img key={i} src={el} alt={title} />
                  </SwiperSlide>
                )
              })}

            </Swiper>
          </div>}

          <div className='project-details__buttons'>
            {gitHubLink && <Button title='Open GitHub Repo' icon={gitHubIcon} link={gitHubLink} />}
            {demoLink && <Button title='Visit Site' icon={demoIcon} link={demoLink} />}
            {videoLink && <Button title='See video overview' icon={playIcon} link={videoLink} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;