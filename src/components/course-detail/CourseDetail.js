import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';
import Heading from 'react-bulma-components/lib/components/heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

import './CourseDetail.css';

const Course = ({ course }) => {
  const { id } = useParams();

  return (
    <Container>
      <Columns>
        <Columns.Column size={8}>
          <Heading size={3}>Course Title</Heading>
          <Heading subtitle size={6}>
            <Content>
              <FontAwesomeIcon className="icon" icon={faStopwatch} />
              186h 41m 30s
            </Content>
          </Heading>
          <Content>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nesciunt a illum
              blanditiis libero quasi magnam, deserunt, reprehenderit voluptatum, quia eveniet non
              veritatis! In exercitationem tempore illo laboriosam ut odio vitae? Dolorum unde quia,
              ex ut non soluta nobis at vero quaerat, iusto cupiditate ab reiciendis dolores
              distinctio ipsam. Laboriosam blanditiis debitis, suscipit reiciendis nemo modi quo
              minima? Impedit fuga at maiores excepturi ex suscipit ducimus rem hic nesciunt.
              Voluptatum cumque, commodi dignissimos itaque et, repellendus voluptates culpa ducimus
              quod, sunt vero. Vitae tempore repellat explicabo ducimus incidunt quas placeat! Ea
              ipsa cupiditate ducimus voluptatem, iste dolores temporibus tempore rem, blanditiis
              quae quas quibusdam perspiciatis dignissimos fugit? Laboriosam alias, corrupti ea
              saepe architecto ut nemo reiciendis vel laborum reprehenderit tempora pariatur quas
              labore voluptatem necessitatibus eveniet tenetur quia? Voluptatem sint sed in
              aspernatur quis! Neque repellat odio sit nisi corporis, excepturi, beatae doloremque
              ipsum veritatis reiciendis quos consequatur unde. Quis.
            </p>
            <hr />
            <Heading size={4}>Topics</Heading>
            <ul>
              <li>
                <a href="#Yes">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, sapiente.
                </a>
              </li>
              <li>
                <a href="#Yes">
                  Distinctio eveniet unde praesentium vitae error voluptas laudantium veniam
                  perferendis.
                </a>
              </li>
              <li>
                <a href="#Yes">
                  Fuga esse ullam provident? Maiores quidem dolorem in excepturi temporibus.
                </a>
              </li>
              <li>
                <a href="#Yes">Et suscipit, ratione cumque quis maxime minus ea culpa earum!</a>
              </li>
              <li>
                <a href="#Yes">
                  Aliquam doloribus doloremque perferendis quae laborum recusandae omnis est sequi?
                </a>
              </li>
              <li>
                <a href="#Yes">
                  Quo sunt voluptatum nam non doloremque laborum eaque quae placeat?
                </a>
              </li>
              <li>
                <a href="#Yes">
                  Dolore molestias quis natus inventore ex, rem dolorem voluptas nulla?
                </a>
              </li>
              <li>
                <a href="#Yes">
                  Suscipit perferendis voluptates id doloribus sed facilis dignissimos voluptas
                  voluptatem.
                </a>
              </li>
              <li>
                <a href="#Yes">
                  Possimus quod a expedita assumenda modi perferendis, natus impedit consequuntur!
                </a>
              </li>
              <li>
                <a href="#Yes">
                  Sunt voluptate dolorem, porro praesentium harum excepturi quam alias quis!
                </a>
              </li>
            </ul>
          </Content>
        </Columns.Column>
        <Columns.Column size={4}>
          <Container>
            <Columns centered>
              <Columns.Column size={8}>
                <div>
                  <Image
                    rounded
                    src="https://source.unsplash.com/featured/256x256/?portrait+lady"
                  />
                  <p className="has-text-centere  d" style={{ marginTop: `1em` }}>
                    by Juana Learn
                  </p>
                  <p style={{ marginTop: `1em` }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id officiis animi
                    libero nisi voluptatibus nemo possimus incidunt, distinctio fugit culpa!
                  </p>
                </div>
                <div style={{ marginTop: `1em` }}>
                  <Button
                    fullwidth
                    color="primary"
                    size="medium"
                    renderAs={Link}
                    to={`/viewer/${id}`}
                  >
                    Play this course
                  </Button>
                </div>
              </Columns.Column>
            </Columns>
          </Container>
        </Columns.Column>
      </Columns>
    </Container>
  );
};

Course.propTypes = {
  course: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Course;
