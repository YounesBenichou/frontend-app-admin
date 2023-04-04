import React, { useState, useEffect } from "react";
import { Button, Container, Col } from "@edx/paragon";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { slice, concat } from "lodash";

import { getConfig } from "@edx/frontend-platform";

import CourseCard from "../Card/Card";
import AboutUS from "../About-us/About";

import "./Landing-page.scss";

const URL_Courses = getConfig().LMS_BASE_URL + "/api/courses/v1/courses/";
// const URL_Courses = "http://localhost:8000" + "/api/courses/v1/courses/";

const LIMIT = 4;

const LandingPage = () => {
  const [showMore, setShowMore] = useState(true);
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(LIMIT);

  const update_data = async function () {
    try {
        const result = await axios(URL_Courses, {
            params: { page_size: 100 },
          });
          setData(result.data.results);
        
    } catch (error) {
        console.log(error);
        console.log(URL_Courses)
    }
   
  };

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < data.length;
    const newList = concat(data, slice(index, newIndex));
    setIndex(newIndex);
    setData(newList);
    setShowMore(newShowMore);
  };

  useEffect(() => {
    update_data();
  }, []);

  return (
    <main>
      <div className="gray-continer-claim">
        <div className="wrapper-continer">
          <h1>Build your skills with our online courses</h1>
          <h5>
            At vero eos et accusamus et iustio odio dignissimos ducimus qui
            blanditiis praesentium
          </h5>
          <br />
          <div className="btn-container">
          <a className="explore" href={getConfig().LMS_BASE_URL + "/dashboard"}><Button.Deprecated className="btn-success">Explore Courses</Button.Deprecated></a>

          </div>
        </div>
      </div>
      <Container className="cards-continer">
        <h2 className="course-title">Our courses</h2>
        <Row>
          {data?.slice(0, index).map((data) => (
            <Col className="course-card" key={data.id} sm={6} xs={12}>
              <CourseCard key={data.id} {...data} />
            </Col>
          ))}
        </Row>
        {data?.length > LIMIT ? (
          showMore && (
            <div className="center">
              <Button className="load-more" onClick={loadMore}>
                View more
              </Button>
            </div>
          )
        ) : (
          <></>
        )}
      </Container>
      <AboutUS />
    </main>
  );
};

export default LandingPage;